import React from 'react'
import SearchBarBottomRow from './SearchBarBottomRow/SearchBarBottomRow'
import SearchBarTopRow from './SearchBarTopRow/SearchBarTopRow'

export default function SearchBar() {
    return (
        <div className='search-bar'>
            <SearchBarTopRow />
            <SearchBarBottomRow />
        </div>
    )
}
