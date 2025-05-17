// props :- props stand for proprtitys
// props :- one compoenet to antoher compoent data pass
// props :- props read data :- we can not change data
// props :- syntax :- parameter object
// props :- same file not use

import React from 'react'

function FunProps({img,desc,title}) {
    return (
        <div className='col-md-4'>
            <div className="card" style={{ width: '18rem' }}>
                <img src={img} style={{height:"250px"}} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </div>
    )
}

export default FunProps
