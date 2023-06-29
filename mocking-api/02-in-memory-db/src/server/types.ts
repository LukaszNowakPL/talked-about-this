export interface CountryModel {
  id: number;
  name: string;
}

export interface AirportModel {
  id: number;
  name: string;
  iata: string;
  cities: string;
  country_id: number;
  airlines: number[];
  services: number[];
}
