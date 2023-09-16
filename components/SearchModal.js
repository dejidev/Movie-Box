import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SearchModal = ({ searchResults, onClose }) => {
    return (
        <div className="modal my-1">
            <div className="modal-content">
                <div className="search-results">
                    {searchResults.slice(0, 10).map((movie) => (
                        <div key={movie.id} >
                            <Link href={`/movie/${movie.id}`} className="movie-card flex  items-center">
                                <Image
                                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                    alt={movie.title}
                                    width={50}
                                    height={50}
                                />
                                <div>
                                    <h2>{movie.title}</h2>
                                    <p className='text-x'>{new Date(movie.release_date).getFullYear()}</p>
                                </div>
                            </Link>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
