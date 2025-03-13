import { Book } from 'src/book/entities/book.enity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  age: number;
//   @OneToMany(() => Book, (book) => book.user)
//   books: Book[];
}
