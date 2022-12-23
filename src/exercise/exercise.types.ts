import { MuscleGroup } from '../common/types/muscles.types';

export type Difficulty = 'beginner' | 'intermediate' | 'hard';

type Equipment = 'Dumbbell' | 'Barbell' | 'None' | 'Body weight';

export interface Exercise {
  id: number;
  name: string;
  group: MuscleGroup;
  level: Difficulty;
  equipment: Array<Equipment>;
}
