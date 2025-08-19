import { Injectable } from '@nestjs/common';
import { CreateRegistroDto } from './dto/create-registro.dto';
import { UpdateRegistroDto } from './dto/update-registro.dto';

@Injectable()
export class RegistrosService {
  create(createRegistroDto: CreateRegistroDto) {
    return 'This action adds a new registro';
  }

  findAll() {
    return `This action returns all registros`;
  }

  findOne(id: number) {
    return `This action returns a #${id} registro`;
  }

  update(id: number, updateRegistroDto: UpdateRegistroDto) {
    return `This action updates a #${id} registro`;
  }

  remove(id: number) {
    return `This action removes a #${id} registro`;
  }
}
