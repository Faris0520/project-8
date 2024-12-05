import React, { useState } from 'react';
import AnimeCard from './AnimeCard';
import AnimePopup from './AnimePopup';

function MainContent(props) {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedAnime, setSelectedAnime] = useState(null);

  const handleAnimeClick = (anime) => {
    setSelectedAnime(anime);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <main>
      <div className="main-head">
        <form className="search-box" onSubmit={props.HandleSearch}>
          <input
            type="search"
            placeholder="Search for an anime..."
            required
            value={props.search}
            onChange={(e) => props.SetSearch(e.target.value)}
          />
        </form>
      </div>
      <div className="anime-list">
        {props.animeList.map((anime) => (
          <AnimeCard anime={anime} key={anime.mal_id} onClick={handleAnimeClick} />
        ))}
      </div>
      {showPopup && (
        <AnimePopup anime={selectedAnime} onClose={handleClosePopup} />
      )}
    </main>
      );
}

export default MainContent;