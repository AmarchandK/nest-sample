import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.enity';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],

  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
