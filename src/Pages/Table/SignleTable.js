import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


const SignleTable = ({identity}) => {

    const { name, occupation, email, age} = identity


    // update aPi
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const {identityId} = useParams();
   
  
    const navigateToDetails = id =>{
      navigate(`/identity/${id}`)
  }
  
      const onSubmit = data =>{
          console.log(data)
        const url = `https://shielded-reef-80315.herokuapp.com/identity/${identityId}`
        fetch(url, {
          method : 'PUT',
          headers : {
            'content-type' : 'application/json'
          },
          body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
          console.log('success', data);
          toast.success('Updated Successfully');
          reset();
        })
      }


     // delete
     const handleDelete = id =>{
        const procede = window.confirm('Are You Sure?');
        if(procede){
          const url = `https://shielded-reef-80315.herokuapp.com/identity/${id}`
          fetch(url, {
            method : "DELETE"
          })
          .then(res => {
              res.json()
            toast.success("Successfully deleted")
            })
          .then(data => {
            console.log(data)
          })
        }
      }

    return (
        <tr>
        <td>{name}</td>
        <td>{occupation}</td>
        <td>{email}</td>
        <td>{age}</td>
        <td>
          <label onClick={()=>navigateToDetails(identity._id)} for="my-modal-3" class="btn modal-button">
            <small>Edit</small>
            <FontAwesomeIcon className='pl-2' icon={faPenToSquare}></FontAwesomeIcon>
          </label>
          <input type="checkbox" id="my-modal-3" class="modal-toggle" />
          <div class="modal">
            <div class="modal-box relative">
              {/* <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label> */}
              <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">x</label>

              <div className='py-5 flex justify-center items-center'>

           <form for="my-modal-3" className='flex flex-col p-6 items-center gap-3' onSubmit={handleSubmit(onSubmit)}>
           <input type="text" placeholder="Your Name"  class="input input-bordered w-full max-w-xl mb-2" {...register("name")} required />
<input type="text" placeholder="Occupation"  class="input input-bordered w-full max-w-xl mb-2" {...register("occupation")} required />
<input type="email" placeholder="Your Email"  class="input input-bordered w-full max-w-xl mb-2" {...register("email")} required />

<input type="number" placeholder="Age"  class="input input-bordered w-full max-w-xl mb-2" {...register("age")} required />

      <input className='rounded px-5 btn btn-primary' type="submit" value="Update"/>
      </form>
           </div>
            </div>
          </div>
          </td>

        <td><button onClick={()=>handleDelete(identity._id)}  className='btn hover:btn-warning bg-yellow-400 border-0 text-black'>
          <small>Delete</small>
        <FontAwesomeIcon className='pl-2' icon={faTrash} />
        </button></td>
      </tr>
    );
};

export default SignleTable;