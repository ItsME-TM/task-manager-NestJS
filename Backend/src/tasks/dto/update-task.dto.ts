import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateTaskDto {
  @ApiPropertyOptional({ 
    description: 'The title of the task',
    example: 'Updated Task Title' 
  })
  title?: string;

  @ApiPropertyOptional({ 
    description: 'The description of the task',
    example: 'Updated task description' 
  })
  description?: string;

  @ApiPropertyOptional({ 
    description: 'Whether the task is completed',
    example: true 
  })
  completed?: boolean;
}