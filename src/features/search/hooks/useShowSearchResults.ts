import { useMoviesByTitle } from "../../movies/hooks"
import { useAppDispatch, useAppSelector } from "../../../app/hooks/reduxHooks";
import { closeDropDown, openDropDown, selectDropDownIsOpen } from "../../dropdown/dropdownOpenCloseSlice";
import { useCallback, useEffect, useState } from "react";

export const useShowSearchResults = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const { data: foundMovies, isFetching, isFetched } = useMoviesByTitle(searchQuery);


    const dropDownState = useAppSelector(selectDropDownIsOpen);

    const dispatch = useAppDispatch();

    const handleOpenDropDown = useCallback(() => {
        dispatch(openDropDown());
    }, [dispatch]);
    const handleCloseDropDown = useCallback(() => {
        dispatch(closeDropDown());
    }, [dispatch]);


    const handleInput = (inputValue: string) => {
        setSearchQuery(inputValue)
        if (inputValue.trim().length < 1) {
            handleCloseDropDown();
        } else {
            handleOpenDropDown();
        }
        console.log('FETCH STATE:', { isFetching, isFetched, foundMovies })
    }

    useEffect(() => {
        switch (true) {
            case searchQuery === '':
                handleCloseDropDown()
                break
            case foundMovies?.length === 0:
                handleCloseDropDown()
                break
            default:
                handleOpenDropDown()
        }

    }, [foundMovies, searchQuery, handleCloseDropDown, handleOpenDropDown])

    const resetSearch = () => {
        setSearchQuery('')
        handleCloseDropDown()
    }


    return { handleInput, foundMovies, resetSearch, searchQuery, handleOpenDropDown, handleCloseDropDown, dropDownState }
}
