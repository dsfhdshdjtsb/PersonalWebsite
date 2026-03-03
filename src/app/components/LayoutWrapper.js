"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Home from "./Home";

export default function LayoutWrapper() {
  const pathname = usePathname();
  
  // Map pathname to pageState
  let pageState = "";
  if (pathname === "/projects") pageState = "Projects";
  else if (pathname === "/contact") pageState = "Contact";

  return (
    <>
      <Header pageState={pageState} />
      <Home pageState={pageState} />
    </>
  );
}
