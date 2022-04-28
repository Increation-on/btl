import { Container, Table } from "react-bootstrap"
import axios from "axios";
import { useEffect, useState } from 'react';

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(response => {
            const data = response.data;
            // console.log(data)
            setUsers(data);
        })
    }, []);

    return (
        <>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(e => {
                            return (
                                <tr key={e.id}>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.username}</td>
                                    <td>{e.email}</td>
                                </tr>
                            )
                        })}
                        {users.map(e => {
                            return (
                                <tr key={e.id}>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.username}</td>
                                    <td>{e.email}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default Users;