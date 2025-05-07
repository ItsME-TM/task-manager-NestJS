import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.interface';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }

  @Post()
  createTask(@Body('title') title: string, @Body('description') description: string): Task {
    return this.taskService.createTask(title, description);
  }

  @Get(':id')
  getTaskById(@Param('id') id: string): Task | undefined {
    return this.taskService.getTaskById(id);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): void {
    this.taskService.deleteTask(id);
  }

  @Patch(':id/status')
  updateTaskStatus(@Param('id') id: string, @Body('status') status: 'OPEN' | 'IN_PROGRESS' | 'DONE'): Task {
    return this.taskService.updateTaskStatus(id, status);
  }
}