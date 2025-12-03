import { apiRequest } from "../../http";
import { type LogoutResponse, LogoutResponseSchema } from "./logout.schemas";


export function logoutUser() {
    return apiRequest<LogoutResponse>({
        schema: LogoutResponseSchema,
        url: 'auth/logout',
    })
}
