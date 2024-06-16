const Player = () => {
  return (
    <div className="bg-gray-900 text-white p-4 fixed bottom-0 w-full flex items-center">
      <div className="flex items-center">
        <div className="w-16 h-16 bg-gray-700 mr-4 flex items-center justify-center">
          <span>Album Cover</span>
        </div>
        <div>
          <div className="text-lg">Glimpse of Us</div>
          <div className="text-sm">Joji</div>
        </div>
      </div>
      <div className="flex-grow mx-4">
        <input type="range" min="0" max="100" className="w-full" />
      </div>
      <div className="flex space-x-4">
        <button className="text-2xl">⏮️</button>
        <button className="text-2xl">⏯️</button>
        <button className="text-2xl">⏭️</button>
      </div>
    </div>
  );
};

export default Player;
