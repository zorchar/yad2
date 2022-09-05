import React from 'react'

export default function SearchResultRightSide({ src, alt, address, typeOfProperty, neighborhood, settlement }) {
    return (
        <div className='search-result__right-side'>
            {src && <img src={src} alt={alt} />}
            <div className='flex-column'>
                <h3>{address}</h3>
                <span>{`${typeOfProperty} ,${neighborhood} ,${settlement}`}</span>
            </div>
        </div>
    )
}
