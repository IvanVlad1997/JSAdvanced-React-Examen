import React from 'react'
import {Table} from 'react-bootstrap'

function UserList() {
    return (
        <div className="row mt-3" >
            <div className="col-12 col-lg-3">

            </div>

            <div className="col-12 col-lg-9 ">
                <Table striped bordered hover >
                    <thead>
                        <tr>
                        <th>Nume</th>
                        <th>Prenume</th>
                        <th>Meserie</th>
                        <th>Salariu</th>
                        <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
         
                    </tbody>
                </Table>
            </div>            
        </div>

        
    )
}

export default UserList
