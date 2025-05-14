"use client"

import { About } from "@/components/about/About";
import { Main } from "@/components/main/Main";
import { Nav } from "@/components/nav/Nav";

export default function Home() {
  return (
    <div>
      <Main/>
      <Nav/>
      <About/>
    </div>
  );
}
