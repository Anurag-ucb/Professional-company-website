import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight, Check, Factory, PanelsTopLeft, Grid2X2, ClipboardList, Sparkles, CalendarDays, Building2, Truck, Zap, Package, HeartPulse, ChevronRight } from 'lucide-react';
import type { Project } from '@/lib/data';
import { Reveal } from './Reveal';

export function Eyebrow({children}:{children:React.ReactNode}){return <div className="eyebrow"><span className="eyebrow-dot"/>{children}</div>}
export function Accent({children}:{children:React.ReactNode}){return <span className="accent-text">{children}</span>}
export function PrimaryLink({href,children,inverse=false}:{href:string;children:React.ReactNode;inverse?:boolean}){return <Link href={href} className={`btn btn-primary ${inverse?'btn-white':''}`}>{children}<ArrowUpRight size={17}/></Link>}
export function OutlineLink({href,children}:{href:string;children:React.ReactNode}){return <Link href={href} className="btn btn-outline">{children}<ArrowUpRight size={17}/></Link>}
export function TextLink({href,children}:{href:string;children:React.ReactNode}){return <Link href={href} className="text-link">{children}<ArrowUpRight size={17}/></Link>}
export function IconGraphic({type,size=23}:{type:string,size?:number}){
 const icons:{[key:string]:React.ComponentType<{size?:number;strokeWidth?:number}>} = {panels:PanelsTopLeft,grid:Grid2X2,factory:Factory,clipboard:ClipboardList,sparkles:Sparkles,calendar:CalendarDays,building:Building2,truck:Truck,zap:Zap,package:Package,heart:HeartPulse};
 const Glyph=icons[type]||Factory;return <Glyph size={size} strokeWidth={1.65}/>;
}
export function ProjectCard({project,large=false}:{project:Project,large?:boolean}){
 return <Link href={`/projects/${project.slug}`} className={`project-card project-card-v6 ${large?'project-card-large':''}`}>
  <div className="project-image"><Image src={project.image} alt={`${project.client} — ${project.format.toLowerCase()} from PDF page ${project.sourcePage}`} fill sizes={large?'(max-width: 800px) 100vw, 62vw':'(max-width: 700px) 100vw, 35vw'} quality={85}/><div className="project-image-scrim"/><span className="image-tag">{project.format}</span><span className="image-page">PDF / {String(project.sourcePage).padStart(2,'0')}</span><span className="image-arrow"><ArrowUpRight size={20}/></span></div>
  <div className="project-meta"><div><span>{project.industry}</span><h3>{project.client}</h3><p className="project-card-summary">{project.headline}</p></div><ArrowUpRight size={21}/></div>
 </Link>
}
export function SectionHeading({eyebrow,title,description,action,center=false}:{eyebrow:string;title:React.ReactNode;description?:string;action?:{label:string;href:string};center?:boolean}){
 return <Reveal><div className={`section-head ${center?'center':''}`}><div><Eyebrow>{eyebrow}</Eyebrow><h2 className="display-2">{title}</h2>{description&&<p className="section-sub">{description}</p>}</div>{action&&<TextLink href={action.href}>{action.label}</TextLink>}</div></Reveal>
}
export function PageHero({eyebrow,title,description,sideLabel}:{eyebrow:string;title:React.ReactNode;description:string;sideLabel?:string}){
 return <section className="page-hero"><div className="orb orb-page"/><div className="container page-hero-grid"><Reveal><Eyebrow>{eyebrow}</Eyebrow><h1 className="display-page">{title}</h1><p className="lead">{description}</p></Reveal>{sideLabel&&<div className="page-side-label">{sideLabel}<ArrowRight size={16}/></div>}</div></section>
}
export function CheckList({items}:{items:string[]}){return <ul className="check-list">{items.map(i=><li key={i}><span><Check size={15}/></span>{i}</li>)}</ul>}
export function CtaBanner({mini='LET’S MAKE IT HAPPEN',title='Your next exhibition deserves something exceptional.',description='Tell us where you’re exhibiting, what you’re building and when you need it. We’ll help shape the next step.'}:{mini?:string;title?:string;description?:string}){return <section className="cta-section"><div className="container"><Reveal><div className="cta-panel"><div className="cta-orb cta-orb-one"/><div className="cta-orb cta-orb-two"/><div className="cta-content"><Eyebrow>{mini}</Eyebrow><h2>{title}</h2><p>{description}</p><div className="cta-actions"><PrimaryLink href="/contact">Request a proposal</PrimaryLink><Link href="/projects" className="cta-quiet">Explore our work <ChevronRight size={16}/></Link></div></div><div className="cta-symbol" aria-hidden>adya<span>.</span></div></div></Reveal></div></section>}
