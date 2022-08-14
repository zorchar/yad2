import React from 'react'

export default function AssetAddressForm() {
    return (
        <form id='asset-address-form'>
            <label htmlFor="type-of-property">סוג הנכס*</label>
            <select name="type-of-property" id="type-of-property" form="asset-address-form">
                <option value="volvo">דירה</option>
                <option value="saab">דירת גן</option>
                <option value="opel">בית פרטי/קוטג'</option>
                <option value="audi">גג/פנטהאוז</option>
                <option value="volvo">מגרשים</option>
                <option value="volvo">דופלקס</option>
                <option value="volvo">דירת נופש</option>
                <option value="volvo">דו משפחתי</option>
                <option value="volvo">מרתף/פרטר</option>
                <option value="volvo">טריפלקס</option>
                <option value="volvo">יחידת דיור</option>
                <option value="volvo">משק חקלאי/נחלה</option>
                <option value="volvo">משק עזר</option>
                <option value="volvo">דיור מוגן</option>
                <option value="volvo">בניין מגורים</option>
                <option value="volvo">סטודיו/לופט</option>
                <option value="volvo">מחסן</option>
                <option value="volvo">חנייה</option>
                <option value="volvo">קבוצת רכישה/זכות לנכס</option>
                <option value="volvo">כללי</option>
            </select>





            <label htmlFor="state-of-property">מצב הנכס*</label>
            <select name="state-of-property" id="state-of-property" form="asset-address-form">
                <option value="volvo">חדש מקבלן (לא גרו בו בכלל)</option>
                <option value="saab">חדש (נכס עד בן 5 שנים)</option>
                <option value="opel">משופץ (שופץ ב5 שנים האחרונות)</option>
                <option value="opel">במצב שמור (במצב טוב, לא שופץ)</option>
                <option value="opel">דרוש שיפוץ (זקוק לעבודת שיפוץ) </option>

            </select>




            <label htmlFor="settlement">ישוב*</label>
            <div className='input-wrapper'>
                <input type="text" />
                <i className="fa-solid fa-xmark"></i>
            </div>



            <label htmlFor="settlement">רחוב*</label>
            <div className='input-wrapper'>
                <input type="text" placeholder='הכנסת שם הרחוב' />
                <i className="fa-solid fa-xmark"></i>
            </div>

            <span>
                המידע הזה מגיע מגוף ממשלתי, אם הרחוב שלך לא מופיע, מומלץ לבחור רחוב קרוב אליך
            </span>

            <span className='orange'>
                לא מצאת את הרחוב?
            </span>


            <label htmlFor="settlement">מס' בית*</label>
            <div className='input-wrapper'>
                <input type="text" placeholder='הכנסת שם הרחוב' />
                <i className="fa-solid fa-xmark"></i>
            </div>

            <div className='flex-row-end'>
                <div className='flex-column'>
                    <label htmlFor="settlement">קומה*</label>
                    <div className='input-wrapper'>
                        <input type="text" placeholder='הכנסת מספר קומה' />
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                </div>
                <div className='flex-column'>
                    <label htmlFor="settlement">סה"כ קומות בבניין*</label>
                    <div className='input-wrapper'>
                        <input type="text" placeholder='הכנסת סה"כ קומות' />
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                </div>
                <div className='flex-row-center'>
                    <input type="checkbox" id='is-on-stilts' />
                    <label htmlFor="is-on-stilts">על עמודים</label>
                </div>
            </div>

            <label htmlFor="settlement">שכונה</label>
            <div className='input-wrapper'>
                <input type="text" placeholder='' />
                <i className="fa-solid fa-xmark"></i>
            </div>
            <span>
                המידע הזה מגיע מגוף ממשלתי, ולא ניתן לשינוי
            </span>

            <label htmlFor="settlement">אזור מכירה</label>
            <div className='input-wrapper'>
                <input type="text" placeholder='אזור תל אביב יפו' />
                <i className="fa-solid fa-xmark"></i>
            </div>
            <span>
                המידע הזה מגיע מגוף ממשלתי, ולא ניתן לשינוי
            </span>

            <div className='flex-row-center'>
                <input type="checkbox" id='is-on-stilts' />
                <label htmlFor="is-on-stilts">אני רוצה לקבל עדכון חודשי במייל עם הערכת שווי מעודכנת עבור הנכס, עסקאות באזור והצעות מקצועיות מיועצי נדל"ן</label>
            </div>


            <div className='flex-between'>
                <button className='oval-border-button'>
                    חזרה
                </button>
                <button className='oval-border-button orange-button'>
                    להמשיך לשלב הבא
                </button>

            </div>

        </form>
    )
}
