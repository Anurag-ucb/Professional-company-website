"use client";

import Image from "next/image";
import { projects } from "@/lib/data";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";

const slides = [
  { image: "/images/woodmac.webp", name: "WOODMAC", type: "Completed exhibition installation", description: "A brand-led exhibition environment from Adya’s portfolio." },
  { image: "/images/aquatech.webp", name: "AQUATECH", type: "Completed exhibition installation", description: "Industrial product presentation with dedicated visitor space." },
  { image: "/images/hesa.webp", name: "HESA", type: "Exhibition portfolio project", description: "Bold visual identity and structured product display." },
  { image: "/images/jetage.webp", name: "JET AGE", type: "Completed exhibition installation", description: "Exhibition presence for automotive equipment." },
  { image: "/images/netzsch.webp", name: "NETZSCH", type: "3D exhibition design concept", description: "Conceptual brand space from the Adya company profile." },
  { image: "/images/ctp.webp", name: "CTP", type: "Completed exhibition installation", description: "Large-scale exhibition and outdoor pavilion work." },
];

export function HeroShowcase() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => setActive((n) => (n + 1) % slides.length), 4200);
    return () => window.clearInterval(id);
  }, [playing]);
  const move = (step: number) => setActive((n) => (n + step + slides.length) % slides.length);
  return (
    <div className="motion-showcase" aria-label="Adya exhibition portfolio slideshow">
      <div className="motion-showcase-frame">
        {slides.map((slide, i) => (
          <div className={`motion-slide ${active === i ? "is-active" : ""}`} key={slide.image} aria-hidden={active !== i}>
            <Image src={slide.image} alt={slide.name + " exhibition portfolio"} fill priority={i === 0} sizes="(max-width: 980px) 95vw, 50vw" quality={85} />
          </div>
        ))}
        <div className="motion-photo-gradient" />
        <div className="motion-slide-copy" aria-live="off">
          <span>{slides[active].type}</span>
          <h2>{slides[active].name}</h2>
          <p>{slides[active].description}</p>
        </div>
        <div className="motion-controls">
          <button type="button" aria-label="Previous image" onClick={() => move(-1)}><ArrowLeft size={18}/></button>
          <button type="button" aria-label={playing ? "Pause slideshow" : "Play slideshow"} onClick={() => setPlaying(v => !v)}>{playing ? <Pause size={16}/> : <Play size={16}/>}</button>
          <button type="button" aria-label="Next image" onClick={() => move(1)}><ArrowRight size={18}/></button>
        </div>
      </div>
      <div className="motion-dots" aria-label="Choose slide">
        {slides.map((s,i) => <button key={s.image} type="button" className={i === active ? "is-active" : ""} onClick={() => setActive(i)} aria-label={`Show ${s.name}`} aria-current={i===active ? "true" : undefined}/>)}
      </div>
      <div className="motion-corner-card"><span>01 — 06</span><strong>Made to be seen.</strong><small>Real portfolio imagery</small></div>
    </div>
  );
}

// Names transcribed from the client-logo page and project pages of the uploaded Adya profile.
// This is portfolio attribution, not an endorsement claim.
const logoPageBrands = [
 "Golden Grain", "Global Kitchen Equipments", "WOODMAC", "VCS India", "Neha Label", "Northern Ply", "Honour Film Face Plywood", "Modak", "CTP", "HESA", "Oscar Plywood", "Vibez", "Aquatech", "NETZSCH", "Avian Plywood", "Dolphin India", "SSK", "JET AGE", "Papier International"
];
const uniqueBrands = [...new Set([...logoPageBrands, ...projects.map(p => p.client)])];

export function BrandMarquee() {
  return <section className="brand-marquee-section" aria-label="Brands featured in Adya's portfolio">
    <div className="container brand-marquee-header">
      <div><span className="eyebrow">PORTFOLIO HIGHLIGHTS</span><h2>Brands featured in our <em>portfolio.</em></h2></div>
      <p>Names visible in Adya’s company profile, including client logos and project visuals. Some projects are design concepts.</p>
    </div>
    <div className="brand-marquee-mask">
      <div className="brand-marquee-track">
        {[0,1].map(copy => <div className="brand-marquee-set" key={copy} aria-hidden={copy===1}>
          {uniqueBrands.map(name => <span className="brand-chip" key={`${copy}-${name}`}><span className="brand-chip-mark"/> {name}</span>)}
        </div>)}
      </div>
    </div>
    <div className="container brand-marquee-footer"><span>{uniqueBrands.length} brand and project labels</span><Link href="/projects">Explore the project gallery <ArrowRight size={16}/></Link></div>
  </section>;
}
