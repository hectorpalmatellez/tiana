export type MuscleGroup =
  | 'forearm'
  | 'upper arm'
  | 'leg'
  | 'back'
  | 'shoulder'
  | 'chest';

export interface Muscle {
  name: string;
  group: MuscleGroup;
}
export type BodyPart = Array<Muscle>;
