import type { FC } from "react";
import { Loader } from "../../entities/Loader/Loader";
import "./PageBoundary.scss";

///wraps every page & checks load status. if loading-loader. error - error screen

export interface IPageBoundaryProps {
    isLoading: boolean;
    isError: Error | null;
    children: React.ReactNode;
}
export const PageBoundary: FC<IPageBoundaryProps> = ({ isLoading, isError, children }) => {
    if (isLoading) {
        return <Loader />
    }
    if (isError) {
        return (
            <div>Временное сообщение - страница не найдена</div>
        )
    }
    return children
}
