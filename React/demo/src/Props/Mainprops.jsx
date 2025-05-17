import React from 'react'
import ClassProps from './ClassProps'
import FunProps from './FunProps'

function Mainprops() {
    return (
        <div>
            <h1>hello this Main props data</h1>
            <div className="container">
                <h1>THis class in Props</h1>
                <div className="row">
                    <ClassProps title="nature 1" desc="HEllo this NAture 1 image" img="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=600" />

                    <ClassProps title="nature 2" desc="HEllo this NAture 2 image" img="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <ClassProps title="nature 3" desc="HEllo this NAture 3 image" img="https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <ClassProps title="nature 4" desc="HEllo this NAture 4 image" img="https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=600" />

                    <ClassProps title="nature 2" desc="HEllo this NAture 2 image" img="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <ClassProps title="nature 2" desc="HEllo this NAture 2 image" img="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600" />
                </div>
            </div>
            <div className="container">
                <h1>THis Function in Props</h1>
                <div className="row">
                    <FunProps title="car 1" desc="hello this car 1 data" img="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <FunProps title="car 1" desc="hello this car 1 data" img="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <FunProps title="car 1" desc="hello this car 1 data" img="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <FunProps title="car 1" desc="hello this car 1 data" img="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <FunProps title="car 1" desc="hello this car 1 data" img="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <FunProps title="car 1" desc="hello this car 1 data" img="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=600" />
                </div>
            </div>
        </div>
    )
}

export default Mainprops
