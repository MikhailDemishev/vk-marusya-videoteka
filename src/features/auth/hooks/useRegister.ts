import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../../../api/auth/register/register.api";
import { queryClient } from "../../../main";

import { type RegisterResponse, type ValidateRegForm } from "../../../api/auth/register/register.schemas";
import { useAppDispatch } from "../../../app/hooks";
import { setAuthModalStatus } from "../model/authModalStatusSlice";

export function useRegister() {
    const dispatch = useAppDispatch();


    return useMutation<RegisterResponse, Error, ValidateRegForm>({
        mutationFn: (data) => {
            return registerUser(data);
        },

        onSuccess: (data) => {
            console.log("successful signUp", data);
            dispatch(setAuthModalStatus("success"))
            queryClient.invalidateQueries({ queryKey: ["user"] });
        },

        onError: (error: unknown) => {
            console.error("error", error);
        },
    });
}
