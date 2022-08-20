import React from 'react'
import CheckboxAndLabel from '../CheckboxAndLabel/CheckboxAndLabel'
import LabelAndTextInput from '../LabelAndTextInput/LabelAndTextInput'

export default function ContactDetailsForm() {
    return (
        <form id='pictures-and-videos-form'>
            <div className='padding-50px-horizontal flex-column'>
                רגע לפני שמפרסמים את המודעה, נבדוק שפרטי הקשר נכונים

                <LabelAndTextInput name='nameOfContact' label={'שם איש קשר*'} />

                <LabelAndTextInput name='phoneNumber' label={'טלפון ראשי*'} />

                <div className='horizontal-line'></div>

                <div className='flex-row-center'>
                    <div className='plus-sign-with-circle'>+</div>
                    <div className='color-orange'>הוספת איש קשר נוסף</div>
                </div>

                <LabelAndTextInput name='email' label={'דוא"ל'} />

                <CheckboxAndLabel label={'קראתי ואישרתי את התקנון*'} />

                <CheckboxAndLabel label={'אשמח לקבל עדכונים, הצעות או טיפים לשיפור המודעה שלי לפרטי החשבון או לפרטי המודעה'} />

                <div className='flex-row-end'>
                    <button className='oval-border-button orange-button'>
                        המשך לבחירת מסלול
                    </button>
                </div>

            </div>
        </form>
    )
}
