import React from 'react'
import SearchResult from './SearchResult/SearchResult'

export default function SearchResults() {
    return (
        <div className='search-results'>
            <SearchResult
                src={'https://img.yad2.co.il/Pic/202208/01/2_1/o/y2_1_07078_20220801131954.jpeg?l=5&c=3&w=195&h=117'}
                adress='רחוב ומספר'
                residentType='דירת גן'
                neighborhood='נווה יוני נתניהו'
                settlement='עכו'
                roomsAmount={1}
                floor={1}
                squareMeters={124}
            />
        </div>
    )
}
