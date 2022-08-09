import React from 'react'
import MainHeader from './MainHeader/MainHeader'
import SearchResults from './SearchResults/SearchResults'
import SearchResultsFilter from './SearchResultsFilter/SearchResultsFilter'
import TopHeader from './TopHeader/TopHeader'

export default function RealEstateColumn() {
    return (
        <div className='realestate-column'>
            <TopHeader />
            <MainHeader />
            <SearchResultsFilter />
            <SearchResults />
        </div>
    )
}
