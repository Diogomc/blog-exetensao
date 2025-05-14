"use client"

import { About } from "@/components/about/About";
import { Main } from "@/components/main/Main";
import { Nav } from "@/components/nav/Nav";
import { Objective } from "@/components/objectives/Objective";

export default function Home() {
  return (
    <div>
      <Main/>
      <Nav/>
      <About/>
      <Objective/>
    </div>
  );
}
