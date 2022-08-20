import React from 'react'

export default function SearchResultRightSide({ src, alt, adress, type, neighborhood, settlement }) {
    return (
        <div className='search-result__right-side'>
            {src && <img src={src} alt={alt} />}
            <div className='flex-column'>
                <h3>{adress}</h3>
                <span>{`${type} ,${neighborhood} ,${settlement}`}</span>
            </div>
        </div>
    )
}
