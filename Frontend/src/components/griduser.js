import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useSelector } from 'react-redux';

const GridUser = () => {
    const [users, setUsers] = useState([]);
    const token = useSelector((state) => state.Auth.token);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5001/user/getUsers', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                const formattedUsers = response.data.data.map(user => ({
                    id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    role: user.role,
                    createdAt: user.createdAt,
                    Bachelors: user.Bachelors,
                    Graduation_year: user.Graduation_year,
                    Phone_num: user.Phone_num,
                    CNIC: user.CNIC,
                    ERP: user.ERP,
                    username: user.username,
                }));

                setUsers(formattedUsers);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'firstName', headerName: 'First Name', width: 150 },
        { field: 'lastName', headerName: 'Last Name', width: 150 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'role', headerName: 'Role', width: 120 },
        { field: 'createdAt', headerName: 'Created At', width: 180 },
        { field: 'Bachelors', headerName: 'Bachelors', width: 150 },
        { field: 'Graduation_year', headerName: 'Graduation Year', width: 150 },
        { field: 'Phone_num', headerName: 'Phone Number', width: 150 },
        { field: 'CNIC', headerName: 'CNIC', width: 150 },
        { field: 'ERP', headerName: 'ERP', width: 120 },
        { field: 'username', headerName: 'Username', width: 150 },
    ];

    return (
        <div className='px-5 mt-6 overflow-auto'>
            <div style={{ height: 400, width: '100%', backgroundColor: 'fakatcolor', overflowX: 'auto' }}>
                <DataGrid
                    rows={users}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                />
            </div>
        </div >
    );
}

export default GridUser;
