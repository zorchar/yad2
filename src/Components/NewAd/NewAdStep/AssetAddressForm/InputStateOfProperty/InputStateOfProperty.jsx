import React from 'react'
import LabelAndSelectInput from '../../LabelAndSelectInput/LabelAndSelectInput'

export default function InputStateOfProperty() {
    return (
        <>
            <LabelAndSelectInput name='stateOfProperty' label='מצב הנכס*'>
                <option value="חדש מקבלן (לא גרו בו בכלל)">חדש מקבלן (לא גרו בו בכלל)</option>
                <option value="חדש (נכס עד בן 5 שנים)">חדש (נכס עד בן 5 שנים)</option>
                <option value="משופץ (שופץ ב5 שנים האחרונות)">משופץ (שופץ ב5 שנים האחרונות)</option>
                <option value="במצב שמור (במצב טוב, לא שופץ)">במצב שמור (במצב טוב, לא שופץ)</option>
                <option value="דרוש שיפוץ (זקוק לעבודת שיפוץ) ">דרוש שיפוץ (זקוק לעבודת שיפוץ) </option>
            </LabelAndSelectInput>
        </>
    )
}
