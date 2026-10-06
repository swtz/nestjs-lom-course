import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { isNumber } from 'class-validator';

@Injectable()
export class ParseIntIdPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.type !== 'param' || metadata.data !== 'id') {
      return value;
    }

    const parsedValue = Number(value);

    if (isNaN(parsedValue)) {
      throw new BadRequestException(
        'ParseIntIdPipe espera uma string numérica',
      );
    }

    if (parsedValue < 0) {
      throw new BadRequestException(
        'ParseIntPipe espera um número maior do que zero',
      );
    }

    if (!isNumber(parsedValue, { maxDecimalPlaces: 0 })) {
      throw new BadRequestException(
        'ParseIntPipe espera um número sem casas decimais',
      );
    }

    return parsedValue;
  }
}
