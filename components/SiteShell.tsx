'use client';

import { MessageCircle, QrCode } from 'lucide-react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowRight, Menu, X, ChevronDown, Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';
import { brand } from '@/lib/data';

const navigation=[{label:'Home',href:'/'},{label:'About',href:'/about'},{label:'Services',href:'/services'},{label:'Projects',href:'/projects'},{label:'Manufacturing',href:'/manufacturing'},{label:'Industries',href:'/industries'}];
const more=[{label:'Pan-India presence',href:'/locations'},{label:'For exhibition agencies',href:'/partners'},{label:'Common questions',href:'/faq'}];
export function Header(){
 const [open,setOpen]=useState(false),[moreOpen,setMoreOpen]=useState(false),[scrolled,setScrolled]=useState(false);
 const pathname=usePathname();
 useEffect(()=>{setOpen(false);setMoreOpen(false);},[pathname]);
 useEffect(()=>{const fn=()=>setScrolled(window.scrollY>20);fn();window.addEventListener('scroll',fn,{passive:true});return ()=>window.removeEventListener('scroll',fn)},[]);
 useEffect(()=>{if(!open)return;const closeOnEscape=(event:KeyboardEvent)=>{if(event.key==='Escape')setOpen(false)};window.addEventListener('keydown',closeOnEscape);return ()=>window.removeEventListener('keydown',closeOnEscape)},[open]);
 return <header className={`site-header ${scrolled?'header-scrolled':''}`}>
  <div className="nav-top"><div className="container nav-top-inner"><span><MapPin size={13}/> Delhi · Bengaluru · Pan-India</span><a href={`mailto:${brand.email}`}><Mail size={13}/>{brand.email}</a></div></div>
  <div className="container nav-inner"><Link href="/" className="brand" aria-label="Adya Expo Designs home"><span className="brand-mark">a<span>.</span></span><span className="brand-name">ADYA<span>EXPO DESIGNS</span></span></Link>
  <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(n=><Link href={n.href} key={n.href} className={pathname===n.href?'active':''}>{n.label}</Link>)}<div className="more-wrap"><button onClick={()=>setMoreOpen(v=>!v)} aria-expanded={moreOpen} className={more.some(n=>n.href===pathname)?'active':''}>Explore <ChevronDown size={14}/></button>{moreOpen&&<div className="more-dropdown">{more.map(n=><Link href={n.href} key={n.href}>{n.label}<ArrowUpRight size={14}/></Link>)}</div>}</div></nav>
  <div className="nav-actions"><Link className="nav-quote" href="/contact">Get a quote <ArrowUpRight size={16}/></Link><button type="button" className="menu-btn" onClick={()=>setOpen(v=>!v)} aria-controls="adya-mobile-navigation" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open}>{open?<X size={24}/>:<Menu size={24}/>}</button></div>
  </div>
  {open&&<nav id="adya-mobile-navigation" className="mobile-menu" aria-label="Mobile navigation"><div className="container">{[...navigation,...more].map(n=><Link href={n.href} key={n.href}>{n.label}<ArrowUpRight size={16}/></Link>)}<Link href="/contact" className="mobile-cta">Start a project <ArrowRight size={17}/></Link></div></nav>}
 </header>
}


const whatsappUrl =
  'https://wa.me/message/RHJJQJP6A6ZUI1';

export function WhatsAppContactSection() {
  return (
    <section
      className="adya-whatsapp-section"
      aria-labelledby="adya-whatsapp-heading"
    >
      <div className="container">
        <div className="adya-whatsapp-card">

          {/* Left: Contact information */}
          <div className="adya-wa-content">
            <span className="adya-wa-eyebrow">
              <span className="adya-wa-dot" />
              LET'S CONNECT
            </span>

            <h2 id="adya-whatsapp-heading">
              Big ideas start
              <br />
              with a <span>conversation.</span>
            </h2>

            <p>
              Planning your next exhibition?
              Let's discuss your stand design,
              manufacturing, budget and timeline.
              Our team is just one message away.
            </p>

            <div className="adya-wa-actions">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="adya-wa-chat-btn"
              >
                <MessageCircle size={21} />
                Chat on WhatsApp
                <span aria-hidden="true">↗</span>
              </a>

              <span className="adya-wa-scan-hint">
                <QrCode size={18} />
                Or scan the QR code
              </span>
            </div>

            <div className="adya-wa-note">
              <span className="adya-wa-status" />
              Connect with our business team
            </div>
          </div>

          {/* Right: WhatsApp QR code */}
          <div className="adya-wa-visual">
            <div className="adya-wa-qr-card">
              <div className="adya-wa-qr-header">
                <MessageCircle size={21} />
                <div>
                  <strong>Adya Intersolutions</strong>
                  <span>WhatsApp Business</span>
                </div>
              </div>

              <div className="adya-wa-qr-image">
                <img
                  src="/images/adya-whatsapp-qr.png"
                  alt="Scan to open Adya Intersolutions WhatsApp Business chat"
                  width="260"
                  height="260"
                  loading="lazy"
                />
              </div>

              <strong className="adya-wa-qr-title">
                Scan & Start Chatting
              </strong>

              <p>
                Open your phone camera or
                WhatsApp scanner to connect.
              </p>
            </div>

            <div className="adya-wa-decoration adya-wa-decoration-one" />
            <div className="adya-wa-decoration adya-wa-decoration-two" />
          </div>

        </div>
      </div>
    </section>
  );
}

export function Footer(){return <footer className="footer"><div className="container footer-main"><div className="footer-about"><Link href="/" className="brand brand-footer"><span className="brand-mark">a<span>.</span></span><span className="brand-name">ADYA<span>EXPO DESIGNS</span></span></Link><p>Design-led exhibition spaces, manufactured with purpose and delivered across India.</p><div className="footer-location"><MapPin size={16}/> Delhi & Bengaluru operations · Pan-India delivery</div></div><div className="footer-col"><h4>Explore</h4><Link href="/about">Our story</Link><Link href="/services">What we do</Link><Link href="/projects">Selected projects</Link><Link href="/manufacturing">Our capabilities</Link></div><div className="footer-col"><h4>Work with us</h4><Link href="/industries">Industries served</Link><Link href="/partners">Agency partnerships</Link><Link href="/locations">Our presence</Link><Link href="/faq">FAQs</Link></div><div className="footer-col footer-contact"><h4>Start a conversation</h4><a href={`mailto:${brand.email}`}><Mail size={17}/>{brand.email}</a><a href="tel:+919210244288"><Phone size={17}/>{brand.phones[0]}</a><Link href="/contact" className="footer-inquiry">Send an inquiry <ArrowUpRight size={15}/></Link></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Adya Expo Designs. All rights reserved.</span><span>Crafted for bold brands and better experiences.</span><Link href="/contact">Contact us <ArrowUpRight size={13}/></Link></div></footer>}
