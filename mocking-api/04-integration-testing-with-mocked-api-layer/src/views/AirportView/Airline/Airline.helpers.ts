import {AirlineDto} from "../../../utils/airlines";

export const getAirlineName = (id: number, airlines: AirlineDto[]) => {
    return airlines.filter(({id: airlineId}) => airlineId === id)[0].name
}