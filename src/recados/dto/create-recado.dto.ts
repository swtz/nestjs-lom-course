import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateRecadoDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  readonly texto!: string;

  @IsString()
  @IsNotEmpty()
  readonly de!: string;

  @IsString()
  @IsNotEmpty()
  readonly para!: string;
}
