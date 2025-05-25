"use client";
import { useEffect, useState, ReactNode } from "react";
import {
  Target,
  Users,
  Shield,
  Award,
  FileText,
  BookOpen,
  Eye,
  Upload,
  Newspaper,
  Archive,
  Mail,
  Calendar,
  Trophy,
  MessageCircle,
  Snowflake,
  Sun,
  MessageSquare,
  UserPlus,
  Briefcase,
  GraduationCap,
  Heart,
  Phone,
} from "lucide-react";
import Link from "next/link";

interface NavItem {
  title: string;
  desc: string;
  path: string;
  icon: ReactNode;
}

interface DropdownNav {
  label: string;
  navs: NavItem[];
}

// Different dropdown configurations for each menu item
const aboutDropdown: DropdownNav[] = [
  {
    label: "About",
    navs: [
      {
        title: "Our Mission",
        desc: "Advancing research and innovation globally",
        path: "/our-mission",
        icon: <Target className="w-6 h-6" />,
      },
      {
        title: "Editorial Board",
        desc: "Meet our distinguished editorial team",
        path: "/editorial-board",
        icon: <Users className="w-6 h-6" />,
      },
      {
        title: "Review Board",
        desc: "Expert reviewers ensuring quality",
        path: "/review-board",
        icon: <Shield className="w-6 h-6" />,
      },
      {
        title: "Awards",
        desc: "Recognition and achievements",
        path: "/awards",
        icon: <Award className="w-6 h-6" />,
      },
    ],
  },
];

const submissionDropdown: DropdownNav[] = [
  {
    label: "Submissions",
    navs: [
      {
        title: "Call for Papers",
        desc: "Current submission opportunities",
        path: "/call-for-papers",
        icon: <FileText className="w-6 h-6" />,
      },
      {
        title: "Author Guidelines",
        desc: "Complete submission guidelines",
        path: "/author-guidlines",
        icon: <BookOpen className="w-6 h-6" />,
      },
      {
        title: "Review Process",
        desc: "Understanding our review workflow",
        path: "/review-process",
        icon: <Eye className="w-6 h-6" />,
      },
      {
        title: "Submit Manuscript",
        desc: "Submit your research paper",
        path: "/submit-manuscript",
        icon: <Upload className="w-6 h-6" />,
      },
    ],
  },
];

const publicationDropdown: DropdownNav[] = [
  {
    label: "Publications",
    navs: [
      {
        title: "Latest",
        desc: "Most recent publications",
        path: "javascript:void(0)",
        icon: <Newspaper className="w-6 h-6" />,
      },
      {
        title: "Past",
        desc: "Archive of previous issues",
        path: "javascript:void(0)",
        icon: <Archive className="w-6 h-6" />,
      },
      {
        title: "Newsletter",
        desc: "Stay updated with our newsletter",
        path: "javascript:void(0)",
        icon: <Mail className="w-6 h-6" />,
      },
    ],
  },
];

const eventsDropdown: DropdownNav[] = [
  {
    label: "Events",
    navs: [
      {
        title: "ICSR 2025",
        desc: "International Conference on Scientific Research",
        path: "javascript:void(0)",
        icon: <Calendar className="w-6 h-6" />,
      },
      {
        title: "GCSE Competition",
        desc: "Global Competition for Scientific Excellence",
        path: "javascript:void(0)",
        icon: <Trophy className="w-6 h-6" />,
      },
      {
        title: "Talks & Webinars",
        desc: "Expert talks and online sessions",
        path: "javascript:void(0)",
        icon: <MessageCircle className="w-6 h-6" />,
      },
    ],
  },
  {
    label: "Internships",
    navs: [
      {
        title: "Winter Internships",
        desc: "Winter research opportunities",
        path: "javascript:void(0)",
        icon: <Snowflake className="w-6 h-6" />,
      },
      {
        title: "Summer Internships",
        desc: "Summer research programs",
        path: "javascript:void(0)",
        icon: <Sun className="w-6 h-6" />,
      },
      {
        title: "Roundtable Meetings",
        desc: "Interactive discussion sessions",
        path: "javascript:void(0)",
        icon: <MessageSquare className="w-6 h-6" />,
      },
    ],
  },
];

const membershipDropdown: DropdownNav[] = [
  {
    label: "Membership",
    navs: [
      {
        title: "Become Member",
        desc: "Join our research community",
        path: "javascript:void(0)",
        icon: <UserPlus className="w-6 h-6" />,
      },
      {
        title: "Internships",
        desc: "Research internship opportunities",
        path: "javascript:void(0)",
        icon: <Briefcase className="w-6 h-6" />,
      },
      {
        title: "Student Council",
        desc: "Student leadership opportunities",
        path: "javascript:void(0)",
        icon: <GraduationCap className="w-6 h-6" />,
      },
    ],
  },
];

