import { apiRequest } from "../../http";
import { ProfileSchema } from "./profile.schemas";
import { type ProfileResponse } from "./profile.schemas";


export function getUserProfile() {
    return apiRequest<ProfileResponse>({
        schema: ProfileSchema,
        url: 'profile'
    })
}
