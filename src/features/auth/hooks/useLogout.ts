import { useMutation } from "@tanstack/react-query";
import { logoutUser } from "../../../api/auth/logout/logout.api";
import { queryClient } from "../../../main";
import { useAppDispatch } from "../../../app/hooks";
import { setAuthStatus } from "../model/authStatusSlice";


export function useLogout() {
    const dispatch = useAppDispatch();


    const loginMutation = useMutation({
        mutationFn: () => logoutUser(),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["auth", "logout"] });
            console.log('logged out');
            dispatch(setAuthStatus("noAuthorized"))
        },

        onError: (error: unknown) => {
            if (error instanceof Error) {
                console.error(error.message);
            }
        },
    })


    return loginMutation
}
