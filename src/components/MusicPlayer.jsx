import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTrack } from '../store/slices/music/musicPlayerSlice';
//import {dataCanciones} from '../data/dataCanciones'
import useSound from 'use-sound';
import spirit from "../songs/spirit.mp3"
import neon from "../songs/neon.mp3"
import sweet from "../songs/sweet.mp3"

const tracks = [spirit, neon, sweet];


const MusicPlayer = () => {
  const [play, { stop }] = useSound('', { volume: 0.5 });
  const dispatch = useDispatch();
  const currentTrack = useSelector((state) => state.currentTrack);
  const [isPlaying, setIsPlaying] = useState(false);
 

  const handlePlay = (track) => {
    if (currentTrack === track) {
      setIsPlaying(!isPlaying);
      isPlaying ? stop() : play( track );
    } else {
      dispatch(setTrack(track));
      setIsPlaying(true);
      play( track );
    }
  };

  return (
    <div>
      {tracks.map((track, index) => (
        <div key={index} onClick={() => handlePlay(track)}>
          {currentTrack === track && isPlaying ? 'Pause' : 'Play'} 
        </div>
      ))}
    </div>
  );
};

export default MusicPlayer;
