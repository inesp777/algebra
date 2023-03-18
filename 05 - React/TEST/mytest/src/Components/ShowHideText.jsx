import React, { useState } from "react"

export default function ShowHideText() {
    const [mstatus, setMstatus] = useState(true)
    const changestatus = () => {
        setMstatus(!mstatus)
    }

    return (<>
        <button onClick={changestatus}>Show Element Below</button>
        {mstatus && <Childp />}
    </>
    )
}
function Childp() {
    return <p >ToggleChallenge</p>
}
