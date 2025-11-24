import React from 'react';
import { FaRegThumbsUp } from "react-icons/fa6";
import { Link } from 'react-router';

const ArtworkCard = ({ artwork }) => {

    

    return (
        <div>
            <div className="card bg-base-100 h-[550px] shadow-sm transition hover:scale-105 duration-400">
                <figure className='px-5 pb-0 mt-5'>
                    <img
                        src={artwork.image}
                        className='object-cover w-full rounded-2xl'
                        alt="Shoes" />
                </figure>
                <div className="card-body -mt-2">
                    <h2 className="card-title">{artwork.title}</h2>
                    <div className="bg-[#F1F5E8] font-medium text-[#00D390] w-[46px] px-[10px] py-[6px] rounded-sm flex items-center">
                          <h2 className='flex items-center gap-1'><FaRegThumbsUp />  <span>{artwork.likes_count}</span></h2>
                    </div>
                    <div className='flex justify-between'>
                        <div className="badge badge-soft badge-primary">{artwork.artist_name}</div>
                        <div className="badge badge-soft badge-secondary">{artwork.category}</div>
                    </div>
                    <p>{artwork.description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/artwork-details/${artwork._id}`} className="btn bg-[#2F4464] text-white w-full">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtworkCard;