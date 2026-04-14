import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
      
      
      <div className="absolute w-80 h-80 bg-purple-300 rounded-full blur-3xl opacity-40 top-10 left-10"></div>
      <div className="absolute w-80 h-80 bg-pink-300 rounded-full blur-3xl opacity-40 bottom-10 right-10"></div>
      <div className="absolute w-60 h-60 bg-blue-300 rounded-full blur-3xl opacity-30 top-1/2 left-1/2"></div>

      
      <div className="relative bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10 max-w-md w-full text-center border border-white">
        
        
        <div className="text-6xl mb-4">
          🔍
        </div>

        
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-transparent bg-clip-text">
          404
        </h1>

        
        <h2 className="mt-3 text-xl font-semibold text-gray-800">
          Oops! Page not found
        </h2>

        
        <p className="mt-2 text-gray-600 text-sm">
          The page you’re looking for doesn’t exist or has moved somewhere else.
        </p>

        
        <div className="mt-6 flex flex-col gap-3">
          
          <Link
            href="/"
            className="px-5 py-2 rounded-lg text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition shadow-md"
          >
            🏠 Go Home
          </Link>

          
        </div>

        
        <p className="mt-6 text-xs text-gray-400">
          Error code: 404 · Page missing in action
        </p>
      </div>
    </div>
  );
}