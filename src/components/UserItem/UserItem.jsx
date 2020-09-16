import React from 'react'
import { Button } from 'react-bootstrap'
import Moment from 'react-moment'
import {connect} from 'react-redux'
import { removeUser } from '../../redux/UserList/UserListActions'
import _ from 'lodash'

const UserItem  =  (props) => {
    const {users, removeUser} = props
    let newUser = [...users]
    if (props.check.option === 'One')  newUser = _.sortBy(users, ['nume'])
    else if (props.check.option === 'Two')  newUser = _.sortBy(users, ['salariu'])
       let sortedUserList = []
     let sortedUserList1 = [];
    let sortedUserList2 = [];
    let sortedUserList3 = [];
    if (props.check.checks1.length === 1)  sortedUserList1 = newUser.filter((user) => user.salariu <2500)
    if (props.check.checks2.length ===1)  sortedUserList2 = newUser.filter((user) => user.salariu >=2500 && user.salariu<4000)
    if (props.check.checks3.length ===1) sortedUserList3 = newUser.filter((user) => user.salariu>4000)
     sortedUserList = [...sortedUserList1,...sortedUserList2,...sortedUserList3] 
    if (sortedUserList.length === 0)  sortedUserList = [...newUser]
    
    console.log(sortedUserList)
    return sortedUserList.map((user, index) => {

    return (<tr key = {index}>
       
        <td>{user.nume}</td>
        <td>{user.prenume}</td>
        <td>{user.meserie}</td>
        <td>{user.salariu}</td>
        <td><Moment format="DD/MM/YYYY">{users.data}</Moment></td>
        <td><Button variant="danger" onClick={() => removeUser(user.id)} >Delete</Button></td>
     </tr>)
    })
        
    
}

const mapStateToProps = (state) => {
    return {
        check : state.checkReducer,
        users : state.userReducer.users
    }
}

export default connect(mapStateToProps,{removeUser})(UserItem)