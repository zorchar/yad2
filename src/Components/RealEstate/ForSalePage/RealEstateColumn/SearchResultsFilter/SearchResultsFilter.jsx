import React from 'react'

export default function SearchResultsFilter() {
    return (
        <div className='search-results-filter'>
            <div className='side-wrapper'>
                <span>מיין לפי</span>
                <button>מחיר - מהזול ליקר</button>
            </div>
            <div className='side-wrapper'>
                <button>סנן תוצאות</button>
                <button>תצוגת מפה</button>
            </div>
        </div>
    )
}
