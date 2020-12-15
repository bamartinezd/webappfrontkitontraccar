import { Attributes } from "./attributes.model";
export interface Device {
    id: number;
    attributes: Attributes;
    groupId: number;
    name: string;
    uniqueId: string;
    status: string;
    lastUpdate: Date;
    positionId: number;
    geofenceIds: any[];
    phone: string;
    photo: string;
    model: string;
    contact: string;
    category: string;
    disabled: boolean;
}
