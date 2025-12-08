import "./DropDownList.scss";

interface IDropDownList<T> {
    items: T[];
    renderItem: (
        item: T,
        index: number,
    ) => React.ReactNode;

}

export function DropDownList<T>({ items, renderItem, }: IDropDownList<T>) {
    return (
        <ul className={"dropdown__list"}>
            {items.map((item, index) => (
                <li key={index} className={"dropdown__item"}>
                    {renderItem(item, index)}
                </li>
            ))}
        </ul>
    )
}
