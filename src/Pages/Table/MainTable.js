import React from 'react';
import useIdentity from '../../hooks/useIdentity';
import SignleTable from './SignleTable';

const MainTable = () => {

    const [identities] = useIdentity();

    return (
        <div className='px-16'>
             <div class="overflow-x-auto my-4">
  <table class="table table-zebra text-black w-full">
    {/* <!-- head --> */}
    <thead className='text-center'>
      <tr>
        <th>Name</th>
        <th>Occupation</th>
        <th>Email</th>
        <th>Age</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody className='text-center'>
    {
                identities.map(identity => <SignleTable
                key={identity._id}
                identity={identity}
                ></SignleTable> )
            }
    </tbody>
  </table>
</div>

        </div>
    );
};

export default MainTable;