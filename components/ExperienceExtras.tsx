'use client';
import {useEffect,useState} from 'react';
import {ArrowUp,ChevronDown} from 'lucide-react';

export function ReadingTools(){
 const [progress,setProgress]=useState(0),[seen,setSeen]=useState(false);
 useEffect(()=>{const update=()=>{const total=document.documentElement.scrollHeight-window.innerHeight;setProgress(total>0?Math.min(100,window.scrollY/total*100):0);setSeen(window.scrollY>650)};update();window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);return()=>{window.removeEventListener('scroll',update);window.removeEventListener('resize',update)}},[]);
 return <><div className="reading-track" aria-hidden><span style={{width:`${progress}%`}}/></div><button type="button" className={`back-to-top ${seen?'visible':''}`} aria-label="Back to top" tabIndex={seen?0:-1} onClick={()=>window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})}><ArrowUp size={20}/></button></>
}
export function ServiceFaq({items}:{items:{q:string;a:string}[]}){
 const [open,setOpen]=useState<number|null>(0);
 return <div className="service-faqs">{items.map((item,i)=><div className={`service-faq ${open===i?'expanded':''}`} key={item.q}><button type="button" aria-expanded={open===i} onClick={()=>setOpen(open===i?null:i)}><span>{item.q}</span><ChevronDown size={19}/></button>{open===i&&<p>{item.a}</p>}</div>)}</div>;
}
