import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { dateFormatting_Y, dateFormatting_YMD } from '../../Helpers/utils';

const api_key = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_URL;
export default function People() {
    const [people, setPeople] = useState([]);
    const [active, setActive] = useState(true);
    let params = useParams();

    useEffect(() => {
        fetch(`${url}/person/${params.personID}?api_key=${api_key}&include_adult=false&append_to_response=videos,similar,credits,recommendations,images,release_dates,content_ratings,external_ids&include_image_language=en,null`)
            .then(response => response.json())
            .then(data => setPeople(data))
    }, [])

    return (
        <>
            <div className='custom-container'>
                <img className='title-img' src={`https://image.tmdb.org/t/p/w500${people.profile_path}`} alt={people.name} />
                <h3>{people.name} </h3>
                <p className='details'>{people.name}</p>

                <div className={active ? 'read-more' : 'read-less'}>
                    <p className='title-overview'>{people.biography}</p>
                    <button className='read-more-btn' onClick={() => setActive(!active)}>{active ? 'Read More' : 'Read Less'}</button>
                </div>
            </div>
        </>

    )
}