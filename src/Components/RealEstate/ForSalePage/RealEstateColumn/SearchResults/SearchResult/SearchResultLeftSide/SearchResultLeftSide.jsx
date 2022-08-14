import React from 'react'

export default function SearchResultLeftSide({ price = 'לא צוין מחיר' }) {
    return (
        <div className='search-result__left-side'>
            <div className='flex-column'>
                {price}
                <div>עודכן היום</div>
            </div>
        </div>
    )
}
