import { useEffect, useState, useRef } from "react";
import VolumeOn from "../assets/svgs/volume-on.svg";
import VolumeOff from "../assets/svgs/volume-off.svg";
import click_sound from "../assets/audio/button_sound.mp3";

export default function MusicPlayer({ audio_file }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1); // Default volume is 100%
  const audioRef = useRef(null);

  const togglePlay = () => {
    new Audio(click_sound).play();

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  return (
    <div className="flex items-center space-x-4 backdrop-blur-xs">
      <audio
        ref={audioRef}
        src={audio_file}
        onEnded={() => setIsPlaying(false)}
      />
      <button
        onClick={togglePlay}
        className="w-18 h-18 flex items-center justify-center text-white rounded-full shadow-lg transition-transform transform hover:scale-110"
      >
        <img
          src={isPlaying ? VolumeOn : VolumeOff}
          alt="Play"
          className="w-16 h-16"
        />
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className="w-48 h-4 bg-yellow-100 rounded-full appearance-none cursor-pointer 
             accent-yellow-400 hover:accent-yellow-500 transition-all
             [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6
             [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full
             [&::-webkit-slider-thumb]:bg-yellow-600 [&::-webkit-slider-thumb]:border-4
             [&::-webkit-slider-thumb]:border-yellow-200 shadow-lg"
      />
    </div>
  );
}
