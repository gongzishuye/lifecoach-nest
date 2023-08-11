import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaseController } from './base/base.controller';
import { BaseModule } from './base/base.module';
import { BaseService } from './base/base.service';

@Module({
  imports: [BaseModule],
  controllers: [AppController, BaseController],
  providers: [AppService, BaseService],
})
export class AppModule {}
