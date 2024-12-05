import React from 'react';

function AnimeCard({ anime, onClick }) {
  return (
    <article className="anime-card" onClick={() => onClick(anime)}>
      <figure>
        <img src={anime.images.jpg.large_image_url} alt="Anime" />
      </figure>
      <h3>{anime.title}</h3>
    </article>
  );
}

export default AnimeCard;