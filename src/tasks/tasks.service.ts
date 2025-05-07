import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ){}

  async getAllTasks(): Promise<Task[]>{
    return this.taskRepository.find();
  }

  async createTask(title: string, description: string): Promise<Task> {
    const task = this.taskRepository.create({ title, description, status: 'OPEN' });
    return this.taskRepository.save(task);
  }
  
}