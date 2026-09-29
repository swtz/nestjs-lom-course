import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecadosModule } from 'src/recados/recados.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [RecadosModule],
})
export class AppModule {}
