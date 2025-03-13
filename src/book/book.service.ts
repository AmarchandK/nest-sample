import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.enity';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book) private bookRepository: Repository<Book>,
  ) {}
  async findAll(): Promise<Book[]> {
    console.log('all called');
    return await this.bookRepository.find();
  }
  async createBook(bookDto: CreateBookDto): Promise<Book[]> {
    const book = this.bookRepository.create(bookDto);
    console.log(book.title);
    return await this.bookRepository.find();
  }
  async findOneBook(id: string): Promise<Book> {
    const book = await this.bookRepository.findOneBy({ id });
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    return book;
  }
  async removeBook(id: string): Promise<{ message: string }> {
    const book = await this.findOneBook(id);
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    this.bookRepository.remove(book);
    return { message: 'Book deleted successfully' };
  }
  async updateBook(id: string, bookDto: CreateBookDto): Promise<Book> {
    const book = await this.findOneBook(id);
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    Object.assign(book, bookDto);
    return await this.bookRepository.save(book);
  }
}
