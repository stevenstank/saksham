export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Topographic lines - top left */}
      <svg
        className="absolute top-0 left-0 w-[800px] h-[800px] opacity-[0.03]"
        viewBox="0 0 800 800"
        fill="none"
      >
        <path d="M0,400 Q200,350 400,400 T800,400" stroke="#faf8f5" strokeWidth="1" />
        <path d="M0,350 Q200,300 400,350 T800,350" stroke="#faf8f5" strokeWidth="1" />
        <path d="M0,450 Q200,400 400,450 T800,450" stroke="#faf8f5" strokeWidth="1" />
        <path d="M0,300 Q200,250 400,300 T800,300" stroke="#faf8f5" strokeWidth="1" />
        <path d="M0,500 Q200,450 400,500 T800,500" stroke="#faf8f5" strokeWidth="1" />
        <path d="M0,250 Q200,200 400,250 T800,250" stroke="#faf8f5" strokeWidth="1" />
        <path d="M0,550 Q200,500 400,550 T800,550" stroke="#faf8f5" strokeWidth="1" />
      </svg>

      {/* Geometric grid - bottom right */}
      <svg
        className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-[0.02]"
        viewBox="0 0 600 600"
        fill="none"
      >
        <rect x="400" y="400" width="200" height="200" stroke="#faf8f5" strokeWidth="1" />
        <rect x="350" y="350" width="250" height="250" stroke="#faf8f5" strokeWidth="1" />
        <rect x="300" y="300" width="300" height="300" stroke="#faf8f5" strokeWidth="1" />
        <rect x="250" y="250" width="350" height="350" stroke="#faf8f5" strokeWidth="1" />
        <line x1="400" y1="0" x2="400" y2="600" stroke="#faf8f5" strokeWidth="1" />
        <line x1="0" y1="400" x2="600" y2="400" stroke="#faf8f5" strokeWidth="1" />
      </svg>

      {/* Architectural curves - top right */}
      <svg
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.02]"
        viewBox="0 0 500 500"
        fill="none"
      >
        <path d="M500,0 C400,100 300,200 200,300" stroke="#faf8f5" strokeWidth="1" />
        <path d="M500,50 C400,150 300,250 200,350" stroke="#faf8f5" strokeWidth="1" />
        <path d="M500,100 C400,200 300,300 200,400" stroke="#faf8f5" strokeWidth="1" />
        <path d="M450,0 C350,100 250,200 150,300" stroke="#faf8f5" strokeWidth="1" />
        <path d="M400,0 C300,100 200,200 100,300" stroke="#faf8f5" strokeWidth="1" />
      </svg>

      {/* Blueprint circles - bottom left */}
      <svg
        className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-[0.02]"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="150" stroke="#faf8f5" strokeWidth="1" />
        <circle cx="200" cy="200" r="120" stroke="#faf8f5" strokeWidth="1" />
        <circle cx="200" cy="200" r="90" stroke="#faf8f5" strokeWidth="1" />
        <circle cx="200" cy="200" r="60" stroke="#faf8f5" strokeWidth="1" />
        <line x1="200" y1="50" x2="200" y2="350" stroke="#faf8f5" strokeWidth="1" />
        <line x1="50" y1="200" x2="350" y2="200" stroke="#faf8f5" strokeWidth="1" />
      </svg>

      {/* Subtle dots pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.01]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#faf8f5" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>
  );
}
