import { GeoLocation } from "./GeoLocation";
import { WorkingHours } from "./WorkingHours";

export interface StoreInfo {
  geoLocation: GeoLocation;
  userPoint: number;
  workingHours: WorkingHours,
  status: string;
  rate: number;
  minOrderPrice: number;
}