import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../../api/auth/login/login.api";
import { type LoginType } from "../../../api/auth/login/login.schemas";
import { queryClient } from "../../../main";
import { useAppDispatch } from "../../../app/hooks";
import { closeModal } from "../../modal/modalOpenCloseSlice";


export function useLogin() {
    const dispatch = useAppDispatch();


    const loginMutation = useMutation({
        mutationFn: (data: LoginType) => loginUser(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["profile"] });
            console.log('successful Login');
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
