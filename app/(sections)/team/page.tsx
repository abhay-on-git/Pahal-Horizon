"use client"
import {
  InstagramOutlined,
  LinkedinOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";

type TeamMember = {
  avatar: string;
  name: string;
  title: string;
  desc: string;
  linkedin: string;
  profile: string;
  insta: string;
};

const team: TeamMember[] = [
  {
    avatar: "https://pahalhorizon.com/img/team/4.jpg",
    name: "Mr. Akash Arya",
    title: "Editor",
    desc: "A dynamic editor at Pahal Horizon, dedicated to fostering interdisciplinary research and empowering innovative ideas for a sustainable future.",
    linkedin: "javascript:void(0)",
    profile: "javascript:void(0)",
    insta: "javascript:void(0)",
  },
  {
    avatar: "https://pahalhorizon.com/img/team/3.jpg",
    name: "Dr. Rachita Sharma",
    title: "Editor",
    desc: "A dedicated educator and researcher at St. John's College, Agra, committed to advancing knowledge in Accounts and Law while inspiring future generations.",
    linkedin: "javascript:void(0)",
    profile: "javascript:void(0)",
    insta: "javascript:void(0)",
  },
  {
    avatar: "https://pahalhorizon.com/img/team/2.jpg",
    name: "Dr. Neetu Singh",
    title: "Editor",
    desc: "A distinguished Associate Professor at IIT Delhi, specializing in nanomaterials and biomedical applications, dedicated to advancing scientific research and innovation.",
    linkedin: "javascript:void(0)",
    profile: "javascript:void(0)",
    insta: "javascript:void(0)",
  },
  {
    avatar: "https://pahalhorizon.com/img/team/1.jpg",
    name: "Dr. Yatendra Pal Singh",
    title: "Editor in Chief",
    desc: "Chief Editor at Pahal Horizon and dedicated educator, specializing in social work and counseling, committed to impactful research and community service",
    linkedin: "javascript:void(0)",
    profile: "javascript:void(0)",
    insta: "javascript:void(0)",
  },
];

const Team: FC = () => {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Meet our Editorial Board Members
          </h3>
          <p className="text-gray-600 mt-3">
            Discover the experts shaping our content with their knowledge and
            vision.
          </p>
        </motion.div>
        <div className="mt-12">
          <ul className="grid gap-8 lg:grid-cols-2">
            {team.map((item, idx) => (
              <li key={idx} className="gap-8 sm:flex">
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                  className="w-full h-60 relative group overflow-hidden rounded-xl"
                >
                  <Image
                    src={item.avatar}
                    fill
                    objectFit="cover"
                    className="rounded-xl shadow-md transition-transform duration-500 ease-out group-hover:scale-110"
                    alt={item.name}
                  />
                </motion.div>
                <div className="mt-4 sm:mt-0">
                  <h4 className="text-lg text-gray font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-primary">{item.title}</p>
                  <p className="text-gray mt-2">{item.desc}</p>
                  <div className="mt-3 flex gap-4 text-gray-400">
                    <a
                      href={item.linkedin}
                      aria-label="LinkedIn"
                      className="hover:text-primary text-gray text-2xl"
                    >
                      <LinkedinOutlined />
                    </a>
                    <a
                      href={item.insta}
                      aria-label="Inastagram"
                      className="hover:text-primary text-gray text-2xl"
                    >
                      <InstagramOutlined />
                    </a>

                    <a
                      href={item.profile}
                      aria-label="Profile"
                      className="hover:text-primary text-gray text-2xl"
                    >
                      <UserOutlined />
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Team;
