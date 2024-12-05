import React from 'react';

function AnimePopup({ anime, onClose }) {
    return (
        <div className="anime-popup" onClick={onClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <div className="popup-left">
                    <h2>{anime.title}</h2>
                    <p>{anime.description}</p>
                    <a href={anime.url} target="_blank" rel="noreferrer" className="mal-button">
                        MyAnimeList
                    </a>
                    <div className="anime-details">
                        <p><strong>Rating:</strong> {anime.rating}</p>
                        <p><strong>Schedule:</strong> {anime.broadcast?.string || 'N/A'}</p>
                        <p><strong>Type:</strong> {anime.type}</p>
                        <p><strong>Aired:</strong> {anime.aired?.string || 'N/A'}</p>
                        <p><strong>Duration:</strong> {anime.duration}</p>
                        <p><strong>Rank:</strong> {anime.rank}</p>
                        <p><strong>Popularity:</strong> {anime.popularity}</p>
                        <p><strong>Favorites:</strong> {anime.favorites}</p>
                        <p><strong>Season:</strong> {anime.season || 'N/A'}</p>
                        <p><strong>Year:</strong> {anime.year || 'N/A'}</p>
                    </div>
                </div>
                <div className="popup-right">
                    {anime.trailer ? (
                        <iframe
                            width="100%"
                            height="500"
                            src={anime.trailer.embed_url}
                            title="Trailer"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <p>No trailer available</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AnimePopup;