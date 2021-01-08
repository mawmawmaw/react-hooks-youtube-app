import React, { useState } from 'react';
const SearchBar = ({onSearchSubmit}) => {
    const [term,setTerm] = useState('');
    const onInputChange = (e) => {
        setTerm(e.target.value)
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        onSearchSubmit(term);
    }
    return (
        <div className="ui segment search-bar">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label htmlFor="search-bar">Video Search</label>
                    <input
                        placeholder="Enter search term..."
                        type="text" 
                        id="search-bar" 
                        value={term} 
                        onChange={onInputChange}
                    />
                </div>
            </form>
        </div>
    )
}
export default SearchBar;