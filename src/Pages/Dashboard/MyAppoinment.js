import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppoinment = () => {
      const [myAppoinment , setAppoinment] = useState([])
      const [user] = useAuthState(auth)
      console.log(user);
      useEffect(()=>{
            fetch(`http://localhost:5000/myBooking?patient=${user.email}` , {
                  method: "GET" ,
                  headers:{
                        'Content-Type': 'application/json',
                  }
            })
            .then(res => res.json())
            .then(data => console.log(data))

      },[])
      return (
            <div>
                  <p>this is my appoinment</p>
            </div>
      );
};

export default MyAppoinment;