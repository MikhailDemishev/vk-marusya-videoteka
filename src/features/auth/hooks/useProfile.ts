import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../../../api/auth/profile/profile.api";
export function useUserProfile() {
    return useQuery({
        queryFn: () => getUserProfile(),
        queryKey: ["profile"],
        retry: false,
    });
}
