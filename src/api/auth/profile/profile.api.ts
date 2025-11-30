import { apiRequest } from "../../http";
import { ProfileSchema } from "./profile.schemas";
import { type ProfileType } from "./profile.schemas";


export function userProfile() {
    return apiRequest<ProfileType>({
        schema: ProfileSchema,
        extension: 'profile'
    })
}
