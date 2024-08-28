import React from "react"

function Header({ dark,onDarkModeClick }){
    return(
    <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {dark ? "Light" : "Dark"} Mode
        </button>
    </header>
    )
}
export default Header