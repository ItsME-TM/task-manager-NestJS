import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './tasks/task.entity';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users,module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL, 
      entities: [Task, User],
      synchronize: true,
    }),
    TasksModule,
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
