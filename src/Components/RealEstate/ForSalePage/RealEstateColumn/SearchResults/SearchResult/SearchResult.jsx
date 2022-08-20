import React from 'react'
import SearchResultLeftSide from './SearchResultLeftSide/SearchResultLeftSide'
import SearchResultMiddle from './SearchResultMiddle/SearchResultMiddle'
import SearchResultRightSide from './SearchResultRightSide/SearchResultRightSide'

export default function SearchResult({
    src,
    alt,
    adress,
    type,
    neighborhood,
    settlement,
    numberOfRooms,
    floor,
    builtSquareMeters,
    price
}) {
    return (
        <div className='search-result'>
            <SearchResultRightSide
                adress={adress}
                type={type}
                neighborhood={neighborhood}
                settlement={settlement}
                src={src}
                alt={alt}
            />
            <SearchResultMiddle
                numberOfRooms={numberOfRooms}
                floor={floor}
                builtSquareMeters={builtSquareMeters}
            />
            <SearchResultLeftSide price={price} />
        </div>
    )
}
