import React from "react";

function Search({term, onSearchChange}) {

    return (
        <div className="search-wrapper">
            <span className="search-label">
               Filter
            </span>
            <input type="text" className="search-input" value={term} onChange={onSearchChange}/>

        </div>
    )
}

export default Search;
