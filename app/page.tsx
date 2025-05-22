"use client";
import dynamic from "next/dynamic";
import {Suspense} from "react";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

const Home = dynamic(() => import("./(sections)/hero/page"), { ssr: false });
const About = dynamic(() => import("./(sections)/about/page"), { ssr: false });
const LogoGrid = dynamic(() => import("./(sections)/logoGrid/page"), {
  ssr: false,
});
const Team = dynamic(() => import("./(sections)/team/page"), { ssr: false });
const Footer = dynamic(() => import("./(sections)/footer/page"), {
  ssr: false,
});
const Initiatives = dynamic(() => import("./(sections)/initiatives/page"), {
  ssr: false,
});
const MapView = dynamic(() => import("./(sections)/mapView/page"), {
  ssr: false,
});

export default function Page() {
  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  // const router = useRouter(); // Use useRouter for navigation

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     router.push("/(auth)"); // Redirects only if user is NOT logged in
  //   }
  // }, [isLoggedIn, router]);

  // if (!isLoggedIn) return null; // Avoid rendering before redirect

  return (
    <Suspense fallback={<>Loading...</>}>
      <Home />
      <About />
      <LogoGrid />
      <MapView />
      <Initiatives />
      <Team />
      <Footer />
    </Suspense>
  );
}
