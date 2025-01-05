import React, { useEffect,useState } from "react";
import "./Songs.css"; // Assuming you will create a CSS file for styles

const songsData = [
  {
    id: 1,
    title: " Pushpa 2 ",
    artist: "",
    cover: "images/Pushpa-2.jpg",
    overlay: "images/button.png",
    audio: "audio/Peelings.mp3", // Path to the audio file
    songs: [
      { title: "Gango Renuka Thalli", audio: "/audio/Gango Renuka Thalli.mp3" },
      { title: "Kissik", audio: "/audio/Kissik.mp3" },
      { title: "Peeling", audio: "/audio/Peelings.mp3" },
      { title: "Pushpa Pushpaa", audio: "/audio/Pushpa Pushpaa.mp3" },
      { title: "Sooseki", audio: "/audio/Sooseki.mp3" },
    ],
  },
  {
    id: 2,
    title: "Thandel",
    artist: "",
    cover: "images/bujji thalli.jpg",
    overlay: "images/button.png",
    audio: "audio/Bujji Thalli.mp3", // Path to the audio file
    songs: [
      { title: "Bujji Thalli", audio: "/audio/Bujji Thalli.mp3" },
    ]
  },
  {
    id: 3,
    title: "Sri Anjaneyam",
    artist: "",
    cover: "images/Sri-Anjaneyam.jpg",
    overlay: "images/button.png",
    audio: "audio/Rama Rama.mp3", // Path to the audio file
    songs: [
      { title: "Sri anjaneyam", audio: "/audio/Rama Rama.mp3" },
    ]
  },
  {
    id: 4,
    title: "Animal",
    artist: "",
    cover: "images/animal.jpg",
    overlay: "images/button.png",
    audio: "audio/Ammayi.mp3", // Path to the audio file
    songs: [
      { title: "Ammayi", audio: "/audio/Animal.mp3" },
      { title: "Arjan Vailly", audio: "/audio/Arjan Vailly.mp3" },
      { title: "Evarevaro", audio: "/audio/Evarevaro.mp3" },
      { title: "Nanna nuvu na pranam", audio: "/audio/Nanna Nuv Naa Pranam.mp3" },
      { title: "Yaalo Yaalaa", audio: "/audio/Yaalo Yaalaa.mp3" },
    ],
  },
  {
    id: 5,
    title: "Badshah songs",
    artist: "",
    cover: "images/badshah.jpg",
    overlay: "images/button.png",
    audio: "audio/GENDA PHOOL.mp3", // Path to the audio file
    songs: [
      { title: "Genda Phool", audio: "/audio/GENDA PHOOL.mp3" },
      { title: "Baby Ko Bass Pasand hai", audio: "/audio/Baby Ko Bass Pasand.mp3" },
    ]
  },
  {
    id: 6,
    title: "Salaar",
    artist: "",
    cover: "images/salaar.jpg",
    overlay: "images/button.png",
    audio: "/audio/salaar.mp3", // Path to the audio file
    songs: [
      { title: "Salaar Theme", audio: "/audio/salaar.mp3" },
    ]
  },
  {
    id: 7,
    title: "Kalki 2898 AD",
    artist: "",
    cover: "images/kalki.jpg",
    overlay: "images/button.png",
    audio: "audio/kalki-song.mp3", // Path to the audio file
    songs: [
      { title: "Bhairava Anthem", audio: "/audio/Bhairava Anthem.mp3" },
      { title: "Ta Takkara", audio: "/audio/Ta Takkara.mp3" },
    ]
  },
  {
    id: 8,
    title: "Bahubali 1",
    artist: "",
    cover: "images/bahubali.jpg",
    overlay: "images/button.png",
    audio: "/audio/Dheevara.mp3", // Path to the audio file
    songs: [
      { title: "Dheevara song", audio: "/audio/Dheevara.mp3" },
    ]
  },
  {
    id: 9,
    title: "Bahubali 2",
    artist: "",
    cover: "images/bahubali 2.jpg",
    overlay: "images/button.png",
    audio: "/audio/Saahore.mp3", // Path to the audio file
    songs: [
      { title: "Saahore bahubali", audio: "/audio/Saahore.mp3" },
    ]
  },
  {
    id: 10,
    title: "Billa",
    artist: "",
    cover: "images/billa.jpg",
    overlay: "images/button.png",
    audio: "/audio/billa.mp3", // Path to the audio file
    songs: [
      { title: "My Name is Billa", audio: "/audio/billa.mp3" },
    ]
  },
  {
    id: 11,
    title: "Mirchi",
    artist: "",
    cover: "images/mirchi.jpg",
    overlay: "images/button.png",
    audio: "/audio/Mirchi.mp3", // Path to the audio file
    songs: [
      { title: "Darlingey song", audio: "/audio/Mirchi.mp3" },
    ]
  },
];

