import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/BaseModel';
import { ApiProperty } from '@nestjs/swagger';

@Entity('books')
export class BooksEntity extends BaseModel {

  @Column()
  @ApiProperty()
  authorId: number;

  @Column({})
  @ApiProperty()
  categoryId: number;

  @Column({})
  @ApiProperty()
  languageId: number;

  @Column({})
  @ApiProperty()
  difficultyId: number;

  @Column({ length: 128 })
  @ApiProperty()
  title: string;

  @Column({ type: 'text' })
  @ApiProperty()
  description: string;

  @Column({ length: 128 })
  @ApiProperty()
  image: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  @ApiProperty()
  price: number;

  @Column({ type: 'decimal', precision: 12, scale: 2, nullable: false })
  @ApiProperty()
  newPrice: number;

  @Column({ type: 'decimal', precision: 12, scale: 1, nullable: false })
  @ApiProperty()
  rating: number;

  @Column({ default: 0 })
  @ApiProperty()
  reviewsCount: number;

  @Column()
  @ApiProperty()
  pages: number;

  @Column({ type: 'date' })
  @ApiProperty()
  pubDate: number;
}