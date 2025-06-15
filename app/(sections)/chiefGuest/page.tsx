"use client";
import React from "react";
import ProfileCard from "@/components/ui/profile-card";

// Define the interface for a chief guest
interface ChiefGuest {
  id: number;
  photo: string;
  name: string;
  title: string;
  designation: string;
  location: string;
  description: string;
  achievements: string[];
  expertise: string[];
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    website?: string;
    github?: string;
    facebook?: string;
    reddit?: string;
  };
}

// Main Component
const ChiefGuestSection: React.FC = () => {
  const chiefGuests: ChiefGuest[] = [
    {
      id: 1,
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face",
      name: "Dr. Rajesh Kumar Sharma",
      title: "Chief Guest & Keynote Speaker",
      designation: "Director General, National Research Institute",
      location: "New Delhi, India",
      description:
        "Dr. Sharma is a distinguished researcher and academic leader with over 25 years of experience in biotechnology and molecular research. His groundbreaking work in CRISPR technology has revolutionized modern medicine.",
      achievements: [
        "Padma Shri Awardee 2019",
        "Fellow of Indian National Science Academy",
        "Author of 150+ Research Papers",
        "12 International Patents",
      ],
      expertise: ["Biotechnology", "Genetic Engineering", "Molecular Biology"],
      socialLinks: {
        linkedin: "https://linkedin.com/in/rajesh-sharma",
        twitter: "https://twitter.com/rajesh_sharma",
        website: "https://rajesh-sharma.com",
      },
    },

    {
      id: 3,
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop&crop=face",
      name: "Dr. Arjun Mehta",
      title: "Honorable Chief Guest",
      designation: "CEO, Innovation Hub Technologies",
      location: "Bangalore, India",
      description:
        "Dr. Mehta is a visionary entrepreneur and technology leader who has successfully built three unicorn startups. His insights on digital transformation have shaped industry standards across multiple sectors.",
      achievements: [
        "3 Unicorn Startups Founded",
        "50+ Startup Investments",
        "Ernst & Young Entrepreneur 2021",
        "Forbes 40 Under 40",
      ],
      expertise: [
        "Entrepreneurship",
        "Digital Transformation",
        "Technology Innovation",
      ],
      socialLinks: {
        linkedin: "https://linkedin.com/in/arjun-mehta",
        twitter: "https://twitter.com/arjun_mehta",
        website: "https://arjun-mehta.com",
        github: "https://github.com/arjun-mehta",
      },
    },
    {
      id: 4,
      photo:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=500&fit=crop&crop=face",
      name: "Dr. Anitha Reddy",
      title: "Special Chief Guest",
      designation: "President, Medical Research Foundation",
      location: "Hyderabad, India",
      description:
        "Dr. Reddy is a pioneering medical researcher specializing in cardiovascular diseases and preventive medicine. She has led groundbreaking clinical trials and established protocols now used in hospitals worldwide.",
      achievements: [
        "International Heart Foundation Award",
        "50+ Clinical Trials Led",
        "Member, WHO Advisory Panel",
        "Distinguished Physician Award",
      ],
      expertise: ["Cardiology", "Preventive Medicine", "Clinical Research"],
      socialLinks: {
        linkedin: "https://linkedin.com/in/anitha-reddy",
        website: "https://anitha-reddy.com",
      },
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Our Distinguished
            <span className=" text-primary block">Chief Guests</span>
          </h2>
          <p className="text-xl text-gray max-w-3xl mx-auto leading-relaxed">
            Meet the exceptional leaders and visionaries who honor us with their
            presence and inspire our community with their remarkable
            achievements and insights.
          </p>
        </div>

        {/* Chief Guests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {chiefGuests.map((guest) => (
            <ProfileCard
              key={guest.id}
              imageUrl={guest.photo}
              name={guest.name}
              position={guest.title}
              description={guest.designation}
              className="hover:shadow-lg transition-shadow duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChiefGuestSection;
