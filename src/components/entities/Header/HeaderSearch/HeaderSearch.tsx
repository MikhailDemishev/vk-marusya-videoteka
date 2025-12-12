import { useShowSearchResults } from "../../../../features/search/hooks/useShowSearchResults";
import { CustomInput } from "../../../UI/Input/Input";
import { MemoizedDropDownWindow } from "../../Dropdown/DropdownWindow/DropDownWindow";
import { DropDownList } from "../../Dropdown/DropDownList/DropDownList";
import "./HeaderSearch.scss";
import { MovieSearchCard } from "../../Dropdown/DropDownCards/MovieSearchCard/MovieSearchCard";
import type { FC } from "react";

interface IHeaderSearch {
    onResetHeader?: () => (void);
}

export const HeaderSearch: FC<IHeaderSearch> = ({ onResetHeader = () => { } }) => {



    const { handleInput,
        foundMovies,
        resetSearch,
        searchQuery,
        dropDownState,
    } = useShowSearchResults()


    return (
        <div className="header__search header-search">
            <CustomInput
                placeholder="Поиск"
                name="search"
                variant="search"
                onChange={(e) => handleInput(e.target.value)}
                className="header-search__input"
                id="icon-search"
                iconId="icon-search"
                resetField
                onReset={() => {
                    resetSearch();
                    onResetHeader();
                }}
                value={searchQuery}
            />
            <MemoizedDropDownWindow className="header-search" isOpen={dropDownState}>
                <DropDownList
                    items={foundMovies ?? []}
                    renderItem={(movie) => (
                        <MovieSearchCard movie={movie} onClick={resetSearch} />
                    )}>
                </DropDownList>
            </MemoizedDropDownWindow>
        </div>
    )
}
