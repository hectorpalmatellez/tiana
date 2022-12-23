import { Exercise } from './exercise.types';

export const exercises: Array<Exercise> = [
  {
    id: 1,
    name: 'Dumbbell Curl',
    group: 'upper arm',
    level: 'beginner',
    equipment: ['Dumbbell'],
  },
  {
    id: 2,
    name: 'Scott Bench Curl',
    group: 'upper arm',
    level: 'intermediate',
    equipment: ['Dumbbell', 'Barbell'],
  },
  {
    id: 3,
    name: 'Squat',
    group: 'leg',
    level: 'beginner',
    equipment: ['Barbell'],
  },
  {
    id: 4,
    name: 'Standing Calf Raises',
    group: 'leg',
    level: 'beginner',
    equipment: ['Body weight', 'Dumbbell'],
  },
  {
    id: 5,
    name: 'Bench Press',
    group: 'chest',
    level: 'beginner',
    equipment: ['Dumbbell', 'Barbell'],
  },
];
