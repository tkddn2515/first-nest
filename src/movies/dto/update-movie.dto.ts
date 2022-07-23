import { IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

// PartialType : 토대가 되는 DTO의 일부만 사용해도 되도록

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}