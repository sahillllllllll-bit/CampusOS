import React, { useState, useRef } from "react";
import { Rnd } from "react-rnd";

export default function FloatingTimer({ open, onClose }) {
  if (!open) return null;

  const [time, setTime] = useState(0);
  const [inputTime, setInputTime] = useState("");
  const [mode, setMode] = useState("timer");
  const intervalRef = useRef(null);

  const start = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setTime((t) => {
        if (mode === "timer") return t + 1;
        if (t > 0) return t - 1;
        stop();
        return 0;
      });
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  const applyCustomTime = () => {
    if (!inputTime) return;
    setTime(parseInt(inputTime));
  };

  const format = (t) => {
    const m = String(Math.floor(t / 60)).padStart(2, "0");
    const s = String(t % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
   <Rnd
  default={{
    x: 0,
    y: 0,
    width: 260,
    height: 300,
  }}
  minWidth={240}
  bounds="window"
  dragHandleClassName="drag-handle"
  className="z-[9999]"   // ✔ removed fixed
>
      <div className="bg-white border shadow-xl rounded-lg p-4 w-full">
        
        {/* Header */}
        <div className="drag-handle cursor-move bg-gray-200 p-2 rounded mb-3 flex justify-between items-center">
          <span className="font-semibold">⏱ Timer</span>
          <button onClick={onClose} className="text-red-500 font-bold text-lg">
            ✕
          </button>
        </div>

        {/* Time */}
        <div className="text-4xl text-center font-bold mb-4">
          {format(time)}
        </div>

        {/* Modes */}
        <div className="flex gap-2 mb-3">
          <button
            className={`px-3 py-1 rounded ${mode === "timer" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
            onClick={() => setMode("timer")}
          >
            Timer
          </button>

          <button
            className={`px-3 py-1 rounded ${mode === "countdown" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
            onClick={() => setMode("countdown")}
          >
            Countdown
          </button>
        </div>

        {/* Input */}
        <div className="flex gap-2 mb-4">
          <input
            type="number"
            className="border p-1 rounded w-full"
            placeholder="Seconds"
            value={inputTime}
            onChange={(e) => setInputTime(e.target.value)}
          />
          <button
            onClick={applyCustomTime}
            className="px-3 py-1 bg-green-500 text-white rounded"
          >
            Set
          </button>
        </div>

        {/* Controls */}
        <div className="flex gap-2 justify-center mb-2">
          <button className="px-2 py-1 bg-blue-500 text-white rounded" onClick={start}>Start</button>
          <button className="px-2 py-1 bg-red-500 text-white rounded" onClick={stop}>Stop</button>
          <button className="px-2 py-1 bg-gray-600 text-white rounded" onClick={reset}>Reset</button>
        </div>
      </div>
    </Rnd>
  );
}
