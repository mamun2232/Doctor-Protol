import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hook/UseAdmin';
import Loading from '../Sheard/Loading';

const RequareAdmin = ({children}) => {
      const [user ,  loading] = useAuthState(auth)
      const location = useLocation()

      const [admin , addminLoading] = useAdmin(user)

      if(loading || addminLoading){
            return <Loading></Loading>
      }


      if(!user || !admin){
            signOut(auth)
            return <Navigate to="/login" state={{ from: location }} replace />;
      }
    


      return children
};


export default RequareAdmin;