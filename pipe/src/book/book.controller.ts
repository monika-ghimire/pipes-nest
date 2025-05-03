import { Body, Controller , Get ,Param, ParseIntPipe, Post, ValidationPipe} from "@nestjs/common";
import { BookDto } from "./dto/book.dto";
import { BookPipe } from "./dto/pipes/book.pip";
import { BookPipeValidator } from "./dto/pipes/validator.pip";

@Controller("book")
export class BookController {


    @Get(':id')
    findBookById(@Param('id' , ParseIntPipe) id:number) :string {
        console.log(id , typeof (id))
        return "Book by id"
    }

    //we have more piles 'ParseIntPipe' according need to doc 


    //custom pipe
      @Post('/add-custom')
      addBookCustom(@Body(new BookPipe()) book : BookDto) :string{
        console.log(book)
        return "Book added"
      }


      //custom pipe with validator
      @Post('/add')
      addBook(@Body(new BookPipeValidator()) book : BookDto) :string{
        console.log(book)
        return "Book added"
      }


      //using class validator and class transformer
      @Post('/addnew')
      addBooknew(@Body(new ValidationPipe())  book : BookDto) :string{
        console.log(book)
        return "Book added"
      }
}