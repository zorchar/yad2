import React from 'react'
import AssetAddressForm from './NewAdStep/AssetAddressForm/AssetAddressForm'
import NewAdStep from './NewAdStep/NewAdStep'
import NewAdStepTopRow from './NewAdStep/NewAdStepTopRow/NewAdStepTopRow'

export default function NewAd() {
    return (
        <div className='new-ad'>
            <NewAdStep >
                <NewAdStepTopRow stepNumber={2} stepHeadline={'כתובת הנכס'} />
                <div className='padding-50px-horizontal flex-column'>
                    סימנו עבורך את שדות החובה. שלא נפספס פרט חשוב
                    <AssetAddressForm />
                </div>

            </NewAdStep>
            <NewAdStep >
                <NewAdStepTopRow stepNumber={3} stepHeadline={'על הנכס'} />
            </NewAdStep>
        </div>
    )
}
