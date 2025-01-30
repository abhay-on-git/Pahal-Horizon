"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
// const people = [
//   {
//     id: 1,
//     name: "USA",
//     designation: "Software Engineer",
//     image:
//       "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
//   },
//   {
//     id: 2,
//     name: "Robert Johnson",
//     designation: "Product Manager",
//     image:
//       "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//   },
//   {
//     id: 3,
//     name: "Jane Smith",
//     designation: "Data Scientist",
//     image:
//       "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//   },
//   {
//     id: 4,
//     name: "Emily Davis",
//     designation: "UX Designer",
//     image:
//       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//   },
//   {
//     id: 5,
//     name: "Tyler Durden",
//     designation: "Soap Developer",
//     image:
//       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
//   },
//   {
//     id: 6,
//     name: "Dora",
//     designation: "The Explorer",
//     image:
//       "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
//   },
// ];

const people = [
    {
      id: 1,
      name: "USA",
      designation: "Prolonged Partner",
      image:
        "https://images.unsplash.com/photo-1593533333930-7f4b08fb920b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHVzYSUyMGZsYWd8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      name: "Germany",
      designation: "Prolonged Partner",
      image:
        "https://images.unsplash.com/photo-1663493955721-110e7e1ae36c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "China",
      designation: "Prolonged Partner",
      image:
        "https://images.unsplash.com/photo-1663493955721-110e7e1ae36c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Barcelona",
      designation: "Prolonged Partner",
      image:
        "https://images.unsplash.com/photo-1642722581075-9fc52663b96f?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "England",
      designation: "Prolonged Partner",
      image:
        "https://images.unsplash.com/photo-1557321259-82601a9ebfef?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "Canada",
      designation: "Prolonged Partner",
      image:
        "https://images.unsplash.com/photo-1607578774871-249a5b07c380?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-6 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
