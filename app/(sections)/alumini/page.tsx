"use client";
import ProfileCard from "@/components/ui/profile-card";

// Define the interface for an alumni member
interface AlumniMember {
  id: number;
  photo: string;
  name: string;
  graduationYear: number;
  currentPosition: string;
  company: string;
  degree: string;
  location: string;
  industry: string;
  achievements: string[];
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    website?: string;
    github?: string;
    facebook?: string;
  };
}

const AlumniSection: React.FC = () => {
  const alumniMembers: AlumniMember[] = [
    {
      id: 1,
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face",
      name: "Rahul Sharma",
      graduationYear: 2018,
      currentPosition: "Senior Software Engineer",
      company: "Google",
      degree: "B.Tech Computer Science",
      location: "Mountain View, CA",
      industry: "tech",
      achievements: [
        "Led development of Google Assistant features",
        "Published 5 research papers",
        "Mentor for 20+ junior developers",
      ],
      socialLinks: {
        linkedin: "https://linkedin.com/in/rahul-sharma",
        github: "https://github.com/rahul-sharma",
        twitter: "https://twitter.com/rahul_sharma",
      },
    },

    {
      id: 3,
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop&crop=face",
      name: "Arjun Khanna",
      graduationYear: 2016,
      currentPosition: "Founder & CEO",
      company: "TechFlow Solutions",
      degree: "B.Tech Electronics",
      location: "Bangalore, India",
      industry: "business",
      achievements: [
        "Built $50M revenue company",
        "Forbes 30 Under 30",
        "Investor in 15+ startups",
      ],
      socialLinks: {
        linkedin: "https://linkedin.com/in/arjun-khanna",
        twitter: "https://twitter.com/arjun_khanna",
        website: "https://techflow-solutions.com",
      },
    },
    {
      id: 4,
      photo:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=500&fit=crop&crop=face",
      name: "Dr. Sneha Reddy",
      graduationYear: 2015,
      currentPosition: "Senior Research Scientist",
      company: "Johns Hopkins University",
      degree: "B.Tech Biomedical Engineering",
      location: "Baltimore, MD",
      industry: "healthcare",
      achievements: [
        "Developed COVID-19 diagnostic tool",
        "Published 30+ research papers",
        "NIH Research Grant Recipient",
      ],
      socialLinks: {
        linkedin: "https://linkedin.com/in/sneha-reddy",
        website: "https://sneha-reddy-research.com",
      },
    },
    {
      id: 5,
      photo:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=500&fit=crop&crop=face",
      name: "Vikram Singh",
      graduationYear: 2019,
      currentPosition: "Assistant Professor",
      company: "Stanford University",
      degree: "B.Tech Mechanical Engineering",
      location: "Stanford, CA",
      industry: "academia",
      achievements: [
        "Youngest faculty member",
        "NSF CAREER Award Winner",
        "Expert in Robotics & AI",
      ],
      socialLinks: {
        linkedin: "https://linkedin.com/in/vikram-singh",
        website: "https://stanford.edu/~vikram",
        github: "https://github.com/vikram-singh",
      },
    },
    {
      id: 6,
      photo:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop&crop=face",
      name: "Kavya Iyer",
      graduationYear: 2020,
      currentPosition: "Investment Analyst",
      company: "Goldman Sachs",
      degree: "B.Tech Chemical Engineering",
      location: "New York, NY",
      industry: "finance",
      achievements: [
        "Top performer in analyst class",
        "CFA Level 2 Candidate",
        "Specialized in Tech Investments",
      ],
      socialLinks: {
        linkedin: "https://linkedin.com/in/kavya-iyer",
        twitter: "https://twitter.com/kavya_iyer",
      },
    },
    {
      id: 7,
      photo:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop&crop=face",
      name: "Amit Gupta",
      graduationYear: 2014,
      currentPosition: "VP of Engineering",
      company: "Stripe",
      degree: "B.Tech Computer Science",
      location: "San Francisco, CA",
      industry: "tech",
      achievements: [
        "Led payments infrastructure team",
        "Open source contributor",
        "Tech conference speaker",
      ],
      socialLinks: {
        linkedin: "https://linkedin.com/in/amit-gupta",
        github: "https://github.com/amit-gupta",
        website: "https://amit-gupta.dev",
      },
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Top Research Internship Alumni Members
          </h2>
          <p className="text-sm md:text-lg text-gray max-w-4xl mx-auto leading-relaxed">
            Pahal Horizon takes great pride in its outstanding alumni who have
            gone on to achieve remarkable milestones across the globe. These
            individuals exemplify excellence, leadership, and dedication in
            their respective fields—be it research, higher education, social
            impact, or innovation.
          </p>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumniMembers.map((alumni) => (
            <div key={alumni.id} className="group">
              <ProfileCard
                imageUrl={alumni.photo}
                name={alumni.name}
                position={`${alumni.currentPosition} at ${alumni.company}`}
                socialLinks={alumni.socialLinks}
                className="hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-105 bg-white dark:bg-gray-800"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniSection;
