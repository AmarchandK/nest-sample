import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}
  @Get('all')
  async getAllBooks() {
    return await this.bookService.findAll();
  }
  @Post('create')
  createBook(@Body() book: CreateBookDto) {
    return this.bookService.createBook(book);
  }
  @Get(':id')
  getBookByID(@Param('id') id: string) {
    console.log('id is ' + id);
    return this.bookService.findOneBook(id);
  }
  @Delete(':id')
  removeBook(@Param('id') id: string) {
    return this.bookService.removeBook(id);
  }
  @Put('update/:id')
  updateBook(@Param('id') id: string, @Body() bookDto: CreateBookDto) {
    return this.bookService.updateBook(id, bookDto);
  }
}
