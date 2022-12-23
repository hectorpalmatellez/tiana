import { Controller, Get, NotFoundException, Query } from '@nestjs/common';
import { exercises } from './exercises';
import { Exercise } from './exercise.types';

@Controller('exercise')
export class ExerciseController {
  @Get()
  getExercises(): Array<Exercise> {
    return exercises;
  }

  @Get('/filter')
  getFilteredExercises(@Query() query: Partial<Exercise>) {
    const result = exercises.filter((exercise) => {
      return Object.keys(query)
        .map((key) => query[key] === exercise[key])
        .every((value) => value === true);
    });
    if (!result.length) {
      throw new NotFoundException('No exercises match this filter');
    }

    return result;
  }
}
