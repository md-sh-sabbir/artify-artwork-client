import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';

const MyFavorites = () => {

    const {user} = use(AuthContext)
    const [artworks, setArtworks] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.
    })

    return (
        <div>
            
        </div>
    );
};

export default MyFavorites;