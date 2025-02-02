"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function NotFoundPage() {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);

//   useEffect(() => {
//     // Optional: Auto-redirect to home after 10 seconds
//     const timer = setTimeout(() => {
//       router.push("/(sections)/home");
//     }, 10000);

//     return () => clearTimeout(timer);
//   }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-purple-800 text-white text-center p-4">
      <motion.h1
        className="text-6xl font-bold mb-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        404
      </motion.h1>
      <motion.p
        className="text-lg mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Oops! The page you're looking for doesn't exist.
      </motion.p>
      <motion.div
        className="relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <motion.div
          className="w-64 h-64 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full blur-3xl opacity-50 absolute top-0 left-0 animate-pulse"
          style={{ filter: "blur(120px)" }}
        ></motion.div>
        <motion.div
          className="w-32 h-32 bg-gradient-to-r from-teal-500 to-green-400 rounded-full blur-2xl opacity-70 absolute top-16 left-16 animate-pulse"
          style={{ filter: "blur(80px)" }}
        ></motion.div>
      </motion.div>
      <Button
        className="mt-10 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-medium shadow-lg"
        // onMouseEnter={() => setHovered(true)}
        // onMouseLeave={() => setHovered(false)}
        label='Go Back'
        href='/'
      >
        {hovered ? "Go Back Home 🏠" : "Return to Safety"}
      </Button>
    </div>
  );
}
