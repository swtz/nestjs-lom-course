import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecadosModule } from 'src/recados/recados.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoasModule } from 'src/pessoas/pessoas.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    RecadosModule,
    PessoasModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'numb',
      database: 'lom-nestjs-course',
      password: 'admin',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
