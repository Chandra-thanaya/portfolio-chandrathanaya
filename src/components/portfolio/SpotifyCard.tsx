import {
  Music2,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import babydollCover from "@/assets/spotify/babydoll.jpg";
import irisCover from "@/assets/spotify/iris.jpg";
import bohemianCover from "@/assets/spotify/bohemian.jpg";
import "@/styles/spotify.css";

type Song = {
  title: string;
  artist: string;
  cover: string;
  audio: string;
  color: string;
};

const playlist: Song[] = [
  {
    title: "Babydoll",
    artist: "Dominic Fike",
    cover: babydollCover,
    audio: "/music/babydoll.mp3",
    color: "#D8BFA8",
  },
  {
    title: "Iris",
    artist: "The Goo Goo Dolls",
    cover: irisCover,
    audio: "/music/iris.mp3",
    color: "#6D8FB8",
  },
  {
    title: "Bohemian Rhapsody",
    artist: "Queen",
    cover: bohemianCover,
    audio: "/music/bohemian.mp3",
    color: "#C65A63",
  },
];

function formatTime(time: number) {
  if (!isFinite(time)) return "0:00";

  const mins = Math.floor(time / 60);
  const secs = Math.floor(time % 60);

  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export default function SpotifyCard() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [playing, setPlaying] = useState(false);

  const [progress, setProgress] = useState(0);

  const [currentTime, setCurrentTime] =
    useState("0:00");

  const [duration, setDuration] =
    useState("0:00");

  const [volume, setVolume] =
    useState(0.8);

  const song = useMemo(
    () => playlist[currentIndex],
    [currentIndex]
  );

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.src = song.audio;

    audio.volume = volume;

    audio.load();

    if (playing) {
      audio.play().catch(() => {});
    }
  }, [currentIndex]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = volume;
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    if (playing) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [playing]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const update = () => {
      if (!audio.duration) return;

      setProgress(
        (audio.currentTime / audio.duration) * 100
      );

      setCurrentTime(
        formatTime(audio.currentTime)
      );

      setDuration(
        formatTime(audio.duration)
      );
    };

    const ended = () => {
      nextSong();
    };

    audio.addEventListener(
      "timeupdate",
      update
    );

    audio.addEventListener(
      "loadedmetadata",
      update
    );

    audio.addEventListener(
      "ended",
      ended
    );

    return () => {
      audio.removeEventListener(
        "timeupdate",
        update
      );

      audio.removeEventListener(
        "loadedmetadata",
        update
      );

      audio.removeEventListener(
        "ended",
        ended
      );
    };
  }, []);

  function togglePlay() {
    setPlaying((prev) => !prev);
  }

  function nextSong() {
    setCurrentIndex((prev) =>
      prev === playlist.length - 1
        ? 0
        : prev + 1
    );

    setPlaying(true);
  }

  function previousSong() {
    setCurrentIndex((prev) =>
      prev === 0
        ? playlist.length - 1
        : prev - 1
    );

    setPlaying(true);
  }

  function seekSong(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const audio = audioRef.current;

    if (!audio) return;

    const value = Number(e.target.value);

    audio.currentTime =
      (value / 100) * audio.duration;

    setProgress(value);
  }

  return (
    <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#091521]/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,.45)]">

      <audio ref={audioRef} />

      {/* Header */}

      <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">

        <div className="flex items-center gap-2">

          <Music2
            size={16}
            color="#1DB954"
          />

          <span className="text-xs uppercase tracking-[0.35em] text-white/60">
            Spotify
          </span>

        </div>

        <span className="text-[11px] font-semibold text-green-400">
          MY PLAYLIST
        </span>

      </div>

      <div className="p-6">
        <div className="flex flex-col items-center">
              {/* Album */}
        <div
            className={`relative w-56 h-56 ${
                playing ? "animate-vinyl" : ""
            }`}
            >

            {/* Vinyl */}

            <div
                className="absolute inset-0 rounded-full"
                style={{
                background:
                    "radial-gradient(circle,#222 0%,#111 40%,#090909 70%,#000 100%)",
                boxShadow: `0 0 45px ${song.color}80`,
                }}
            />

            {/* Vinyl grooves */}

            <div className="absolute inset-3 rounded-full border border-white/5" />
            <div className="absolute inset-6 rounded-full border border-white/5" />
            <div className="absolute inset-9 rounded-full border border-white/5" />
            <div className="absolute inset-12 rounded-full border border-white/5" />
            <div className="absolute inset-16 rounded-full border border-white/5" />

            {/* Album cover */}

            <img
                src={song.cover}
                alt={song.title}
                className="absolute w-32 h-32 rounded-lg object-cover
                        left-1/2 top-1/2
                        -translate-x-1/2 -translate-y-1/2"
            />

            {/* Colored center label */}

            <div
                className="absolute w-10 h-10 rounded-full
                        left-1/2 top-1/2
                        -translate-x-1/2 -translate-y-1/2"
                style={{
                background: song.color,
                }}
            />

            {/* Hole */}

            <div
                className="absolute w-3 h-3 rounded-full bg-black
                        left-1/2 top-1/2
                        -translate-x-1/2 -translate-y-1/2
                        border border-white/20"
            />

            </div>

            <h2 className="mt-6 text-white text-2xl font-bold text-center">
            {song.title}
            </h2>

            <p className="text-white/60 text-center mt-1">
            {song.artist}
            </p>

        </div>

      {/* Progress */}

      <div className="mt-8">

        <input
          type="range"
          min={0}
          max={100}
          step={0.1}
          value={progress}
          onChange={seekSong}
          className="w-full accent-white cursor-pointer"
          style={{
            accentColor: song.color,
          }}
        />

        <div className="flex justify-between mt-2 text-xs text-white/45">

          <span>
            {currentTime}
          </span>

          <span>
            {duration}
          </span>

        </div>

      </div>

      {/* Controls */}

      <div className="flex justify-center items-center gap-7 mt-8">

        <button
          onClick={previousSong}
          className="text-white/70 hover:text-white transition hover:scale-110"
        >
          <SkipBack size={24} />
        </button>

        <button
          onClick={togglePlay}
          className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          style={{
            background: song.color,
            boxShadow: `0 0 35px ${song.color}`,
          }}
        >
          {playing ? (
            <Pause
              size={28}
              color="black"
            />
          ) : (
            <Play
              size={28}
              color="black"
              fill="black"
            />
          )}
        </button>

        <button
          onClick={nextSong}
          className="text-white/70 hover:text-white transition hover:scale-110"
        >
          <SkipForward size={24} />
        </button>

      </div>

      {/* Volume */}

      <div className="mt-8 flex items-center gap-3">

        <Volume2
          size={18}
          className="text-white/60"
        />

        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) =>
            setVolume(Number(e.target.value))
          }
          className="w-full accent-white"
          style={{
            accentColor: song.color,
          }}
        />

      </div>

      {/* Playlist */}

      <div className="mt-8 space-y-2">
        {playlist.map((item, index) => (
  <button
    key={item.title}
    onClick={() => {
      setCurrentIndex(index);
      setPlaying(true);
    }}
    className={`group w-full rounded-2xl border transition-all duration-300 p-3 flex items-center gap-3 ${
      currentIndex === index
        ? "border-green-500/40 bg-white/10"
        : "border-white/5 hover:border-white/20 hover:bg-white/5"
    }`}
  >
    {/* Cover */}

    <img
      src={item.cover}
      alt={item.title}
      className="w-14 h-14 rounded-xl object-cover"
    />

    {/* Song */}

    <div className="flex-1 text-left">

      <h4
        className={`font-semibold ${
          currentIndex === index
            ? "text-white"
            : "text-white/80"
        }`}
      >
        {item.title}
      </h4>

      <p className="text-sm text-white/50">
        {item.artist}
      </p>

    </div>

    {/* Equalizer */}

    {currentIndex === index ? (
      <div
        className={`equalizer ${
            playing ? "playing" : ""
        }`}
        >
        <span
            style={{ background: item.color }}
        />
        <span
            style={{ background: item.color }}
        />
        <span
            style={{ background: item.color }}
        />
        <span
            style={{ background: item.color }}
        />
        <span
            style={{ background: item.color }}
        />
        </div>
    ) : (
      <Play
        size={18}
        className="text-white/25 group-hover:text-white/60 transition"
      />
    )}

  </button>
))}

      </div>

    </div>

  </div>
);
}