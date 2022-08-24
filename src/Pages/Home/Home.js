import React from 'react';
import MainTable from '../Table/MainTable';
import Form from './Form';

const Home = () => {
    return (
        <div className='bg-slate-600'>
            <div className='pt-14'> 
            <Form></Form>
            </div>

            <div className='py-10'>
            <MainTable></MainTable>
            </div>

        </div>
    );
};

export default Home;