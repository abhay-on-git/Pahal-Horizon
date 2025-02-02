import {
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  XOutlined,
} from "@ant-design/icons";
// import { div } from "framer-motion/client";
// import Image from "next/image";

export default function Footer() {
  const footerNavs = [
    {
      label: "Useful Links",
      items: [
        {
          href: "javascript:void()",
          name: "Partners",
        },
        {
          href: "javascript:void()",
          name: "Blog",
        },
        {
          href: "javascript:void()",
          name: "Team",
        },
        {
          href: "javascript:void()",
          name: " Submit Paper",
        },
        {
          href: "javascript:void()",
          name: " Donate Us",
        },
      ],
    },
    {
      label: "Opportunities",
      items: [
        {
          href: "javascript:void()",
          name: " Memberships",
        },
        {
          href: "javascript:void()",
          name: " GCSE Competition",
        },
        {
          href: "javascript:void()",
          name: "Internships",
        },
        {
          href: "javascript:void()",
          name: " Summer Program",
        },
        {
          href: "javascript:void()",
          name: "Talks",
        },
      ],
    },
    {
      label: "Get in touch",
      items: [
        {
          href: "javascript:void()",
          name: "associate@pahalhorizon.com",
        },
        {
          href: "javascript:void()",
          name: "pahalhorizon@gmail.com",
        },
        {
          href: "javascript:void()",
          name: "+91 955-735-2154",
        },
        {
          href: "javascript:void()",
          name: "+91 980-812-7514",
        },
        {
          href: "javascript:void()",
          name: "West Arjun Nagar Agra, Uttar Pradesh, India",
        },
      ],
    },
  ];

  return (
    <div className="w-full pt-8 bg-white">
      <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
        <div className="mx-auto mb-16 max-w-md">
          <strong className="block text-center text-xl font-clash font-semibold text-gray-900 sm:text-3xl">
            Want us to email you with our latest Journals ?
          </strong>

          <form className="mt-6" onSubmit={(e) => e.preventDefault()}>
            <div className="relative max-w-lg">
              <label className="sr-only" htmlFor="email">
                {" "}
                Email{" "}
              </label>

              <input
                className="w-full rounded-lg border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder="john@doe.com"
              />

              <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="gap-6 justify-between md:flex">
          <div className="flex-1">
            <div className="max-w-xs">
              {/* <Image src="" className="w-32" alt={""} /> */}
              <div className="flex items-center text-black gap-1 justify-start">
                <span className="text-3xl sm:text-2xl font-clash font-semibold">
                  Pahal{" "}
                </span>
                <span className="text-2xl sm:text-xl font-clash font-medium">
                  Horizon
                </span>
                <span className="w-2 h-2 mt-2 rounded-full bg-black"></span>
              </div>
              <p className="leading-relaxed mt-2 text-[15px]">
                India&apos;s fastest growing Research community
              </p>
            </div>

            <div className="mt-6 sm:mt-6">
              <ul className="flex items-center space-x-4">
                <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                  <a href="javascript:void()">
                    <LinkedinOutlined />
                  </a>
                </li>

                <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                  <a href="javascript:void()">
                    <InstagramOutlined />
                  </a>
                </li>

                <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                  <a href="javascript:void()">
                    <XOutlined />
                  </a>
                </li>
                <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                  <a href="javascript:void()">
                    <MailOutlined />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
            {footerNavs.map((item, idx) => (
              <ul className="space-y-4" key={idx}>
                <h4 className="text-gray-800 font-medium">{item.label}</h4>
                {item.items.map((el, idx) => (
                  <li key={idx}>
                    <a
                      href={el.href}
                      className="hover:underline hover:text-indigo-600"
                    >
                      {el.name}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-16 border-t border-gray-200 pt-8">
          <p className="text-center text-xs/relaxed text-gray-500">
            © Pahal Horizon 2025. All rights reserved.
            <br />
            Created with
            <a
              href="#"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              💓
            </a>
            via{" "}
            <a
              href="#"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              Pahal Horizon
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
