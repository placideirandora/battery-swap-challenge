export interface IDriver {
  id?: number;
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  district: string;
  sector: string;
  nationalId: string;
  createdAt?: Date;
  updatedAt?: Date;
}
