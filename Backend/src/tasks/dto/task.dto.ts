import { ApiProperty } from '@nestjs/swagger';

export class TaskDto {
  @ApiProperty({ description: 'The ID of the task', example: 1 })
  id: number;

  @ApiProperty({ description: 'The title of the task', example: 'Task Title' })
  title: string;

  @ApiProperty({ description: 'The description of the task', example: 'Task description here' })
  description: string;

  @ApiProperty({ description: 'Whether the task is completed', example: false })
  completed: boolean;

  @ApiProperty({ description: 'The date the task was created', example: '2024-01-01T12:00:00Z' })
  createdAt: Date;
}
