import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'dulya',
    password: 'dulya@1120',
    database: 'nestjs_database',
    entities: [User],
    synchronize: true,
    driver: require('mysql2'),
  }), 
  UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
