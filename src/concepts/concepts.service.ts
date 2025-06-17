import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceptsService {
  getHello(): string {
    return 'Modulo de serviços de conceito!';
  }
}
