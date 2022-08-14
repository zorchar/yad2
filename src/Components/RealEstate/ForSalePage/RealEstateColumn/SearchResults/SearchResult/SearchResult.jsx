import React from 'react'
import SearchResultLeftSide from './SearchResultLeftSide/SearchResultLeftSide'
import SearchResultMiddle from './SearchResultMiddle/SearchResultMiddle'
import SearchResultRightSide from './SearchResultRightSide/SearchResultRightSide'

export default function SearchResult({
    src,
    alt,
    adress,
    residentType,
    neighborhood,
    settlement,
    roomsAmount,
    floor,
    squareMeters
}) {
    return (
        <div className='search-result'>
            <SearchResultRightSide
                adress={adress}
                residentType={residentType}
                neighborhood={neighborhood}
                settlement={settlement}
                src={src}
                alt={alt}
            />
            <SearchResultMiddle
                roomsAmount={roomsAmount}
                floor={floor}
                squareMeters={squareMeters}
            />
            <SearchResultLeftSide />
        </div>
    )
}
