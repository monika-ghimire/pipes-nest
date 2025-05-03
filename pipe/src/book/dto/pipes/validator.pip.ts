
import {  ArgumentMetadata, BadRequestException, PipeTransform } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BookDto } from '../book.dto';
import { validate } from 'class-validator';

export class BookPipeValidator implements PipeTransform {
  async  transform(value: any, metadata: ArgumentMetadata) : Promise<any>{
       
    const bookClass = plainToInstance(BookDto, value);

    const errors = await validate(bookClass);

    if (errors.length > 0) {
        throw new BadRequestException('Validation failed!' + JSON.stringify(errors));
    }


    return bookClass;

    }
}
     