import React from 'react'
import {Link} from 'react-router-dom'
import UserList from '../../components/UserList/UserList'
import Radio from '../../components/RadioButtons/RadioButtons'

const People = () => {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-12 ">
                    <Link to ="/" className="btn btn-primary">Home</Link>
                    <Radio />
                    <UserList />
                    
                </div>
            </div>
       </div>
    )
}
export default People