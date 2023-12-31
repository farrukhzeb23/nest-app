import { IsDateString, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { TodoStatus } from '../todo-status.enum';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsEnum(TodoStatus)
  status: TodoStatus = TodoStatus.IN_COMPLETE; // Default value

  @IsDateString()
  @IsNotEmpty()
  dueDate: string;
}
