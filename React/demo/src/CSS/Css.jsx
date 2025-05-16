import React from 'react'
import "./style.css"

function Css() {

    // internal css
    let cssdata = {
        background : "blue",
        color : "red",

    }

    return (
        <div>
            {/* 1) inline css 
      2) internal css :- never use 
      3) external css :-  */}

            <h1>hello this css Component</h1>

            {/* inline css :- {key and value} */}
            <h2 style={{ background: "red", color: "blue", padding: "30px" }}>Inline css compo</h2>

            <h2 style={cssdata}>internal csss</h2>

            {/* external css class :- className */}

            <h2 className='ab'>hello this h2 tag data</h2>

            <div className='ab'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione repellendus quos magnam ullam qui nihil blanditiis sit, a et amet nesciunt laudantium. Quia, nobis omnis? Cum ratione eius nulla fugit!</div>
        </div>
    )
}

export default Css
