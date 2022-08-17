import React from 'react'
import NewAdStepButtons from '../NewAdStepButtons/NewAdStepButtons';
import InputAddressNumber from './InputAddressNumber/InputAddressNumber';
import InputFloors from './InputFloors/InputFloors';
import InputGetUpdates from './InputGetUpdates/InputGetUpdates';
import InputNeighborhood from './InputNeighborhood/InputNeighborhood';
import InputRegionOfSale from './InputRegionOfSale/InputRegionOfSale';
import InputSettlement from './InputSettlement/InputSettlement';
import InputStateOfProperty from './InputStateOfProperty/InputStateOfProperty';
import InputStreet from './InputStreet/InputStreet';
import InputTypeOfProperty from './InputTypeOfProperty/InputTypeOfProperty';

export default function AssetAddressForm() {
    const showFormData = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        for (const [key, value] of formData.entries()) {
            console.log(key, value);
        }
    }

    return (
        <div className='padding-50px-horizontal flex-column'>
            סימנו עבורך את שדות החובה. שלא נפספס פרט חשוב
            <form id='asset-address-form' onSubmit={showFormData}>
                <InputTypeOfProperty />
                <InputStateOfProperty />
                <InputSettlement />
                <InputStreet />
                <InputAddressNumber />
                <InputFloors />
                <InputNeighborhood />
                <InputRegionOfSale />
                <InputGetUpdates />
                <NewAdStepButtons />
            </form>
        </div>
    )
}
