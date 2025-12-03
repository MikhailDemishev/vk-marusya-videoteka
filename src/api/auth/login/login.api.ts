import { apiRequest } from "../../http";
import { LoginResponseSchema, type LoginResponse, type LoginType } from "./login.schemas";
import { } from "./login.schemas";


export function loginUser(data: LoginType) {
    return apiRequest<LoginResponse>({
        schema: LoginResponseSchema,
        method: 'POST',
        url: 'auth/login',
        data: data,
    })
}
