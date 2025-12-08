import { useShowSearchResults } from "../../../../features/search/hooks/useShowSearchResults";
import { CustomInput } from "../../../UI/Input/Input";
import { DropDownWindow } from "../../Dropdown/DropdownWindow/DropDownWindow";
import { DropDownList } from "../../Dropdown/DropDownList/DropDownList";
import "./HeaderSearch.scss";
import { MovieSearchCard } from "../../Dropdown/DropDownCards/MovieSearchCard/MovieSearchCard";

export const HeaderSearch = () => {

    const { handleInput,
        foundMovies,
        resetSearch,
        searchQuery,
        dropDownState
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
                onReset={resetSearch}
                value={searchQuery}
            />
            <DropDownWindow className="header-search" isOpen={Boolean(dropDownState &&
                searchQuery.trim().length > 0 &&
                foundMovies &&
                foundMovies.length > 0)
            }>
                <DropDownList
                    items={foundMovies ?? []}
                    renderItem={(movie) => (
                        <MovieSearchCard movie={movie} />
                    )}>
                </DropDownList>
            </DropDownWindow>
        </div>
    )
}
