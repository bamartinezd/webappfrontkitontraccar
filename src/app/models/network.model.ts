import { CellTower } from "./celltower.model";
export interface Network {
    radioType: string;
    considerIp: boolean;
    cellTowers: CellTower[];
}

