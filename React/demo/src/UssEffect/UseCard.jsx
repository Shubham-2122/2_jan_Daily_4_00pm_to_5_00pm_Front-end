import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UseCard() {

    const [data, setdata] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("https://dummyjson.com/products");
        // console.log(res.data.products)
        setdata(res.data.products)
    }

    return (
        <div>
            {/* <h1>hello this card component</h1> */}
            <div className="container">
                <div className="row">
                    {
                        data && data.map((product, index) => {
                            return (
                                <div className="col-md-4" key={index}>
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img src={product.images[0]} style={{height:"250px"}} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                             <h5 className="card-title">{product.id}</h5>
                                            <h5 className="card-title">{product.title}</h5>
                                             <h5 className="card-title">{product.price} $</h5>

                                            <p className="card-text"> {product.description.slice(0,100)}</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default UseCard
