import React, {useState} from 'react';
const ThemeContext=React.createContext();

export default function Theme(){
const[darkTheme,setDarkTheme]=useState(true);

function toggleTheme(){
    setDarkTheme(prevDarkTheme => !prevDarkTheme);

}
return(
    <div>
       <ThemeContext.provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        </ThemeContext.provider> 
    </div>
)
}