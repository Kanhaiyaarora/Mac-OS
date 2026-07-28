import React from 'react'
import MacWindow from './MacWindow'
import "./spotify.scss"

const Spotify = () => {
  return (
    <MacWindow  >
      <div className="spotify-window">
        <iframe data-testid="embed-iframe" style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/37i9dQZF1DX5cZuAHLNjGz?utm_source=generator&si=fcd5871e6e734fe5" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </MacWindow>
  )
}

export default Spotify  