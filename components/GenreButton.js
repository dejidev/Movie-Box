import React from 'react';

const genres = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystery',
    10749: 'Romance',
    878: 'Science Fiction',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western',
};

const GenreButton = ({ genreId }) => {
    const genreName = genres[genreId];

    return (
        <button className="text-[#B91C1C] border-2 border-[#F8E7EB] text-[15px] font-semibold px-2 py-1 my-2 rounded-full">
            {genreName}
        </button>
    );
};

// Inside GenreButtons.js
const GenreButtons = ({ genreIds }) => {
    if (!genreIds || genreIds.length === 0) {
        return null;
    }

    return (
        <div>
            {genreIds.map((genreId, index) => (
                <GenreButton key={index} genreId={genreId} />
            ))}
        </div>
    );
};


export default GenreButtons;
