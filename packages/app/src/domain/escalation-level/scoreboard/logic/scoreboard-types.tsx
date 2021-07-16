import { VrEscalationLevel } from '@corona-dashboard/common';
import { EscalationLevel } from '~/domain/restrictions/type';

export type VrScoreboardData = {
  data: VrEscalationLevel;
  vrName: string;
  vrCode: string;
};

export type ScoreboardRowData = {
  escalationLevel: EscalationLevel;
  vrData: VrScoreboardData[];
};
