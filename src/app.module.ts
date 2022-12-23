import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MuscleController } from './muscle/muscle.controller';
import { ExerciseController } from './exercise/exercise.controller';
import { EquipmentController } from './equipment/equipment.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    MuscleController,
    ExerciseController,
    EquipmentController,
  ],
  providers: [AppService],
})
export class AppModule {}
