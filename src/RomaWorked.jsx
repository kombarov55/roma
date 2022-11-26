import React, {useState} from "react";

export default ({}) => {
    const [yesterday, setYesterday] = useState(false)
    const [beforeYesterday, setBeforeYesterday] = useState(false)

    function result() {
        console.log(`yesterday=${yesterday} beforeYesterday=${beforeYesterday}`)
        if (yesterday) {
            if (beforeYesterday) {
                return "Ну значит сегодня выходной"
            } else {
                return "ты сегодня работаешь"
            }
        } else {
            if (beforeYesterday) {
                return "Ну значит сегодня выходной"
            } else {
                return "Сегодня ты работаешь"
            }
        }
    }

    return <>
        <h1>Рома вчера работал?</h1>
        <input type={"checkbox"} value={yesterday} onChange={() => setYesterday(!yesterday)}/>
        <h1>А позавчера?</h1>
        <input type={"checkbox"} value={beforeYesterday} onChange={() => setBeforeYesterday(!beforeYesterday)}/>

        <p>{result()}</p>
    </>
}