B=http://localhost:8000
pass=0; fail=0
chk(){ # name expected method path token [body]
  local code
  if [ -n "$6" ]; then code=$(curl -s -o /tmp/r.json -w '%{http_code}' -X $3 "$B$4" ${5:+-H "Authorization: Bearer $5"} -H 'Content-Type: application/json' -d "$6");
  else code=$(curl -s -o /tmp/r.json -w '%{http_code}' -X $3 "$B$4" ${5:+-H "Authorization: Bearer $5"}); fi
  if [ "$code" = "$2" ]; then pass=$((pass+1)); echo "PASS $1 ($code)"; else fail=$((fail+1)); echo "FAIL $1 expected $2 got $code: $(head -c 200 /tmp/r.json)"; fi
}
tok(){ curl -s -X POST $B/auth/login -H 'Content-Type: application/json' -d "{\"login\":\"$1\",\"password\":\"$2\"}" | sed -E 's/.*"accessToken":"([^"]+)".*/\1/'; }
SA=$(tok "${ADMIN_LOGIN:-super@uzchess.uz}" "${ADMIN_PASSWORD:-Super123!}")
chk "superAdmin roles list" 200 GET /admin/roles/list "$SA"
chk "superAdmin otp list" 200 GET "/admin/otp-codes/list" "$SA"
chk "anon admin" 401 GET /admin/Books/list ""
chk "otp public removed" 404 GET /public/otp-codes/list ""
U=$(curl -s -X POST $B/auth/register -H 'Content-Type: application/json' -d '{"fullName":"Ali","login":"ali@x.uz","loginType":"email","password":"Passw0rd!"}' | sed -E 's/.*"accessToken":"([^"]+)".*/\1/')
chk "user me" 200 GET /auth/me "$U"
grep -q '"permissions":\[\]' /tmp/r.json && echo "PASS user has no permissions" || echo "FAIL perms: $(cat /tmp/r.json)"
chk "user admin books" 403 GET /admin/Books/list "$U"
chk "user cart own" 200 GET /public/cart-items/list "$U"
chk "anon cart" 401 GET /public/cart-items/list ""
chk "anon purchased list" 401 GET /public/purchased-courses/list ""
chk "public users safe" 200 GET /public/users/list ""
grep -q '"login"' /tmp/r.json && echo "FAIL public users leaks login" || echo "PASS public users hides login"
chk "SA create moderator" 201 POST /admin/users/create "$SA" '{"role":"moderator","fullName":"Mod","login":"mod@x.uz","loginType":"email","password":"Passw0rd!","isVerified":true,"isActive":true}'
chk "SA create admin" 201 POST /admin/users/create "$SA" '{"role":"admin","fullName":"Adm","login":"adm@x.uz","loginType":"email","password":"Passw0rd!","isVerified":true,"isActive":true}'
M=$(tok mod@x.uz 'Passw0rd!'); A=$(tok adm@x.uz 'Passw0rd!')
chk "mod read reviews" 200 GET /admin/course-reviews/list "$M"
chk "mod read books" 200 GET /admin/Books/list "$M"
chk "mod write books" 403 POST /admin/Books/create "$M" '{}'
chk "mod read users" 200 GET /admin/users/list "$M"
chk "mod create user" 403 POST /admin/users/create "$M" '{"role":"user","fullName":"X","login":"x1@x.uz","loginType":"email","password":"Passw0rd!","isVerified":true,"isActive":true}'
chk "mod otp" 403 GET /admin/otp-codes/list "$M"
chk "admin write books (validation)" 400 POST /admin/Books/create "$A" '{}'
chk "admin otp" 403 GET /admin/otp-codes/list "$A"
chk "admin roles list" 200 GET /admin/roles/list "$A"
chk "admin assign role" 403 PATCH /admin/roles/assign/2 "$A" '{"role":"moderator"}'
chk "admin create superAdmin" 403 POST /admin/users/create "$A" '{"role":"superAdmin","fullName":"X","login":"x2@x.uz","loginType":"email","password":"Passw0rd!","isVerified":true,"isActive":true}'
chk "admin create admin" 403 POST /admin/users/create "$A" '{"role":"admin","fullName":"X","login":"x3@x.uz","loginType":"email","password":"Passw0rd!","isVerified":true,"isActive":true}'
chk "admin create moderator" 201 POST /admin/users/create "$A" '{"role":"moderator","fullName":"X","login":"x4@x.uz","loginType":"email","password":"Passw0rd!","isVerified":true,"isActive":true}'
chk "admin delete superAdmin" 403 DELETE /admin/users/delete/1 "$A"
chk "SA assign admin->user2" 200 PATCH /admin/roles/assign/2 "$SA" '{"role":"moderator"}'
chk "user2 now moderator (fresh role, old token)" 200 GET /admin/course-reviews/list "$U"
chk "SA self demote" 403 PATCH /admin/roles/assign/1 "$SA" '{"role":"user"}'
chk "SA deactivate mod" 200 PATCH /admin/users/update/3 "$SA" '{"role":"moderator","fullName":"Mod","profileImage":"","login":"mod@x.uz","loginType":"email","password":"","birthDate":"2000-01-01","isVerified":true,"isActive":false}'
chk "deactivated mod token rejected" 401 GET /admin/course-reviews/list "$M"
echo "TOTAL pass=$pass fail=$fail"
