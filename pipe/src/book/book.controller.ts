import { Body, Controller , Get ,Param, ParseIntPipe, Post} from "@nestjs/common";
import { BookDto } from "./dto/book.dto";
import { BookPipe } from "./dto/pipes/book.pip";

@Controller("book")
export class BookController {


    @Get(':id')
    findBookById(@Param('id' , ParseIntPipe) id:number) :string {
        console.log(id , typeof (id))
        return "Book by id"
    }

    //we have more piles 'ParseIntPipe' according need to doc 

      @Post('/add')
      addBook(@Body(new BookPipe()) book : BookDto) :string{
        console.log(book)
        return "Book added"
      }
}