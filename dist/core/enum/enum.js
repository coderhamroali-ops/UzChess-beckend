"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get MatchType () {
        return MatchType;
    },
    get cartItemType () {
        return cartItemType;
    },
    get loginType () {
        return loginType;
    },
    get otpType () {
        return otpType;
    },
    get reportType () {
        return reportType;
    },
    get role () {
        return role;
    },
    get winnerType () {
        return winnerType;
    }
});
var MatchType = /*#__PURE__*/ function(MatchType) {
    MatchType[MatchType["Classic"] = 0] = "Classic";
    MatchType[MatchType["Rapid"] = 1] = "Rapid";
    MatchType[MatchType["Blitz"] = 2] = "Blitz";
    return MatchType;
}({});
var winnerType = /*#__PURE__*/ function(winnerType) {
    winnerType[winnerType["first"] = 0] = "first";
    winnerType[winnerType["second"] = 1] = "second";
    winnerType[winnerType["draw"] = 2] = "draw";
    return winnerType;
}({});
var role = /*#__PURE__*/ function(role) {
    role[role["user"] = 0] = "user";
    role[role["admin"] = 1] = "admin";
    role[role["superAdmin"] = 2] = "superAdmin";
    return role;
}({});
var loginType = /*#__PURE__*/ function(loginType) {
    loginType[loginType["email"] = 0] = "email";
    loginType[loginType["number"] = 1] = "number";
    return loginType;
}({});
var otpType = /*#__PURE__*/ function(otpType) {
    otpType[otpType["register"] = 0] = "register";
    otpType[otpType["passwordReset"] = 1] = "passwordReset";
    otpType[otpType["numberChange"] = 2] = "numberChange";
    return otpType;
}({});
(function(role) {
    role["USER"] = "user";
    role["ADMIN"] = "admin";
})(role);
(function(loginType) {
    loginType["EMAIL"] = "email";
    loginType["PHONE"] = "phone";
})(loginType);
var cartItemType = /*#__PURE__*/ function(cartItemType) {
    cartItemType["BOOK"] = "book";
    cartItemType["SOUVENIR"] = "souvenir";
    return cartItemType;
}({});
var reportType = /*#__PURE__*/ function(reportType) {
    reportType["BOOK_REVIEW"] = "book_review";
    reportType["COURSE_REVIEW"] = "course_review";
    return reportType;
}({});

//# sourceMappingURL=enum.js.map