export default function Navbar() {
  const [state, setState] = useState(false);
  const [dropdownState, setDropdownState] = useState<{
    isActive: boolean;
    idx: number | null;
  }>({
    isActive: false,
    idx: null,
  });

  const navigation = [
    {
      title: "About",
      path: "javascript:void(0)",
      isDrapdown: true,
      navs: aboutDropdown,
    },
    {
      title: "Submission",
      path: "javascript:void(0)",
      isDrapdown: true,
      navs: submissionDropdown,
    },
    {
      title: "Publication",
      path: "javascript:void(0)",
      isDrapdown: true,
      navs: publicationDropdown,
    },
    {
      title: "Events",
      path: "javascript:void(0)",
      isDrapdown: true,
      navs: eventsDropdown,
    },
    {
      title: "Membership",
      path: "javascript:void(0)",
      isDrapdown: true,
      navs: membershipDropdown,
    },
    {
      title: "Sponsorship",
      path: "javascript:void(0)",
      isDrapdown: false,
      icon: <Heart className="w-4 h-4" />,
    },
    {
      title: "Contact",
      path: "javascript:void(0)",
      isDrapdown: false,
      icon: <Phone className="w-4 h-4" />,
    },
  ];

  useEffect(() => {
    if (state) {
      document.body.classList.add("stop-scroll");
    } else {
      document.body.classList.remove("stop-scroll");
    }

    return () => {
      document.body.classList.remove("stop-scroll");
    };
  }, [state]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && !target.closest(".nav-menu")) {
        setDropdownState({ isActive: false, idx: null });
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleMouseEnter = (idx: number) => {
    setDropdownState({ idx, isActive: true });
  };

  const handleMouseLeave = () => {
    setDropdownState({ isActive: false, idx: null });
  };

  return (
    <>
      <nav
        className={`fixed top-0 z-50 bg-background border-b border-gray-200 w-full md:sticky md:text-sm transition-all duration-300 ${
          state ? "shadow-lg rounded-b-xl md:shadow-none" : ""
        }`}
      >
        <div className="items-center xl:gap-x-14 sm:gap-6 px-4 max-w-screen-2xl mx-auto md:flex md:px-4">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <div className="flex items-center text-primary gap-1 justify-start">
                <span className="text-3xl sm:text-2xl font-bold">Pahal </span>
                <span className="text-2xl sm:text-xl font-medium">Horizon</span>
                <span className="w-2 h-2 mt-2 rounded-full bg-primary"></span>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="text-primary hover:text-secondary transition-colors duration-200"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 transition-all duration-300 ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className="items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx} className="relative">
                    {item.isDrapdown ? (
                      <div
                        className="relative"
                        onMouseEnter={() => handleMouseEnter(idx)}
                         
                      >
                        <button className="w-full flex items-center justify-between text-primary hover:text-secondary transition-colors duration-200 font-medium group">
                          {item.title}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                              dropdownState.idx === idx &&
                              dropdownState.isActive
                                ? "rotate-180"
                                : ""
                            }`}
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>

                        {item.isDrapdown &&
                          dropdownState.idx === idx &&
                          dropdownState.isActive && (
                            <div
                              onMouseLeave={handleMouseLeave}
                              className="absolute top-full left-0 mt-2  bg-background border border-mediumGray shadow-xl rounded-lg z-50 min-w-max opacity-0 animate-in fade-in-0 zoom-in-95 duration-200 opacity-100 md:absolute md:left-1/2 md:transform md:-translate-x-1/2"
                            >
                              <div className="p-3">
                                <div
                                  className={`grid gap-6 ${
                                    item.navs && item.navs.length > 1
                                      ? "md:grid-cols-2"
                                      : "md:grid-cols-1"
                                  }`}
                                >
                                  {(item?.navs || []).map(
                                    (dropdownItem, dropdownIdx) => (
                                      <div key={dropdownIdx}>
                                        <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-4">
                                          {dropdownItem.label}
                                        </p>
                                        <ul className="space-y-4">
                                          {dropdownItem.navs.map(
                                            (navItem, navIdx) => (
                                              <li
                                                key={navIdx}
                                                className="group/item"
                                              >
                                                <Link
                                                  href={navItem.path}
                                                  className="flex gap-3 items-start p-2 rounded-lg hover:bg-lightGray  transition-colors duration-200"
                                                >
                                                  <div className="w-10 h-10 rounded-lg text-gray flex items-center justify-center duration-200 group-hover/item:bg-secondary group-hover/item:text-white flex-shrink-0">
                                                    {navItem.icon}
                                                  </div>
                                                  <div className="flex-1 min-w-0">
                                                    <span className="text-gray duration-200 group-hover/item:text-secondary text-sm font-medium block">
                                                      {navItem.title}
                                                    </span>
                                                    <p className="text-xs text-gray group-hover/item:text-primary mt-1 line-clamp-2">
                                                      {navItem.desc}
                                                    </p>
                                                  </div>
                                                </Link>
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            </div>
                          )}
                      </div>
                    ) : (
                      <a
                        href={item.path}
                        className="flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-200 font-medium"
                        onMouseEnter={()=>handleMouseLeave()}
                      >
                        {item.icon}
                        {item.title}
                      </a>
                    )}
                  </li>
                );
              })}
              <div className="flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0">
                <li>
                  <Link
                    href="/login"
                    className="block py-3 text-nowrap text-center text-primary hover:text-secondary border border-primary hover:border-secondary rounded-lg md:border-none transition-all duration-200 font-medium"
                  >
                    Log in
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sign-up"
                    className="block py-3 px-6 text-nowrap font-medium text-center text-background bg-primary hover:bg-secondary active:bg-secondary transition-colors duration-200 rounded-lg shadow-sm md:inline"
                  >
                    Sign up
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      {state && (
        <div
          className="z-40 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden transition-all duration-300"
          onClick={() => setState(false)}
        />
      )}
    </>
  );
}
