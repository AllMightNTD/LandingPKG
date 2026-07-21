"use client";

import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, Cpu, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  src: string;
  title: string;
  description: string;
  className?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  title,
  description,
  className,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.error("Video play error:", err);
      });
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(currentProgress || 0);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!videoRef.current || !containerRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current.requestFullscreen();
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(isPlaying ? false : true)}
      className={cn(
        "relative rounded-3xl overflow-hidden glass-panel border-gold-default/30 shadow-glass aspect-video max-w-5xl mx-auto group select-none",
        className
      )}
    >
      {/* HTML5 Video Tag */}
      <video
        ref={videoRef}
        src={src}
        playsInline
        muted={isMuted}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleVideoEnded}
        className="w-full h-full object-cover"
      />

      {/* Overlay Before Play (Cover Title & Play Button) */}
      {!isPlaying && (
        <div
          onClick={togglePlay}
          className="absolute inset-0 z-20 bg-gradient-to-t from-obsidian via-obsidian/60 to-obsidian/40 flex flex-col items-center justify-center p-8 text-center cursor-pointer transition-opacity duration-500"
        >
          {/* Big Glowing Gold Play Button */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gold-gradient/20 border-2 border-gold-default flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-gold-glow cursor-pointer">
            <Play className="w-8 h-8 sm:w-10 sm:h-10 text-gold-default fill-gold-default ml-1" />
          </div>

          {/* Title & Description as requested */}
          <h3 className="font-heading font-black text-2xl sm:text-4xl text-white mb-3 uppercase tracking-tight">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl font-medium leading-relaxed mb-6">
            {description}
          </p>

          {/* Tech Badges */}
          <div className="flex items-center gap-6 text-xs font-mono text-gray-400">
            <span className="flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-gold-default" /> 60 FPS Ultra HD
            </span>
            <span className="flex items-center gap-1.5">
              <Monitor className="w-4 h-4 text-neonCyan" /> Multi-Monitor Ready
            </span>
          </div>
        </div>
      )}

      {/* Video Controls Bar (Appears when playing & hover or paused) */}
      {isPlaying && (
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 z-30 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 flex flex-col gap-2",
            showControls ? "opacity-100" : "opacity-0"
          )}
        >
          {/* Progress Bar */}
          <div
            onClick={handleSeek}
            className="w-full h-1.5 bg-white/20 hover:h-2.5 rounded-full cursor-pointer transition-all relative overflow-hidden"
          >
            <div
              style={{ width: `${progress}%` }}
              className="h-full bg-gold-gradient shadow-gold-glow rounded-full"
            />
          </div>

          {/* Control Buttons Bar */}
          <div className="flex items-center justify-between text-white pt-1">
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                className="p-2 rounded-full hover:bg-white/10 text-gold-default transition-colors"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
              </button>

              <button
                onClick={toggleMute}
                className="p-2 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
              >
                {isMuted ? <VolumeX className="w-5 h-5 text-red-400" /> : <Volume2 className="w-5 h-5 text-emerald-400" />}
              </button>

              <span className="text-xs font-mono text-gray-300 font-bold uppercase hidden sm:inline">
                {title}
              </span>
            </div>

            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
            >
              <Maximize className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
