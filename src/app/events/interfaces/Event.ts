import { SportGroup } from './SportGroup';

export interface Event {
  name: string,
  date: string,
  id: number,
  sports_groups: SportGroup[]
}
