export interface AirportListItemDto {
  id: number;
  name: string;
  iata: string;
  cities: string;
  country_id: number;
}

export interface AirportDto {
  id: number;
  name: string;
  iata: string;
  cities: string;
  airlines: number[];
  services: number[];
}

export interface AirportModel {
  name: string;
  iata: string;
  cities: string;
  airlines: number[];
  services: number[];
}
