'use client';
import Image from 'next/image';
import {useEffect,useRef,useState} from 'react';
import {ArrowLeft,ArrowRight,Expand,X,Image as ImageIcon} from 'lucide-react';

type Props={images:string[];title:string;sourcePage:number;format:string};
const names=['Featured portfolio view','Upper detail view','Additional detail view','Original portfolio page layout'];
export function GalleryViewer({images,title,sourcePage,format}:Props){
 const [selected,setSelected]=useState(0),[expanded,setExpanded]=useState(false);
 const trigger=useRef<HTMLButtonElement>(null);
 const closeButton=useRef<HTMLButtonElement>(null);
 const move=(step:number)=>setSelected(p=>(p+step+images.length)%images.length);
 useEffect(()=>{
  if(!expanded)return;
  const key=(e:KeyboardEvent)=>{if(e.key==='Escape')setExpanded(false);if(e.key==='ArrowLeft')move(-1);if(e.key==='ArrowRight')move(1)};
  const previousOverflow=document.body.style.overflow;document.body.style.overflow='hidden';closeButton.current?.focus();
  window.addEventListener('keydown',key);return()=>{window.removeEventListener('keydown',key);document.body.style.overflow=previousOverflow;trigger.current?.focus()}
 },[expanded,images.length]);
 let touchStart=0;
 return <div className="immersive-gallery">
   <div className="gallery-main">
    <Image key={images[selected]} src={images[selected]} alt={`${title} — ${names[selected]} (company profile, page ${sourcePage})`} fill priority sizes="(max-width: 850px) 100vw, 1100px" />
    <div className="gallery-caption-overlay"><span className="gallery-kicker">PAGE {String(sourcePage).padStart(2,'0')} / ADYA COMPANY PROFILE</span><strong>{title}</strong><span>{format} · {selected+1} / {images.length}</span></div>
    <button className="gallery-expand" type="button" ref={trigger} onClick={()=>setExpanded(true)} aria-label="Open image gallery"><Expand size={17}/> View images</button>
    <div className="gallery-nav"><button onClick={()=>move(-1)} aria-label="Previous image" type="button"><ArrowLeft size={19}/></button><button onClick={()=>move(1)} aria-label="Next image" type="button"><ArrowRight size={19}/></button></div>
   </div>
   <div className="gallery-thumbs" aria-label="Project image thumbnails">{images.map((im,i)=><button type="button" key={im} onClick={()=>setSelected(i)} className={selected===i?'active':''} aria-label={`View ${names[i]}`} aria-pressed={selected===i}><Image src={im} alt="" fill sizes="(max-width: 700px) 24vw, 220px"/><span>{i===3?'PDF spread':`View ${i+1}`}</span></button>)}</div>
   {expanded&&<div className="lightbox" role="dialog" aria-modal="true" aria-label={`${title} image gallery`} onClick={()=>setExpanded(false)} onTouchStart={e=>touchStart=e.touches[0].clientX} onTouchEnd={e=>{const dx=e.changedTouches[0].clientX-touchStart;if(Math.abs(dx)>60)move(dx>0?-1:1)}}>
      <div className="lightbox-toolbar" onClick={e=>e.stopPropagation()}><span><ImageIcon size={17}/> {title} · {selected+1}/{images.length}</span><button type="button" aria-label="Close image viewer" ref={closeButton} onClick={()=>setExpanded(false)}><X size={23}/></button></div>
      <div className="lightbox-image" onClick={e=>e.stopPropagation()}><Image src={images[selected]} alt={`${title}: ${names[selected]}`} fill sizes="100vw"/></div>
      <div className="lightbox-bottom" onClick={e=>e.stopPropagation()}><button type="button" aria-label="Previous image" onClick={()=>move(-1)}><ArrowLeft size={19}/></button><span>{names[selected]} · PDF page {sourcePage}</span><button type="button" aria-label="Next image" onClick={()=>move(1)}><ArrowRight size={19}/></button></div>
    </div>}
 </div>
}
