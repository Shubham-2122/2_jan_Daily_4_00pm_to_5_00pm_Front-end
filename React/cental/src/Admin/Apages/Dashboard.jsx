import React from 'react'
import AHeader from '../Acoman/AHeader'
import Navdata from '../Acoman/Navdata'

function Dashboard() {
    return (
        <div>
            <AHeader />
            <Navdata title="Dashboard" name="Dashboard" />
            <div className="container">
                <h1 className='text-center'>Hello this Dashboard Page..!</h1>
            </div>
        </div>
    )
}

export default Dashboard
