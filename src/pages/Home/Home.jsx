import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className="container mt-3">
        <div className="row">
            <div className="col-12 ">
                <Link to="/people" className="btn btn-primary">Listă oameni</Link>
            </div>
        </div>
   </div>
    )
}
export default Home