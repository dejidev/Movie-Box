// pages/movie/[id].js
"use client";
import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';
import MovieDetails from '../../../components/MovieDetails';
import tmdbApi from '../../../lib/tmdb';
import { RotatingLines } from 'react-loader-spinner';


const MovieDetailPage = () => {
    const params = useParams();
    const id = params.id;
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {
        if (id) {
            // Fetch movie details based on the id
            tmdbApi.get(`/movie/${id}`)
                .then((response) => {
                    if (response.data) {
                        setMovie(response.data);
                    } else {
                        console.error('Movie not found');
                    }
                })
                .catch((error) => {
                    console.error('Error fetching movie details:', error);
                    setError('Error fetching movie details. Please try again later.');
                });

        }
    }, [id]);

    if (error) {
        return <div className="error-message">{error}</div>;
    }


    if (!movie) {
        return <div className='flex justify-center items-center h-[50vh]'>
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </div>;
    }

    return <MovieDetails movie={movie} />;
};

export default MovieDetailPage;