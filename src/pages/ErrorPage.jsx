import React from 'react';
import errorPage from '../assets/Sandy_Tech-28_Single-11.jpg'
import { useNavigate } from 'react-router';
import Container from '../components/Container';

const ErrorPage = () => {

    const navigate = useNavigate()

    return (
        <div className='flex flex-col min-h-screen bg-inherit'>
            <Container>
                <div className='w-11/12 lg:w-[87.5%] mx-auto flex-1 text-center py-10 space-y-7'>
                    <img src={errorPage} className='max-w-[60%] mx-auto' alt="" />
                    <div className='space-y-4'>
                        <h1 className='text-5xl font-semibold text-white'>Oops, page not found!</h1>
                        <p className='text-[#627382] text-xl'>The page you are looking for is not available.</p>
                        <button onClick={() => navigate(-1)} className='bg-[#2F4464] text-white text-center w-[150px] h-[48px] rounded-sm cursor-pointer'>Go Back!</button>
                    </div>
                    {/* <p>{error.message}</p> */}
                </div>
            </Container>
        </div>
    );
};

export default ErrorPage;