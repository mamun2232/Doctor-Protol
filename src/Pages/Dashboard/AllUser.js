
import { signOut } from 'firebase/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Sheard/Loading';
import UserRow from './UserRow';

const AllUser = () => {
      const navigate = useNavigate()
    

      const {data: users , isLoading , refetch} = useQuery('user' , () => fetch('http://localhost:5000/user' , {
            method: "GET",
            headers:{
                  'content-type': 'application/json',
                  'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                  

            }
      })
      .then(res => {
            // chack jwt token access
            if(res.status == 401 || res.status === 403){
                  signOut(auth)
                  localStorage.removeItem('accessToken')
                  navigate('/login')


            }


            return res.json()
      
      }))

      if(isLoading){
            return <Loading></Loading>
      }
    


      return (
            <div>
                  <p className='text-xl text-black'>Our All User {users?.length}</p>
                  <div class="overflow-x-auto">
                        <table class="table w-full">


                              <thead>
                                    <tr>
                                          <th></th>
                                          <th>Email</th>
                                          <th>Make Admin</th>
                                          <th>Remove User</th>
                                    </tr>
                              </thead>
                              <tbody>

                                    
                                          {
                                                users?.map(user => <UserRow
                                                user={user}
                                                key={user._id}
                                                refetch={refetch}
                                                
                                                
                                                ></UserRow> 
                                                     
                                                
                                                )
                                               
                                          }
                                   


                              </tbody>
                        </table>
                  </div>
            </div >
      );
};

export default AllUser;