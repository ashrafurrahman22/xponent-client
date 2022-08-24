import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Edit = () => {

    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const {notesId} = useParams();
   
  
    const navigateToDetails = id =>{
      navigate(`/identity/${id}`)
  }
  
      const onSubmit = data =>{
        const url = `http://localhost:5000/identity/${notesId}`
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
          toast.success('Notes Updated Successfully');
          reset();
        })
      }

    return (
          <td>
          <label onClick={()=>navigateToDetails(note._id)} for="my-modal-3" class="btn modal-button">
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
      <textarea placeholder='Update Your Notes' className='border w-96  border-slate-600 p-2 rounded-xl' type='text' {...register("notes", {required:true})}  />

      <input className='rounded px-5 btn btn-primary' type="submit" value="Update"/>
      </form>
           </div>
           

            </div>
          </div>

          </td>
    );
};

export default Edit;