import { Controller, Get } from '@nestjs/common';
import { ConceptsService } from './concepts.service';

@Controller('concepts')
export class ConceptsController {
  constructor(private readonly conceptService: ConceptsService) {}
  @Get('hello')
  getHello(): string {
    return this.conceptService.getHello();
  }
}
