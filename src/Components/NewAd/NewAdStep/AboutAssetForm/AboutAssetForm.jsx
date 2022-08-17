import React from 'react'
import LabelAndSelectInput from '../LabelAndSelectInput/LabelAndSelectInput';
import NewAdStepButtons from '../NewAdStepButtons/NewAdStepButtons';
import AssetDescription from './AssetDescription/AssetDescription';
import NoneToThreePicker from './NoneToThreePicker/NoneToThreePicker';
import PickAttributesBox from './PickAttributesBox/PickAttributesBox';

export default function AboutAssetForm() {

    const showFormData = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        for (const [key, value] of formData.entries()) {
            console.log(key, value);
        }
    }

    return (
        <div className='padding-50px-horizontal flex-column'>
            <form id='about-asset-form' onSubmit={showFormData}>

                <LabelAndSelectInput name='numberOfRooms' label='מספר חדרים*'>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </LabelAndSelectInput>

                <NoneToThreePicker name={'numberOfParkingPlaces'} label='חניה' />

                <NoneToThreePicker name={'numberOfPorches'} label='מרפסת' />

                <PickAttributesBox />

                <AssetDescription />

                <NewAdStepButtons />

            </form>
        </div >
    )
}
