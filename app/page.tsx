"use client";
import dynamic from "next/dynamic";
import {Suspense} from "react";
import OurInitiatives from "./(sections)/initiatives/page";
import Hero from "./(sections)/hero/page";
import About from "./(sections)/about/page";
import MapView from "./(sections)/mapView/page";
import OfferingsSection from "./(sections)/offerings/page";
import Team from "./(sections)/team/page";
import Footer from "./(sections)/footer/page";
import ChiefGuestSection from "./(sections)/chiefGuest/page";
import AlumniSection from "./(sections)/alumini/page";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// const Hero = dynamic(() => import("./(sections)/hero/page"), { ssr: false });
// const About = dynamic(() => import("./(sections)/about/page"), { ssr: false });
// const LogoGrid = dynamic(() => import("./(sections)/logoGrid/page"), {
//   ssr: false,
// });
// const Team = dynamic(() => import("./(sections)/team/page"), { ssr: false });
// const Footer = dynamic(() => import("./(sections)/footer/page"), {
//   ssr: false,
// });
// const Offerings = dynamic(() => import("./(sections)/offerings/page"), {
//   ssr: false,
// });
// const MapView = dynamic(() => import("./(sections)/mapView/page"), {
//   ssr: false,
// });

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
      <Hero />
      <About />
      <OurInitiatives/>
      <ChiefGuestSection/>
      {/* <LogoGrid />   */}
      <MapView />
      <OfferingsSection />
      <AlumniSection/>
      <Team />
      <Footer />
    </Suspense>
  );
}
