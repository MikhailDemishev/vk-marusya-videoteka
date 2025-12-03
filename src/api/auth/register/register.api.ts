import { apiRequest } from "../../http";
import { RegisterResponseSchema, type RegisterType, type RegisterResponse } from "./register.schemas";


export function registerUser(data: RegisterType) {
    return apiRequest<RegisterResponse>({
        schema: RegisterResponseSchema,
        method: 'POST',
        url: 'user',
        data: data,
    })
}
