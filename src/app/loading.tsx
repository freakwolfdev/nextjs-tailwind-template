const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 font-mono">
      <div className="text-center">
        {/* Spinner */}
        <div className="mb-8 flex justify-center">
          <div className="relative h-20 w-20">
            {/* Outer spinning ring */}
            <div className="absolute inset-0 animate-spin rounded-full border-4 border-gray-700 border-t-blue-400" />
            {/* Inner counter-spinning ring */}
            <div
              className="absolute inset-2 animate-spin rounded-full border-4 border-gray-800 border-r-green-400"
              style={{
                animationDirection: 'reverse',
                animationDuration: '0.8s',
              }}
            />
            {/* Center pulsing dot */}
            <div className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-blue-400" />
          </div>
        </div>

        {/* Loading Text with animated dots */}
        <div className="space-y-3">
          <h2 className="font-semibold text-2xl text-gray-300">
            Loading
            <span className="ml-1 inline-block">
              <span className="animate-[pulse_1.4s_ease-in-out_infinite]">
                .
              </span>
              <span
                className="animate-[pulse_1.4s_ease-in-out_infinite]"
                style={{ animationDelay: '0.2s' }}
              >
                .
              </span>
              <span
                className="animate-[pulse_1.4s_ease-in-out_infinite]"
                style={{ animationDelay: '0.4s' }}
              >
                .
              </span>
            </span>
          </h2>
          <p className="text-gray-500 text-sm">
            Please wait while we load the page
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
