import { useEffect, useState } from "react"


const useAdmin = user =>{
      const [admin , setAdmin] = useState(false)
      // note: server theke boolien result asbe 
      // addmin er data load hote somoy lagbe tai loading add 
      const [addminLoading , setAdminLodaing] = useState(true)
      useEffect(()=>{
            const email = user?.email
           
            if(email){
                  
                  fetch(`http://localhost:5000/admin/${email}`, {
                        method: 'GET',
                        headers: {
                              'content-type': 'application/json',
                              'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                       
                  })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        setAdmin(data.admin)
                        setAdminLodaing(false)
                  }
                        )
                        
                   
            }
      },[user])
      return [admin , addminLoading]
}

// use resone: eti use korbo dashborad e... user judi admin hoye take tahole all user component dekabo..r admin na hole dekabo mna....
// ei component ke aro secure korar jonnno protected route kore repings kore felte hobe

export default useAdmin