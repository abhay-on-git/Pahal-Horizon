"use client";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
import Home from "./(sections)/home/page";
import About from "./(sections)/about/page";
import LogoGrid from "./(sections)/logoGrid/page";
import Team from "./(sections)/team/page";
import Footer from "./(sections)/footer/page";
import Initiatives from "./(sections)/initiatives/page";
import  MapView  from "./(sections)/mapView/page";

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
    <div className="">
      <Home />
      <About />
      <LogoGrid />
      <MapView/>
      <Initiatives/>
      <Team />
      <Footer />
    </div>
  );
}
