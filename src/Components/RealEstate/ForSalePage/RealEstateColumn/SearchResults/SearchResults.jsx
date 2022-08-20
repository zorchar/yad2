import React, { useEffect } from 'react'
import { useState } from 'react'
import { getAllAssets } from '../../../../../REST api/Assets'
import SearchResult from './SearchResult/SearchResult'

export default function SearchResults() {

    const [assets, setAssets] = useState(null)


    useEffect(() => {
        getAllAssets().then((data) => setAssets(data))

    }, [])
    return (
        <div className='search-results'>
            {assets &&
                assets.recordset.map((asset) => (
                    <SearchResult
                        key={asset.ID}
                        src={'https://img.yad2.co.il/Pic/202208/01/2_1/o/y2_1_07078_20220801131954.jpeg?l=5&c=3&w=195&h=117'}
                        adress={asset.street + ' ' + asset.addressNumber}
                        type={asset.type}
                        neighborhood={asset.neighborhood}
                        settlement={asset.settlement}
                        numberOfRooms={asset.numberOfRooms}
                        floor={asset.floor}
                        builtSquareMeters={asset.builtSquareMeters}
                        price={asset.price}
                    />
                ))
            }
        </div>
    )
}
