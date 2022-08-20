import React from 'react'
import AboutAssetForm from './NewAdStep/AboutAssetForm/AboutAssetForm'
import AssetAddressForm from './NewAdStep/AssetAddressForm/AssetAddressForm'
import PaymentsAndMoreForm from './NewAdStep/PaymentsAndMoreForm/PaymentsAndMoreForm'
import NewAdStep from './NewAdStep/NewAdStep'
import NewAdStepTopRow from './NewAdStep/NewAdStepTopRow/NewAdStepTopRow'
import PicturesAndVideosForm from './NewAdStep/PicturesAndVideosForm/PicturesAndVideosForm'
import ContactDetailsForm from './NewAdStep/ContactDetailsForm/ContactDetailsForm'

export default function NewAd() {
    return (
        <div className='new-ad'>

            <NewAdStep >
                <NewAdStepTopRow stepNumber={1} stepHeadline={'אני רוצה למכור נכס'} />
            </NewAdStep>

            <NewAdStep >
                <NewAdStepTopRow stepNumber={2} stepHeadline={'כתובת הנכס'} />
                <AssetAddressForm />
            </NewAdStep>

            <NewAdStep >
                <NewAdStepTopRow stepNumber={3} stepHeadline={'על הנכס'} />
                <AboutAssetForm />
            </NewAdStep>

            <NewAdStep >
                <NewAdStepTopRow stepNumber={4} stepHeadline={'תשלומים, תאריכים ועוד'} />
                <PaymentsAndMoreForm />
            </NewAdStep>

            <NewAdStep >
                <NewAdStepTopRow stepNumber={5} stepHeadline={'תמונות וסרטונים'} />
                <PicturesAndVideosForm />
            </NewAdStep>

            <NewAdStep >
                <NewAdStepTopRow stepNumber={6} stepHeadline={'פרטים ליצירת קשר'} />
                <ContactDetailsForm />
            </NewAdStep>

            <NewAdStep >
                <NewAdStepTopRow stepNumber={7} stepHeadline={'בחירת מסלול'} />
            </NewAdStep>

        </div>
    )
}
