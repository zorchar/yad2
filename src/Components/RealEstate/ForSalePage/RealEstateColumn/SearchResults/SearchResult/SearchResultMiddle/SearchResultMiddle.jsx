import React from 'react'

export default function SearchResultMiddle({ roomsAmount, floor, squareMeters }) {
    return (
        <div className='search-result__middle'>
            <div className='flex-column'>
                {roomsAmount}
                <div>חדרים</div>
            </div>
            <div className='flex-column'>
                {floor}
                <div>קומה</div>
            </div>
            <div className='flex-column'>
                {squareMeters}
                <div>מ"ר</div>
            </div>
        </div>
    )
}
