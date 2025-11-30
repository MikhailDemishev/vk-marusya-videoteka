import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../../api/auth/login/login.api";
import { type LoginType } from "../../../api/auth/login/login.schemas";
import { queryClient } from "../../../main";
import { useAppDispatch } from "../../../app/hooks";
import { closeModal } from "../../modal/modalOpenCloseSlice";
import { setAuthStatus } from "../model/authStatusSlice";


export function useLogin() {
    const dispatch = useAppDispatch();


    const loginMutation = useMutation({
        mutationFn: (data: LoginType) => loginUser(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["auth", "login"] });
            console.log('successful Login');
            dispatch(setAuthStatus("authorized"))
            dispatch(closeModal())
        },

        onError: (error: unknown) => {
            if (error instanceof Error) {
                console.error(error.message);
            }
        },
    })


    return loginMutation
}
