"use client";
import { AnimatedTooltipPreview } from "@/components/Flags";
// import FakeBtn from "@/components/ui/FakeBtn";
import VideoPopup from "@/components/VideoPopup";
import { AnimatePresence, motion } from "framer-motion";
// import { h1 } from "framer-motion/client";
// import Image from "next/image";
import { useEffect, useState } from "react";

const Home = () => {
  // const features = [
  //   {
  //     name: "Trusted",
  //     icon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         viewBox="0 0 20 20"
  //         fill="currentColor"
  //         className="w-5 h-5"
  //       >
  //         <path
  //           fill-rule="evenodd"
  //           d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
  //           clipRule="evenodd"
  //         />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: "50+ Podcasts",
  //     icon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         viewBox="0 0 20 20"
  //         fill="currentColor"
  //         className="w-5 h-5"
  //       >
  //         <path
  //           fill-rule="evenodd"
  //           d="M1 4.75C1 3.784 1.784 3 2.75 3h14.5c.966 0 1.75.784 1.75 1.75v10.515a1.75 1.75 0 01-1.75 1.75h-1.5c-.078 0-.155-.005-.23-.015H4.48c-.075.01-.152.015-.23.015h-1.5A1.75 1.75 0 011 15.265V4.75zm16.5 7.385V11.01a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25zm0 2.005a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .108.069.2.165.235h1.585a.25.25 0 00.25-.25v-1.11zm-15 1.11v-1.11a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v1.125a.25.25 0 01-.164.235H2.75a.25.25 0 01-.25-.25zm2-4.24v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V11.01a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25zm13-2.005V7.88a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25zM4.25 7.63a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V7.88a.25.25 0 01.25-.25h1.5zm0-3.13a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V4.75a.25.25 0 01.25-.25h1.5zm11.5 1.625a.25.25 0 01-.25-.25V4.75a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5zm-9 3.125a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
  //           clipRule="evenodd"
  //         />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: "5000 ratings",
  //     icon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         viewBox="0 0 20 20"
  //         fill="currentColor"
  //         className="w-5 h-5"
  //       >
  //         <path
  //           fill-rule="evenodd"
  //           d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
  //           clipRule="evenodd"
  //         />
  //       </svg>
  //     ),
  //   },
  // ];
  const [index, setIndex] = useState(0);
  // const [isVideoPoppedUp, setVideoPopUp] = useState(false);
  const tags = ["Professionals", "Students", "Researchers"];
  const bgColors = ["bg-[#ff8957]", "bg-[#3be897]", "bg-[#c599ff]"];
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % tags.length);
    }, 2000); // Change tag every 2 seconds
    return () => clearInterval(interval);
  }, [tags.length]);

  return (
    <section>
      <div className="max-w-screen-2xl mx-auto px-4 py-28 gap-12 md:px-8 xl:flex xl:flex-col items-center">
        <div className="space-y-5 w-full mx-auto text-center">
          <AnimatedTooltipPreview />
          {/* <div className="flex flex-wrap items-center justify-center xl:gap-5 gap-2">
            {features.map((item, idx) => (
              <div key={idx} className={`flex items-center`}>
                <FakeBtn
                  className={`flex items-center text-nowrap  xl:px-6 xl:py-4 px-3 py-3 ${
                    idx === 0 && "bg-[#ff8957]"
                  } ${idx === 1 && "bg-[#3be897]"} ${
                    idx === 2 && "bg-[#c599ff]"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </FakeBtn>
              </div>
            ))}
          </div> */}
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl w-full font-clash pt-6 text-primary font-semibold mx-auto md:text-6xl xl:text-7xl">
              Research & Journal For
            </h1>
            <div className="w-full p-3 flex justify-center h-20 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tags[index]}
                  initial={{ opacity: 0, y: 20, rotate: -2 }} // Start tilted
                  animate={{ opacity: 1, y: 0, rotate: -4 }} // Settle to normal
                  exit={{ opacity: 0, y: 20, rotate: 0 }} // Exit with a tilt
                  transition={{ duration: 1, ease: [0.68, -0.8, 0.4, 1.55] }}
                  className={`w-fit h-fit rounded-lg p-1 ${
                    bgColors[index % bgColors.length]
                  } transform rotate-4 `}
                >
                  <h1 className="text-primary text-3xl md:text-4xl xl:text-6xl font-clash font-semibold text-center">
                    {tags[index]}
                  </h1>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          {/* <p className="max-w-xl font-medium text-primary pt-4 mx-auto">
            India&apos;s fastest-growing research and journal, shaping the
            future of innovation and academic excellence with groundbreaking
            studies and insights.
          </p> */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }} // Easier easing for smoothness
            className="max-w-xl font-medium text-primary pt-4 mx-auto"
          >
            India&apos;s fastest-growing research and journal, shaping the
            future of innovation and academic excellence with groundbreaking
            studies and insights.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="items-center pt-6 justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0"
          >
            <a
              href="javascript:void(0)"
              className="flex items-center justify-center gap-x-2 py-2 px-4 text-background font-medium bg-primary duration-150 hover:bg-secondary active:bg-gray-900 rounded-md md:inline-flex"
            >
              Join Community
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="javascript:void(0)"
              className="flex items-center justify-center gap-x-2 py-2 px-4 text-primary hover:text-secondary font-medium duration-150 active:bg-gray-100 border border-secondary rounded-lg md:inline-flex"
            >
              Explore Journals
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </motion.div>
        </div>
        {/* <div className="flex-1 mx-auto mt-14 xl:mt-0">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="rounded-lg"
              alt=""
              width={1200} // Specify the width of the image
              height={580} //
            />
            <button
              className="absolute w-16 h-16 rounded-full inset-0 m-auto duration-150 bg-blue-500 hover:bg-blue-600 ring-offset-2 focus:ring text-white"
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
        </div> */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <VideoPopup
            posterUrl={`https://images.unsplash.com/photo-1614935151651-0bea6508db6b?q=80&w=1825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
            videoUrl={`https://www.youtube.com/embed/IEuvMXL1wOY`}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
