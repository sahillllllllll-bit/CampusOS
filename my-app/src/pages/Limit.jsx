import React from "react";

export default function Limit() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 p-6 text-center">
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Screen Too Small
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          This app is designed for larger screens to give you the best
          experience. Please switch to a device with a wider display to
          continue.
        </p>

        <div className="w-full h-32 bg-blue-400/20 border border-blue-400 rounded-xl flex items-center justify-center mb-6">
          <span className="text-blue-600 font-semibold text-lg">
            Minimum width required: 800px
          </span>
        </div>

        <button className="px-6 py-2 rounded-xl bg-blue-400 text-white font-medium shadow hover:bg-blue-500 transition">
          Refresh
        </button>
        <img src="https://www.citypng.com/public/uploads/preview/hd-coming-soon-black-stamp-sign-png-704081694707570jiy5ttck0j.png" alt="" />
      </div>
    </div>
  );
}
