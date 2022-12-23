import { Controller, Get, NotFoundException, Query } from '@nestjs/common';
import { Muscle } from '../common/types/muscles.types';
import { muscles } from './muscles';

@Controller('muscle')
export class MuscleController {
  @Get()
  getMuscles(): Array<Muscle> {
    return muscles;
  }
  @Get('/filter')
  getFilteredMuscles(@Query() query: Partial<Muscle>): Array<Muscle> {
    const result = muscles.filter((exercise) => {
      return Object.keys(query)
        .map((key) => query[key] === exercise[key])
        .every((value) => value === true);
    });
    if (!result.length) {
      throw new NotFoundException('No muscles match this group');
    }
    return result;
  }
}
