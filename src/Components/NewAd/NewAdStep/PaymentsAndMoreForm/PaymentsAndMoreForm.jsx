import React, { useContext } from 'react'
import { changeInput } from '../../../../actions/newAdActions'
import { NewAdContext } from '../../../../context/NewAdContext'
import CheckboxAndLabel from '../CheckboxAndLabel/CheckboxAndLabel'
import LabelAndTextInput from '../LabelAndTextInput/LabelAndTextInput'
import NewAdStepButtons from '../NewAdStepButtons/NewAdStepButtons'

export default function PaymentsAndMoreForm() {
    const { newAdDispatch } = useContext(NewAdContext)

    return (
        <div className='padding-50px-horizontal flex-column'>
            <form id='payments-and-more-form'>

                <LabelAndTextInput name={'builtSquareMeters'} label='מ"ר בנוי' placeholder='כמה מ"ר יש בנכס' />

                <LabelAndTextInput name={'overallSquareMeters'} label='גודל במ"ר סך הכל*' />

                <LabelAndTextInput name={'price'} label='מחיר' placeholder='סכום מינימלי 100,000' />

                <div className='flex-row'>
                    <div>
                        <label htmlFor="entryDate">תאריך כניסה</label>
                        <div className='input-wrapper'>
                            <input name='entryDate' type="date" onChange={(e) => newAdDispatch(changeInput('entryDate', e.target.value))} />
                        </div>
                    </div>
                    <CheckboxAndLabel name='isImmediate' label='מיידי' />
                    <CheckboxAndLabel name='isFlexible' label='גמיש' />
                </div>

                <NewAdStepButtons />
            </form>
        </div>
    )
}
