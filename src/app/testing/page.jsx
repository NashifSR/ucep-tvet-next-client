"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const testing = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('/data.json')
            .then((response) => setData(response.data))
            .catch((error) => console.error('Error fetching remote JSON:', error));
    }, []);
    console.log(data)
    return (
        <div>testing</div>
    )
}

export default testing