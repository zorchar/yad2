import React from 'react'

export default function SearchResultMiddle({ numberOfRooms, floor, builtSquareMeters }) {
    return (
        <div className='search-result__middle'>
            <div className='flex-column'>
                {numberOfRooms}
                <div>חדרים</div>
            </div>
            <div className='flex-column'>
                {floor}
                <div>קומה</div>
            </div>
            <div className='flex-column'>
                {builtSquareMeters}
                <div>מ"ר</div>
            </div>
        </div>
    )
}
