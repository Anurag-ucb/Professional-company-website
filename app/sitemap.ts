import type {MetadataRoute} from 'next';
import {projects,services} from '@/lib/data';
export default function sitemap():MetadataRoute.Sitemap{
 const root=(process.env.NEXT_PUBLIC_SITE_URL||'http://localhost:3000').replace(/\/$/,'');
 const pages=['','about','services','projects','manufacturing','industries','locations','partners','contact','faq'];
 return [...pages.map(p=>({url:`${root}/${p}`,changeFrequency:'monthly' as const,priority:p===''?1:0.75})),...services.map(s=>({url:`${root}/services/${s.slug}`,changeFrequency:'yearly' as const,priority:0.6})),...projects.map(p=>({url:`${root}/projects/${p.slug}`,changeFrequency:'yearly' as const,priority:0.55}))];
}
