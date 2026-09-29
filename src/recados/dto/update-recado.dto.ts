import { PartialType } from '@nestjs/mapped-types';
import { CreateRecadoDto } from './create-recado.dto';
import { IsBoolean } from 'class-validator';

export class UpdateRecadoDto extends PartialType(CreateRecadoDto, {
  skipNullProperties: false,
}) {
  @IsBoolean()
  lido?: boolean;
}