const Songs = ({ searchQuery, playingSong, setPlayingSong, setIsPlaying }) => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const handlePlaySong = (audioUrl) => {
    if (playingSong) {
      playingSong.pause();
      playingSong.currentTime = 0;
    }
    const audio = new Audio(audioUrl);
    audio.play();
    setPlayingSong(audio);
    setIsPlaying(true);
  };

  const handleOpenAlbum = (album) => {
    setSelectedAlbum(album);
  };

  const handleCloseAlbum = () => {
    setSelectedAlbum(null);
  };

  const filteredSongs = songsData.filter((song) =>
    song.title.toLowerCase().includes(searchQuery?.toLowerCase() || "")
  );
  

  return (
    <div className="Songs-container">
      {selectedAlbum ? (
  <div className="telugu-container">
    <button className="close-button" onClick={handleCloseAlbum}>
      &times;
    </button>
    <div className="alb-header">
      <img
        src={selectedAlbum.cover}
        alt={`${selectedAlbum.title} cover`}
        className="alb-cover"
      />
      <h2 className="alb-title">{selectedAlbum.title}</h2>
    </div>
    <div className="telugu-songs">
      {selectedAlbum.songs?.map((song, index) => (
        <div key={index} className="telugu-song" onClick={() => handlePlaySong(song.audio)} >
          <p>{song.title}</p>
          <button
            onClick={() => handlePlaySong(song.audio)}
            className="play-button"
          >
            <img
              src="images/button.png"
              alt="Play"
              className="playing-icon"
            />
          </button>
        </div>
      ))}
    </div>
  </div>
) : (
        <>
          <div className="row">
            <h2 className="row-heading">Popular Songs</h2> {/* Updated first row heading */}
            {filteredSongs.slice(0, 5).map((song) => (
              <div key={song.id} className="song-card">
                <div
                  className="image-container"
                  onClick={() => handleOpenAlbum(song)}
                >
                  <img
                    src={song.cover}
                    alt={`${song.title} cover`}
                    className="song-cover"
                  />
                  <img
                    src={song.overlay}
                    alt="Overlay"
                    className="overlay-image"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent parent `onClick` from triggering
                      handlePlaySong(song.audio);
                    }}
                  />
                </div>
                <div className="song-details">
                  <h3 className="song-title">{song.title}</h3>
                  <p className="song-artist">{song.artist}</p>
                </div>
              </div>
            ))}
          </div>
  
          <div className="row">
            <h2 className="row-heading">Prabas Songs</h2> {/* Updated second row heading */}
            {filteredSongs.slice(5).map((song) => (
              <div key={song.id} className="song-card">
                <div
                  className="image-container"
                  onClick={() => handleOpenAlbum(song)}
                >
                  <img
                    src={song.cover}
                    alt={`${song.title} cover`}
                    className="song-cover"
                  />
                  <img
                    src={song.overlay}
                    alt="Overlay"
                    className="overlay-image"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent parent `onClick` from triggering
                      handlePlaySong(song.audio);
                    }}
                  />
                </div>
                <div className="song-details">
                  <h3 className="song-title">{song.title}</h3>
                  <p className="song-artist">{song.artist}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
  

};

export default Songs;