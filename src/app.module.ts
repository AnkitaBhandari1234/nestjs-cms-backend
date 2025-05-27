import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BannersModule } from './banners/banners.module';
import { Banner } from './banners/entities/banner.entity';

@Module({
  imports: [

     TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'ankitabhandari',
      database: 'macro',
      entities: [Banner],
      autoLoadEntities:true,
      synchronize: true,
    }),

     BannersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
