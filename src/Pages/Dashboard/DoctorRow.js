import React from 'react';
import toast from 'react-hot-toast';
// import DeleteModal from './DeleteModal';

const DoctorRow = ({ doctor, index , refetch}) => {

      const { name, img, specialty , email } = doctor

      const deleteHundeler =() =>{
            fetch(`http://localhost:5000/doctor/${email}`, {
                  method: "DELETE",
                  headers: {
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                  }
            })
            .then(res => res.json())
            .then(data =>{
                  if(data.deletedCount){
                        toast.success(`Doctor: ${name} is delete`)
                        refetch()
                  }
            })
      }


      return (
            <>

                  <tr>
                        <th>{index + 1}</th>
                        <td>
                              <div class="avatar">
                                    <div class="w-12">
                                          <img src={img} />
                                    </div>
                              </div>

                        </td>
                        <td>{name}</td>
                        <td>{specialty}</td>

                        <td><label onClick={deleteHundeler} for="" class="btn btn-sm">deleted</label></td>

                  </tr>

                 

            </>



      )

};

export default DoctorRow;