import {
  Controller,
  Get,
  Query,
  Patch,
  Param,
  Body,
  Post,
  Delete,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionDto } from './dto/question.dto';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  // 底下test是根路由
  @Get('test')
  getTest(): string {
    throw new HttpException('获取数据失败', HttpStatus.BAD_REQUEST);
    // return 'question test';
  }

  @Get()
  findAll(
    @Query('keyword') keyword: string,
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
  ) {
    console.log(keyword, page, pageSize);
    return {
      list: ['a', 'b', 'c'],
      count: 10,
    };
  }

  @Post()
  create() {
    return this.questionService.create();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionService.findOne(id);
  }

  @Patch(':id')
  updateOne(@Param('id') id: string, @Body() questionDto: QuestionDto) {
    console.log('questionDto', questionDto);
    // body
    return {
      id,
      title: 'aaa',
      desc: 'bbb',
    };
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.questionService.delete(id);
  }
}
