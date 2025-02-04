"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8}}
            className="flex-1 sm:hidden sm:rounded-lg lg:block group overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              width={774}
              height={500}
              className="md:max-w-lg sm:rounded-lg transition-transform duration-500 ease-out group-hover:scale-105"
              alt="Professional services"
            />
          </motion.div>
          <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8}}
          className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
            <h3 className="text-indigo-600 font-semibold">Pahal Horizon</h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              India&apos;s fastest growing Research community
            </p>
            <p className="mt-3 text-gray-600">
              Join a thriving community of scholars dedicated to advancing
              research through global collaboration, innovation, and meaningful
              connections. Engage with leading minds, share groundbreaking
              ideas, and shape the future of knowledge on an international
              scale.
            </p>
            <Link
              href="#"
              className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
