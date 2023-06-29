export interface AirlineDto {
    id: number,
    name: string,
    icao: string
}

export const AIRLINES: AirlineDto[] = [
    {
        id: 1,
        name: 'PLL Lot',
        icao: 'lo'
    },
    {
        id: 2,
        name: 'Lufthansa',
        icao: 'lh',
    },
    {
        id: 3,
        name: 'Vueling',
        icao: 'vy'
    },
    {
        id: 4,
        name: 'Ryanair',
        icao: 'fr'
    },
    {
        id: 5,
        name: 'Wizz Air',
        icao: 'w6'
    },
    {
        id: 6,
        name: 'Iberia',
        icao: 'ib'
    }
]