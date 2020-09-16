import React from 'react'
import {Link} from 'react-router-dom'
import UserList from '../../components/UserList/UserList'
import Radio from '../../components/RadioButtons/RadioButtons'

const People = () => {
    return (
        <div className="container mt-2">
            <div className="row">
                <div className="col-12 col-lg-3 ">
                  <Link to ="/" className="btn btn-primary">Home</Link>
                    <Radio />
                   
                    
                </div>
                <div className="col-12 col-lg-9">
                    <UserList />
                </div>
            </div>
       </div>
    )
}
export default People