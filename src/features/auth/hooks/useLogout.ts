import { useMutation } from "@tanstack/react-query";
import { logoutUser } from "../../../api/auth/logout/logout.api";
import { queryClient } from "../../../main";


export function useLogout() {


    const loginMutation = useMutation({
        mutationFn: () => logoutUser(),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["profile"] });
            queryClient.resetQueries({ queryKey: ["profile"] });

            console.log('logged out');
        },

        onError: (error: unknown) => {
            if (error instanceof Error) {
                console.error(error.message);
            }
        },
    })


    return loginMutation
}
