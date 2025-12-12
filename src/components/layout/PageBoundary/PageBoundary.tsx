import { type FC } from "react";
import { Loader } from "../../entities/Loader/Loader";
import { Button } from "../../UI/Button/Button";

import "./PageBoundary.scss";
import { useQueryClient } from "@tanstack/react-query";


export interface IPageBoundaryProps {
    isLoading: boolean;
    isError: Error | null;
    children: React.ReactNode;

}
export const PageBoundary: FC<IPageBoundaryProps> = ({ isLoading, isError, children }) => {

    const queryClient = useQueryClient();

    if (isLoading) {
        return <Loader />
    }



    if (isError) {
        return (
            <div className="page-notfound">
                <span className="page-notfound__warning">Страница недоступна</span>
                <span className="page-notfound__text">Пожалуйста, нажмите на кнопку ниже, чтобы перезагрузить страницу</span>
                <Button className="page-notfound__reload" size="m" onClick={() => {
                    console.log("⟳ INVALIDATE QUERIES → повторная загрузка страницы");
                    queryClient.invalidateQueries();
                }} >перезагрузить страницу</Button>
            </div>
        )
    }


    return children
}
