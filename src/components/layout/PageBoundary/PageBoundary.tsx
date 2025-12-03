import type { FC } from "react";
import { Loader } from "../../Loader/Loader";
import "./PageBoundary.scss";

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
