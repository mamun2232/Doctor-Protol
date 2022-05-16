import React from 'react';
import toast from 'react-hot-toast';

const UserRow = ({user , refetch}) => {
      const {email , role} = user

      const makeAdminHendeler = () =>{
            fetch(`http://localhost:5000/user/admin/${email}`, {
                        method: 'PUT',
                        headers: {
                              'content-type': 'application/json',
                              'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                       
                  })
                  .then(res =>{
                        if(res.status === 403){
                              toast.error("Faild  To Make An Admin")
                        }


                  return res.json()
                  } )
                  .then(data => {

                        if(data.modifiedCount > 0){
                              toast.success('Make Admin Successfull!')
                              refetch()
                              console.log(data);

                        }
                      
                      }
                        )
                  

      }
      return (
            <tr>
            <th>{user.length}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdminHendeler} className='btn btn-xs'>Admin</button>}</td>
            <td><button className='btn btn-xs'>Remove</button></td>
            </tr>
      );
};

export default UserRow;