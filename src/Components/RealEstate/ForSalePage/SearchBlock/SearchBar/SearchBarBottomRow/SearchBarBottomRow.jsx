import React from 'react'
import SearchBlockInputAndLabel from '../../SearchBlockInputAndLabel/SearchBlockInputAndLabel'
import SearchButton from './SearchButton/SearchButton'

export default function SearchBarBottomRow() {
    return (
        <form className='search-bar-bottom-row'>
            <SearchBlockInputAndLabel label={'חפשו אזור, עיר, שכונה או רחוב'} placeholder={'לדוגמה: פלורנטין'} />
            <SearchBlockInputAndLabel label={'סוג נכס'} placeholder={'בחרו סוגי נכסים'} />
            <SearchBlockInputAndLabel label={'חדרים'} placeholder={'חדרים'} />
            <SearchBlockInputAndLabel label={'מחיר'} placeholder={'מ-'} />
            <SearchBlockInputAndLabel placeholder={'עד'} />
            <SearchButton />
        </form>
    )
}
