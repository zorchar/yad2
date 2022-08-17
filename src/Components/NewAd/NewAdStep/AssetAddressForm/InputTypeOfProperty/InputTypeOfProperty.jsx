import React from 'react'
import LabelAndSelectInput from '../../LabelAndSelectInput/LabelAndSelectInput'

export default function InputTypeOfProperty() {
    return (
        <LabelAndSelectInput name='typeOfProperty' label='סוג הנכס*'>
            <option value="דירה">דירה</option>
            <option value="דירת גן">דירת גן</option>
            <option value="בית פרטי/קוטג">בית פרטי/קוטג'</option>
            <option value="גג/פנטהאוז">גג/פנטהאוז</option>
            <option value="מגרשים">מגרשים</option>
            <option value="דופלקס">דופלקס</option>
            <option value="דירת נופש">דירת נופש</option>
            <option value="דו משפחתי">דו משפחתי</option>
            <option value="מרתף/פרטר">מרתף/פרטר</option>
            <option value="טריפלקס">טריפלקס</option>
            <option value="יחידת דיור">יחידת דיור</option>
            <option value="משק חקלאי/נחלה">משק חקלאי/נחלה</option>
            <option value="משק עזר">משק עזר</option>
            <option value="דיור מוגן">דיור מוגן</option>
            <option value="בניין מגורים">בניין מגורים</option>
            <option value="סטודיו/לופט">סטודיו/לופט</option>
            <option value="מחסן">מחסן</option>
            <option value="חנייה">חנייה</option>
            <option value="קבוצת רכישה/זכות לנכס">קבוצת רכישה/זכות לנכס</option>
            <option value="כללי">כללי</option>
        </LabelAndSelectInput>
    )
}
