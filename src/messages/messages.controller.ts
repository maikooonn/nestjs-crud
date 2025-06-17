import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  findAll() {
    return 'List all';
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `List one by id: ${id}`;
  }
  @Post(':id')
  create(@Body() content: any) {
    return `List one by id: ${content}`;
  }
}
