import avatar from '../assets/Images/avatar.webp';
export default function Hero() {
    return (
        <div className="mt-20 max-w-2xl">
            <img
                src={avatar}
                className="w-16 h-16 rounded-full mb-6"
            />

            <h1 className="text-5xl font-bold leading-tight text-white">
                Software designer, founder, <br /> and amateur astronaut.
            </h1>

            <p className="mt-6 text-zinc-400 leading-relaxed">
                I'm Spencer, a software designer and entrepreneur based in New York
                City. I'm the founder and CEO of Planetaria, where we develop
                technologies that empower regular people to explore space on their own teams.
            </p>

            <div className="flex gap-5 mt-6 text-zinc-500 dark:text-zinc-400">
                
                <svg
                    className="w-6 h-6 transition cursor-pointer"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M18.9,2H22L14.6,10.2L23,22H16.6L11.6,15.6L5.6,22H2.5L10.4,13.2L2.4,2H9L13.5,7.8L18.9,2Z" />
                </svg>

                <svg
                    className="w-6 h-6 transition cursor-pointer"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M7,2h10c2.76,0 5,2.24 5,5v10c0,2.76 -2.24,5 -5,5H7c-2.76,0 -5,-2.24 -5,-5V7c0,-2.76 2.24,-5 5,-5zm0,2C5.35,4 4,5.35 4,7v10c0,1.65 1.35,3 3,3h10c1.65,0 3,-1.35 3,-3V7c0,-1.65 -1.35,-3 -3,-3H7zm5,3.5a5.5,5.5 0 1,1 0,11a5.5,5.5 0 0,1 0,-11zm0,2a3.5,3.5 0 1,0 0,7a3.5,3.5 0 0,0 0,-7zm5.75,.75a.75,.75 0 1,0 0,1.5a.75,.75 0 0,0 0,-1.5z" />
                </svg>

                
                <svg
                    className="w-6 h-6 transition cursor-pointer"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 .5C5.73 .5.5 5.71.5 12.1c0 5.13 3.29 9.48 7.86 11.02.58.11.79-.25.79-.56v-1.96c-3.19.71-3.87-1.56-3.87-1.56-.53-1.36-1.3-1.72-1.3-1.72-1.06-.75.08-.74.08-.74 1.17.09 1.79 1.22 1.79 1.22 1.04 1.83 2.73 1.3 3.4 1 .1-.77.4-1.3.73-1.6-2.55-.3-5.24-1.3-5.24-5.76 0-1.27.45-2.3 1.19-3.1-.12-.3-.52-1.52.12-3.18 0 0 1-.33 3.3 1.18a11.2 11.2 0 0 1 6.01 0c2.3-1.51 3.29-1.18 3.29-1.18.64 1.66.24 2.88.12 3.18.74.8 1.19 1.83 1.19 3.1 0 4.47-2.7 5.45-5.27 5.74.41.36.77 1.08.77 2.18v3.23c0 .31.21.67.8.56A11.64 11.64 0 0 0 23.5 12.1C23.5 5.71 18.26.5 12 .5z" />
                </svg>
                <svg
                    className="w-6 h-6 transition cursor-pointer"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M20.45 20.45H17.2v-5.4c0-1.3-.02-3-1.83-3-1.83 0-2.1 1.43-2.1 2.9v5.5h-3.24V9h3.12v1.56h.05c.44-.83 1.5-1.7 3.08-1.7 3.29 0 3.9 2.17 3.9 5v6.59zM5.34 7.43c-1.04 0-1.88-.85-1.88-1.9 0-1.05.84-1.9 1.88-1.9s1.88.85 1.88 1.9c0 1.05-.84 1.9-1.88 1.9zm1.62 13.02H3.73V9h3.23v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
                </svg>
            </div>

        </div>
    );
}
