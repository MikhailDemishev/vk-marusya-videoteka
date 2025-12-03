import "./Grid.scss";


interface IGrid<T> {
    items: T[];
    renderItem: (
        item: T,
        index: number,
        showCloseButton: boolean
    ) => React.ReactNode;
    showCloseButton?: boolean;
    className?: string;
}

export function Grid<T>({
    items,
    renderItem,
    className = "",
    showCloseButton = false,
}: IGrid<T>) {
    return (
        <ul className={`${className}-grid`}>
            {items.map((item, index) => (
                <li key={index} className={`${className}-grid__item`}>
                    {renderItem(item, index, showCloseButton)}
                </li>
            ))}
        </ul>
    );
}
