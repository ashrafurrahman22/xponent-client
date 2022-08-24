import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Form = () => {

    const { register, handleSubmit, watch, reset, setError, formState: { errors } } = useForm();

    const handleform = event =>{
          console.log(event);
          fetch('http://localhost:5000/identity', {
            method : "POST", 
            headers : {
              'content-type' : 'application/json'
            },
            body :JSON.stringify(event)
          })
          .then(res => res.json())
          .then(data => {
            toast.success('You Successfully added your identity on database')
            console.log(data)
            reset();
          } )
        }

    return (
        <div className='card card-body bg-base-300 w-2/4 mx-auto'>
        <h2 className='uppercase text-3xl text-center font-semibold my-2'>Please Fill Up This form</h2>
        
        <div className='px-3 pt-6'>
        <form className='flex flex-col' onSubmit={handleSubmit(handleform)}>

<input type="text" placeholder="Your Name"  class="input input-bordered w-full max-w-xl mb-2" {...register("name")} required />
<input type="text" placeholder="Occupation"  class="input input-bordered w-full max-w-xl mb-2" {...register("occupation")} required />
<input type="email" placeholder="Your Email"  class="input input-bordered w-full max-w-xl mb-2" {...register("email")} required />

<input type="number" placeholder="Age"  class="input input-bordered w-full max-w-xl mb-2" {...register("age")} required />
    <input type="submit" value='submit' class="btn hover:btn-primary font-medium input input-bordered text-black w-full max-w-xl cursor-pointer" />
    </form>
        </div>
    </div>
    );
};

export default Form;