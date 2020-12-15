import { Attributes } from "./attributes.model";
import { Network } from "./network.model";
export interface Position {
    id: number;
    attributes: Attributes;
    deviceId: number;
    type?: any;
    protocol: string;
    serverTime: Date;
    deviceTime: Date;
    fixTime: Date;
    outdated: boolean;
    valid: boolean;
    latitude: number;
    longitude: number;
    altitude: number;
    speed: number;
    course: number;
    address: string;
    accuracy: number;
    network: Network;
}
