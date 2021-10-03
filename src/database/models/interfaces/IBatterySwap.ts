export interface IBatterySwap {
  id?: number;
  batteryId: number;
  driverId: number;
  stationId: number;
  energyUsed: number; // kWh  - Ex: 40-kWh battery | Charge - 1 USD per kWh
  createdAt?: Date;
  updatedAt?: Date;
}
