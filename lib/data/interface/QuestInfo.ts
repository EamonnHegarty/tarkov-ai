export interface QuestInfo {
  id: string;
  name: string;
  trader: string;
  map: string | null;
  kappaRequired: boolean;
  completed?: boolean;
}
