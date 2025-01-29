export const Floatmenu = () => {
  return (
    <div className="h-full mx-auto w-150">
      <div className="h-full relative">
        <button className="absolute top-20 left-30 transform -translate-y-1/2 cursor-pointer bg-gradient-to-br from-teal-300 to-lime-300 rounded-full w-34 h-34 flex items-center justify-center shadow-lg shadow-lime-500/60 hover:bg-gradient-to-tl focus:ring-4 focus:ring-lime-300/50 duration-300">
          <div className="bg-white rounded-full w-30 h-30 flex items-center justify-center font-medium">
            menu
          </div>
        </button>
        <button className="absolute top-1/2 transform -translate-y-1/2 cursor-pointer bg-gradient-to-br from-green-300 to-cyan-300 rounded-full w-34 h-34 flex items-center justify-center shadow-lg shadow-cyan-500/60 hover:bg-gradient-to-tl focus:ring-4 focus:ring-cyan-300/50 duration-300">
          <div className="bg-white rounded-full w-30 h-30 flex items-center justify-center font-medium">
            menu
          </div>
        </button>
        <button className="absolute top-120 left-30 transform -translate-y-1/2 cursor-pointer bg-gradient-to-br from-fuchsia-300 to-rose-300 rounded-full w-34 h-34 flex items-center justify-center shadow-lg shadow-rose-500/60 hover:bg-gradient-to-tl focus:ring-4 focus:ring-rose-300/50 duration-300">
          <div className="bg-white rounded-full w-30 h-30 flex items-center justify-center font-medium">
            menu
          </div>
        </button>

        <button className="absolute top-20 right-30 transform -translate-y-1/2 cursor-pointer bg-gradient-to-br from-red-300 to-amber-300 rounded-full w-34 h-34 flex items-center justify-center shadow-lg shadow-amber-500/60 hover:bg-gradient-to-tl focus:ring-4 focus:ring-amber-300/50 duration-300">
          <div className="bg-white rounded-full w-30 h-30 flex items-center justify-center font-medium">
            menu
          </div>
        </button>
        <button className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer bg-gradient-to-br from-yellow-300 to-emerald-300 rounded-full w-34 h-34 flex items-center justify-center shadow-lg shadow-emerald-500/60 hover:bg-gradient-to-tl focus:ring-4 focus:ring-emerald-300/50 duration-300">
          <div className="bg-white rounded-full w-30 h-30 flex items-center justify-center font-medium">
            menu
          </div>
        </button>
        <button className="absolute top-120 right-30 transform -translate-y-1/2 cursor-pointer bg-gradient-to-br from-sky-300 to-purple-300 rounded-full w-34 h-34 flex items-center justify-center shadow-lg shadow-purple-500/60 hover:bg-gradient-to-tl focus:ring-4 focus:ring-purple-300/50 duration-300">
          <div className="bg-white rounded-full w-30 h-30 flex items-center justify-center font-medium">
            menu
          </div>
        </button>
      </div>
    </div>
  );
};
