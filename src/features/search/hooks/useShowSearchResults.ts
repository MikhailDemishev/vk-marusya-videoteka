import { useMoviesByTitle } from "../../movies/hooks"
import { useAppDispatch, useAppSelector } from "../../../app/hooks/reduxHooks";
import { closeDropDown, openDropDown, selectDropDownIsOpen } from "../../dropdown/dropdownOpenCloseSlice";
import { useState } from "react";

export const useShowSearchResults = () => {

    const dropDownState = useAppSelector(selectDropDownIsOpen);

    const dispatch = useAppDispatch();

    const [searchQuery, setSearchQuery] = useState('');
    const { data: foundMovies } = useMoviesByTitle(searchQuery);

    const handleInput = (inputValue: string) => {
        setSearchQuery(inputValue)
        handleOpenDropDown();
    }

    const resetSearch = () => {
        setSearchQuery('')
        handleCloseDropDown()
    }

    const handleOpenDropDown = () => dispatch(openDropDown());
    const handleCloseDropDown = () => dispatch(closeDropDown());

    return { handleInput, foundMovies, resetSearch, searchQuery, handleOpenDropDown, handleCloseDropDown, dropDownState }
}
