import React,{useState} from 'react';
export default function RadioButton(){
    const [ples,setPles]=useState();

const onchange=(e) => { setPles(e.target.value)};


return(
    <div>
        <div  >
        <p>Voli plesati?</p>
        <input type="radio" id='D' name='ples' value='da' onChange={onchange} />
        <label for='D'>Da</label>
        <input type='radio' id='N' name='ples' value='ne' onChange={onchange} />
        <label for id='N'>Ne</label>
        </div>
        <button type='submit' onClick={()=> alert('odabrano je '+ples)}>Submit</button>
    </div>
)

}