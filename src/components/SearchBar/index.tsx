import React from "react";
import { SearchWrapper, SearchInput } from "./SearchBarStyles";

const SearchBar = (props: any) => {
    const updateSearchValue = (event: any) => {
        props.setValue(event.target.value);
    };

    return (
        <SearchWrapper>
            <SearchInput
                type="text"
                placeholder="Search customers..."
                value={props.initValue}
                onChange={updateSearchValue}
            />
        </SearchWrapper>
    );
};

export default SearchBar;
