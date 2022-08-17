import React from 'react'
import CheckboxAndLabel from '../../CheckboxAndLabel/CheckboxAndLabel'

export default function InputGetUpdates() {
    return (
        // <div className='flex-row-center'>
        //     <input name='getUpdates' type="checkbox" className='checkbox' />
        //     <label htmlFor="get-updates">אני רוצה לקבל עדכון חודשי במייל עם הערכת שווי מעודכנת עבור הנכס, עסקאות באזור והצעות מקצועיות מיועצי נדל"ן</label>
        // </div>
        <CheckboxAndLabel name='getUpdates' label='אני רוצה לקבל עדכון חודשי במייל עם הערכת שווי מעודכנת עבור הנכס, עסקאות באזור והצעות מקצועיות מיועצי נדל"ן' />
    )
}
