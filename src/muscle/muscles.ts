import { BodyPart, Muscle, MuscleGroup } from '../common/types/muscles.types';

const updateToGroup = (part: Pick<Muscle, 'name'>, group: MuscleGroup) => ({
  ...part,
  group,
});

const shoulder: BodyPart = [
  { name: 'Trapezius' },
  { name: 'Deltoid' },
  { name: 'Sternocleidomastoid' },
].map((part) => updateToGroup(part, 'shoulder'));
const lowerArms: BodyPart = [
  { name: 'Biceps Brachii' },
  { name: 'Brachialis' },
  { name: 'Brachioradialis' },
  { name: 'Triceps Brachii' },
].map((part) => updateToGroup(part, 'upper arm'));
const foreArm: BodyPart = [
  { name: 'Flexor Carpi Radialis' },
  { name: 'Flexor Digitorum' },
].map((part) => updateToGroup(part, 'forearm'));
const legs: BodyPart = [
  { name: 'Soleus' },
  { name: 'Gastrocnemius' },
  { name: 'Bicep Femoris' },
  { name: 'Gluteus Medius' },
  { name: 'Gluteus Maximus' },
].map((part) => updateToGroup(part, 'leg'));
const chest: BodyPart = [
  { name: 'Pectoralis Minor' },
  { name: 'Pectoralis Major' },
  { name: 'Serratus Anterior' },
].map((part) => updateToGroup(part, 'chest'));

export const muscles: BodyPart = [
  ...lowerArms,
  ...foreArm,
  ...shoulder,
  ...legs,
  ...chest,
];
