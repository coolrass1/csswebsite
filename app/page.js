"use client";
import Area2 from "@/components/Area2";
import Area3 from "@/components/Area3";
import Area4 from "@/components/Area4";
import Area5 from "@/components/Area5";
import Area6 from "@/components/Area6";
import Area7 from "@/components/Area7";
import Area8 from "@/components/Area8";
import Carouselitem from "@/components/Carouselitem";
import { Galerie } from "@/components/Galerie";
import Hero from "@/components/Hero";

import SwipeHolder3 from "@/components/SwipeHolder3";
import SwiperHolder from "@/components/SwiperHolder";
import SwiperHolder2 from "@/components/SwiperHolder2";

export default function Home() {
  return (
    <div className="relative">
      <SwiperHolder2 />
      <Area2/>
      <Area3/>
      <Area4/>
      <Area5/>
      <Area6/>
      <Area7/>
      <Area8/>
    </div>
  );
}
