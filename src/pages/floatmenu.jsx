import { useNavigate } from "react-router";

export const Floatmenu = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full flex items-center justify-center">
      <div className="h-100 w-90 relative py-8">
        <button
          onClick={() => navigate("/embed")}
          className="absolute top-1/2 -translate-y-1/2 left-5 cursor-pointer outline-none text-white bg-transparent border-2 border-white rounded-full font-medium w-20 h-20 hover:bg-white hover:text-black duration-300"
        >
          menu 1
        </button>
        <button
          onClick={() => navigate("/embed")}
          className="absolute top-15 left-20 cursor-pointer outline-none text-white bg-transparent border-2 border-white rounded-full font-medium w-20 h-20 hover:bg-white hover:text-black duration-300"
        >
          menu 2
        </button>
        <button
          onClick={() => navigate("/embed")}
          className="absolute top-15 right-20 cursor-pointer outline-none text-white bg-transparent border-2 border-white rounded-full font-medium w-20 h-20 hover:bg-white hover:text-black duration-300"
        >
          menu 3
        </button>
        <button
          onClick={() => navigate("/embed")}
          className="absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer outline-none text-white bg-transparent border-2 border-white rounded-full font-medium w-20 h-20 hover:bg-white hover:text-black duration-300"
        >
          menu 4
        </button>
        <button
          onClick={() => navigate("/embed")}
          className="absolute bottom-15 right-20 cursor-pointer outline-none text-white bg-transparent border-2 border-white rounded-full font-medium w-20 h-20 hover:bg-white hover:text-black duration-300"
        >
          menu 5
        </button>
        <button
          onClick={() => navigate("/embed")}
          className="absolute bottom-15 left-20 cursor-pointer outline-none text-white bg-transparent border-2 border-white rounded-full font-medium w-20 h-20 hover:bg-white hover:text-black duration-300"
        >
          menu 6
        </button>
      </div>
    </div>
  );
};
