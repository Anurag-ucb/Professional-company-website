import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Layers } from 'lucide-react';
import { sectors, projects } from '@/lib/data';
import { PageHero, Accent, Eyebrow, IconGraphic, ProjectCard, CtaBanner } from '@/components/Ui';
import { Reveal } from '@/components/Reveal';
export const metadata: Metadata = { title: 'Industries & Exhibition Sectors', description: 'Explore exhibition solutions and portfolio references across engineering, building materials, electrical systems, lifestyle, packaged goods and more.' };
export default function Industries() {
    const samples = ['woodmac', 'aquatech', 'jetage', 'ssk', 'durga-confectioners-concept', 'preserve-machines-concept'].map(s => projects.find(p => p.slug === s)!);
    return <><PageHero eyebrow="WHO WE SERVE" title={<>Every sector has a story.<br /><Accent>We help tell it in space.</Accent></>} description="Engineering equipment, building products, consumer goods, electronics and event environments all require different visitor experiences. Browse the sectors represented across Adya’s portfolio." sideLabel="SECTOR-SPECIFIC EXHIBITION DESIGN" />
        <section className="section-pad"><div className="container"><div className="section-head"><div><Eyebrow>SECTORS REPRESENTED IN THE PROFILE</Eyebrow><h2 className="display-2">Design that speaks the <Accent>industry’s language.</Accent></h2><p className="section-sub">The following categories describe themes visible in Adya’s projects and design concepts. They do not imply every depicted brand has an active contract with Adya.</p></div></div><div className="industry-grid">{sectors.map((s, i) => { const match = projects.filter(p => p.industry === s.name); return <Reveal key={s.name} delay={(i % 3) * 75}><Link href="/projects" className="industry-tile industry-tinted industry-detailed"><span className="industry-icon"><IconGraphic type={s.icon} /></span><div><span className="sector-count">{match.length} archive {match.length === 1 ? 'entry' : 'entries'}</span><h3>{s.name}</h3><p>{s.detail}</p><span className="sector-link">Browse documented projects <ArrowUpRight size={15} /></span></div></Link></Reveal> })}</div></div></section>
        <section className="section-pad pale-section"><div className="container"><div className="section-head"><div><Eyebrow>PROJECT EXAMPLES</Eyebrow><h2 className="display-2">From factory floors to <Accent>show floors.</Accent></h2><p className="section-sub">A few of the photographed installations and concept spaces documented in the company profile.</p></div><Link href="/projects" className="text-link">Full archive <ArrowUpRight size={16} /></Link></div><div className="catalog-grid">{samples.map((p, i) => <Reveal key={p.slug} delay={(i % 3) * 70}><ProjectCard project={p} /></Reveal>)}</div></div></section>
        <CtaBanner title="Tell us about your industry and what you need to display." /></>;
}
