import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {ArrowLeft,ArrowRight,ArrowUpRight,BookOpen,Layers3,CheckCircle2} from 'lucide-react';
import {projects} from '@/lib/data';
import {Eyebrow,CheckList,ProjectCard,Accent,CtaBanner} from '@/components/Ui';
import {Reveal} from '@/components/Reveal';
import {GalleryViewer} from '@/components/GalleryViewer';
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=projects.find(x=>x.slug===slug);return {title:p?`${p.client} — Portfolio Project`:'Project',description:p?.summary}}
export default async function ProjectDetail({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const p=projects.find(x=>x.slug===slug);if(!p)notFound();
 const same=projects.filter(x=>x.slug!==slug&&x.industry===p.industry).slice(0,3);
 const nearby=projects.filter(x=>x.slug!==slug&&!same.some(y=>y.slug===x.slug)).slice(0,3-same.length);
 const more=[...same,...nearby];
 const next=projects[(projects.findIndex(x=>x.slug===slug)+1)%projects.length];
 return <>
 <section className="project-detail-top"><div className="container"><div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/projects">Portfolio</Link> / {p.client}</div><Reveal><div className="detail-title-area"><div><Eyebrow>{p.category.toUpperCase()} · PROFILE PAGE {p.sourcePage}</Eyebrow><h1>{p.client}</h1><p>{p.headline}</p></div><span className="detail-format-badge">{p.format}</span></div></Reveal>
 <Reveal><GalleryViewer images={p.gallery} title={p.client} sourcePage={p.sourcePage} format={p.format}/></Reveal>
 <div className="project-story-grid"><Reveal><div className="project-story-lead"><Eyebrow>THE PORTFOLIO STORY</Eyebrow><h2>{p.headline}</h2><p>{p.summary}</p><p>This entry is documented in the Adya Expo Designs company profile. The presentation highlights visual features visible in the supplied images and does not infer the project’s financial or commercial outcomes.</p><Link className="btn btn-primary" href="/contact">Plan a similar project <ArrowUpRight size={16}/></Link></div></Reveal><Reveal delay={100}><div className="project-story-aside"><h3>Design observations</h3><CheckList items={p.details}/><div className="project-facts"><div><span>Category</span><strong>{p.category}</strong></div><div><span>Sector</span><strong>{p.industry}</strong></div><div><span>Visual evidence</span><strong>{p.format}</strong></div><div><span>Profile reference</span><strong>Page {p.sourcePage} of 48</strong></div></div></div></Reveal></div>
 <div className="project-evidence-note"><BookOpen size={20}/><div><strong>Source transparency</strong><p>{p.sourceNote} {p.format==='Design concept'?'These images are 3D visualizations and are not proof of a completed installation.':p.format==='Mixed documentation'?'This page contains both visualization and photographic documentation.':'Please confirm final delivery specifics with Adya.'}</p></div></div>
 </div></section>
 <section className="section-pad"><div className="container"><div className="section-head"><div><Eyebrow>EXPLORE FURTHER</Eyebrow><h2 className="display-2">More from this <Accent>world.</Accent></h2></div><Link href="/projects" className="text-link"><ArrowLeft size={18}/> All work</Link></div><div className="project-grid">{more.map((x,i)=><Reveal key={x.slug} delay={i*80}><ProjectCard project={x}/></Reveal>)}</div><div className="next-project-link"><span>CONTINUE THROUGH THE ARCHIVE</span><Link href={`/projects/${next.slug}`}>{next.client}<ArrowRight size={24}/></Link></div></div></section><CtaBanner title="Your exhibition brief deserves the same attention."/>
 </>;
}
