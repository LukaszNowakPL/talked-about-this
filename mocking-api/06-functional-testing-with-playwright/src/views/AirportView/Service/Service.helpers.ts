import {ServiceDto} from "../../../utils/services";

export const getServiceName = (id: number, services: ServiceDto[]) => {
    return services.filter(({id: servieId}) => servieId === id)[0].name
}