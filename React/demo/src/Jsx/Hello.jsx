// jsx :- javscript symtax xml /entestible
// html retrun read sugget jsx allow
// jsx vs js :- both are same , ;- jsx js 0.1 s
// jsx html return kar 
// return varibales allow
// retrun html data js {}

import React from "react";

function Hello() {

    // console.log("hello")

    let name = "Harsh"
    // console.log(name)

    let person={
        name : "Ansh",
        course :"Fron-end"
    }

    let list = <ul>
        <li>One</li>
        <li>two</li>
        <li>three</li>
        <li>four</li>
    </ul>

    return (
        <div>
            <h1>Hello Jsx Compo</h1>
            <p>Lorem ipsum dolor si amet consectetur adipisicing elit. Fugiat ad, magni delectus adipisci saepe debitis iure? Aliquam, consequatur dolorum? Est corrupti recusandae doloremque tempore soluta inventore laborum deserunt ratione eveniet!</p>
    
            <h1>name :- {name}</h1>
        
         

            {/* javscript javascript */}
            {
                // console.log("hello");
                // console.log(person.name)
                console.log(list)
                
            }
            <h2>hello name {person.name}</h2>
            <h2>Hello course :- {person.course}</h2>

            {list}

            {5+5}

        </div>
    )
}
export default Hello