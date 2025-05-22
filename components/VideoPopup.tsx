import { useEffect, useState } from "react";
import Image from "next/image";

interface VideoPopupProps {
  posterUrl: string;
  videoUrl: string;
  popUpClassName?: string;
  posterClassName?: string;
}

const VideoPopup = ({
  posterUrl,
  videoUrl,
  popUpClassName,
  posterClassName,
}: VideoPopupProps) => {

  const [isVideoPoppedUp, setVideoPopUp] = useState(false);

  useEffect(() => {
    if (isVideoPoppedUp) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isVideoPoppedUp]);

  return (
    <div className="flex-1 mx-auto mt-14 xl:mt-0">
      <div className="relative">
        <Image
          src={posterUrl}
          className={`rounded-lg ${posterClassName}`}
          alt="Video Poster"
          width={1200}
          height={580}
        />
        <button
          className="absolute w-16 h-16 rounded-full inset-0 m-auto duration-150 bg-primary hover:bg-secondary ring-offset-2 focus:ring text-background"
          onClick={() => setVideoPopUp(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-6 h-6 m-auto"
          >
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
          </svg>
        </button>
      </div>
      {isVideoPoppedUp && (
        <div
          className={`fixed inset-0 w-full h-full flex items-center justify-center ${popUpClassName}`}
        >
          <div
            className="absolute inset-0 w-full h-full bg-black/50"
            onClick={() => setVideoPopUp(false)}
          ></div>
          <div className="relative px-4 max-w-4xl w-full">
            <button
              className="w-12 h-12 mb-5 rounded-full duration-150 bg-gray-800 hover:bg-gray-700 text-background"
              onClick={() => setVideoPopUp(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 m-auto"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
            {/* <video
              className="rounded-lg w-full max-w-2xl"
              controls
              autoPlay={true}
            >
              <source
                src="https://raw.githubusercontent.com/sidiDev/remote-assets/main/FloatUI.mp4"
                type="video/mp4"
              />
            </video> */}
            <iframe
              className="rounded-lg w-full"
              width="900"
              height="500"
              src={videoUrl}
              title="Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPopup;
