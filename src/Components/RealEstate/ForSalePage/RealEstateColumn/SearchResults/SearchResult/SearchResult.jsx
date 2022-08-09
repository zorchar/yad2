import React from 'react'
import SearchResultRightSide from './SearchResultRightSide/SearchResultRightSide'

export default function SearchResult({ src, alt, adress, residentType, neighborhood, settlement }) {
    return (
        <div className='search-result'>
            <SearchResultRightSide
                adress={adress}
                residentType={residentType}
                neighborhood={neighborhood}
                settlement={settlement}
                src={src}
            />
            <div className='search-middle'></div>
            <div className='search-left-side'></div>
        </div>
    )
}
