import React, { useContext, useState } from 'react'
import { changeInput } from '../../../../../actions/newAdActions'
import { NewAdContext } from '../../../../../context/NewAdContext'
import AssetDescriptionProgressBar from './AssetDescriptionProgressBar/AssetDescriptionProgressBar'

export default function AssetDescription() {
    const { newAdDispatch } = useContext(NewAdContext)

    const [textareaLength, setTextareaLength] = useState('0')
    const [progressBarComment, setProgressBarComment] = useState('ממליצים לך בחום להוסיף תיאור')

    const handleOnChange = (e, name) => {

        newAdDispatch(changeInput(name, e.target.value))

        const length = e.target.value.length

        setTextareaLength(length)

        switch (true) {
            case (length === 0):
                setProgressBarComment('ממליצים לך בחום להוסיף תיאור')
                break
            case (length > 0 && length <= 30):
                setProgressBarComment('מרגיש לנו שהטקסט שכתבת קצר מידי')
                break
            case (length > 30 && length <= 60):
                setProgressBarComment('יופי, המודעה הולכת לכיוון נכון')
                break
            case (length > 60 && length <= 100):
                setProgressBarComment('עוד ממש קצת וזה שם')
                break
            case (length > 100 && length <= 130):
                setProgressBarComment('אוטוטו')
                break
            case (length > 130):
                setProgressBarComment('בול')
                break
            default:
                break
        }
    }

    return (
        <>
            מה חשוב לך שידעו על הנכס?

            <h4>פרוט הנכס</h4>
            <div className='flex-row-center'>
                <AssetDescriptionProgressBar width={textareaLength / 150 * 100 + '%'} comment={progressBarComment} />
                {'400 / ' + textareaLength}
            </div>

            <textarea name='assetDescription' rows={7} onChange={(e) => handleOnChange(e, 'assetDescription')}></textarea>
            <span>אין צורך להוסיף מספר טלפון כחלק מהתיאור, בהמשך התהליך יש אזור מסודר לזה</span>
        </>
    )
}
