export const brand = {
  name: 'Adya Expo Designs',
  strap: 'Designed to stand apart.',
  email: 'adyaexpodesigns@gmail.com',
  phones: ['+91 92102 44288', '+91 93552 33200'],
  address: 'HR-63 B, Ground Floor, Suraj Kund Road, New Delhi 110044',
  hubs: ['Delhi NCR', 'Bengaluru'],
};

export type Project = {
 slug:string; client:string; category:string; industry:string; image:string;
 format:'Completed installation'|'Design concept'|'Event installation'|'Mixed documentation';
 headline:string; summary:string; details:string[];sourcePage:number;gallery:string[];sourceNote:string;
};
export type Service = {
 slug:string;number:string;title:string;short:string;description:string;highlights:string[];
 inclusions:string[];idealFor:string[];deliverySteps:string[];relatedSlugs:string[];image:string;sourceNote:string;icon:string;
};
// All 40 visual project pages plus 3 extra cover/service showcase pages are indexed by source PDF page, not by claimed commercial outcome.
// No unverified exhibition names, city, year, stand area or build status have been invented.
export const projects: Project[] = [
{"slug": "cover-showcase-concepts", "client": "Cover Showcase Concepts", "category": "3D Concepts", "industry": "Retail & Consumer", "image": "/images/portfolio/profile-p01-main.webp", "format": "Design concept", "headline": "A glimpse of brand environments", "summary": "The opening page of the company profile presents three visual booth and storefront concepts.", "details": ["Multiple display concepts shown together", "Distinctive retail-inspired treatments", "Architectural sign and storefront approaches"], "sourcePage": 1, "gallery": ["/images/portfolio/profile-p01-main.webp", "/images/portfolio/profile-p01-detail-top.webp", "/images/portfolio/profile-p01-detail-bottom.webp", "/images/portfolio/profile-p01-spread.webp"], "sourceNote": "From page 1 of the uploaded Adya Expo Designs company profile. This page illustrates the company’s services or cover presentation; it is not a verified separate client commission."},
{"slug": "custom-stand-example", "client": "Custom Stand Showcase", "category": "3D Concepts", "industry": "Building Materials", "image": "/images/portfolio/profile-p05-main.webp", "format": "Design concept", "headline": "An example of stand customization", "summary": "The service section illustrates a bold red-and-white exhibition booth as an example of custom-built presentation.", "details": ["Bright brand fascia", "Product-led display structures", "Company-led personalized visual language"], "sourcePage": 5, "gallery": ["/images/portfolio/profile-p05-main.webp", "/images/portfolio/profile-p05-detail-top.webp", "/images/portfolio/profile-p05-detail-bottom.webp", "/images/portfolio/profile-p05-spread.webp"], "sourceNote": "From page 5 of the uploaded Adya Expo Designs company profile. This page illustrates the company’s services or cover presentation; it is not a verified separate client commission."},
{"slug": "modular-stand-example", "client": "Modular Stand Showcase", "category": "3D Concepts", "industry": "Retail & Consumer", "image": "/images/portfolio/profile-p06-main.webp", "format": "Design concept", "headline": "A flexible branded display example", "summary": "The company profile illustrates its modular-stand offer with a premium timber-toned dark display concept.", "details": ["Reusable structural presentation", "Distinctive illuminated brand fascia", "Open product experience layout"], "sourcePage": 6, "gallery": ["/images/portfolio/profile-p06-main.webp", "/images/portfolio/profile-p06-detail-top.webp", "/images/portfolio/profile-p06-detail-bottom.webp", "/images/portfolio/profile-p06-spread.webp"], "sourceNote": "From page 6 of the uploaded Adya Expo Designs company profile. This page illustrates the company’s services or cover presentation; it is not a verified separate client commission."},
  {
    "slug": "sealand-exhibit",
    "client": "Sealand / Plywood Showcase",
    "category": "Exhibition Stands",
    "industry": "Building Materials",
    "image": "/images/portfolio/profile-p08-main.webp",
    "format": "Completed installation",
    "headline": "A bright product showcase",
    "summary": "A photographed stand with white fascia panels, branded product walls and hospitality seating.",
    "details": [
      "Wide overhead signage",
      "Customer conversation zone",
      "Product and material display"
    ],
    "sourcePage": 8,
    "gallery": [
      "/images/portfolio/profile-p08-main.webp",
      "/images/portfolio/profile-p08-detail-top.webp",
      "/images/portfolio/profile-p08-detail-bottom.webp",
      "/images/portfolio/profile-p08-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 8. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "plywood-showroom-exhibit",
    "client": "Plywood & Interiors Exhibit",
    "category": "Exhibition Stands",
    "industry": "Building Materials",
    "image": "/images/portfolio/profile-p09-main.webp",
    "format": "Completed installation",
    "headline": "Open-format display environment",
    "summary": "A large photographed display with several access points, a high fascia and wall-mounted product collections.",
    "details": [
      "Open booth frontage",
      "High-visibility fascia",
      "Multi-sided visitor access"
    ],
    "sourcePage": 9,
    "gallery": [
      "/images/portfolio/profile-p09-main.webp",
      "/images/portfolio/profile-p09-detail-top.webp",
      "/images/portfolio/profile-p09-detail-bottom.webp",
      "/images/portfolio/profile-p09-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 9. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "aquatech",
    "client": "Aquatech Pumping Solutions",
    "category": "Exhibition Stands",
    "industry": "Industrial & Engineering",
    "image": "/images/portfolio/profile-p10-main.webp",
    "format": "Completed installation",
    "headline": "Industrial products at the center",
    "summary": "A red-and-white pump exhibition environment with demonstration equipment prominently displayed.",
    "details": [
      "Large product platform",
      "Corner-facing signage",
      "Discussion and reception spaces"
    ],
    "sourcePage": 10,
    "gallery": [
      "/images/portfolio/profile-p10-main.webp",
      "/images/portfolio/profile-p10-detail-top.webp",
      "/images/portfolio/profile-p10-detail-bottom.webp",
      "/images/portfolio/profile-p10-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 10. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "ctp-indoor",
    "client": "CTP — Indoor Pavilion",
    "category": "Exhibition Stands",
    "industry": "Industrial & Engineering",
    "image": "/images/portfolio/profile-p11-main.webp",
    "format": "Completed installation",
    "headline": "An engineering pavilion with presence",
    "summary": "A photographed indoor stand with a large overhead identity, branded walls and product-presentation space.",
    "details": [
      "High fascia for hall visibility",
      "Technical brand graphics",
      "Multiple visitor approaches"
    ],
    "sourcePage": 11,
    "gallery": [
      "/images/portfolio/profile-p11-main.webp",
      "/images/portfolio/profile-p11-detail-top.webp",
      "/images/portfolio/profile-p11-detail-bottom.webp",
      "/images/portfolio/profile-p11-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 11. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "ctp-outdoor",
    "client": "CTP — Outdoor Exhibition",
    "category": "Exhibition Stands",
    "industry": "Industrial & Engineering",
    "image": "/images/portfolio/profile-p12-main.webp",
    "format": "Completed installation",
    "headline": "Scale for a larger showcase",
    "summary": "An outdoor exhibition pavilion documented with a canopy structure, entrance branding and visitor areas.",
    "details": [
      "Large pavilion structure",
      "Prominent exterior branding",
      "Covered engagement area"
    ],
    "sourcePage": 12,
    "gallery": [
      "/images/portfolio/profile-p12-main.webp",
      "/images/portfolio/profile-p12-detail-top.webp",
      "/images/portfolio/profile-p12-detail-bottom.webp",
      "/images/portfolio/profile-p12-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 12. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "dolphin-india",
    "client": "Dolphin India",
    "category": "Exhibition Stands",
    "industry": "Building Materials",
    "image": "/images/portfolio/profile-p13-main.webp",
    "format": "Completed installation",
    "headline": "Built for aisle-side attention",
    "summary": "A green-and-white exhibition display captured during a busy trade-show day.",
    "details": [
      "Tall branded elevations",
      "Open corner circulation",
      "Integrated product storytelling"
    ],
    "sourcePage": 13,
    "gallery": [
      "/images/portfolio/profile-p13-main.webp",
      "/images/portfolio/profile-p13-detail-top.webp",
      "/images/portfolio/profile-p13-detail-bottom.webp",
      "/images/portfolio/profile-p13-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 13. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "conference-production",
    "client": "Conference & Stage Production",
    "category": "Events",
    "industry": "Corporate Events",
    "image": "/images/portfolio/profile-p14-main.webp",
    "format": "Event installation",
    "headline": "An event environment designed for an audience",
    "summary": "Profile photographs show a large auditorium stage, AV screens, a conference room and a branded event display.",
    "details": [
      "Stage environment",
      "On-site screen presentation",
      "Event and conference settings"
    ],
    "sourcePage": 14,
    "gallery": [
      "/images/portfolio/profile-p14-main.webp",
      "/images/portfolio/profile-p14-detail-top.webp",
      "/images/portfolio/profile-p14-detail-bottom.webp",
      "/images/portfolio/profile-p14-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 14. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "event-installations",
    "client": "Decorative & Cultural Events",
    "category": "Events",
    "industry": "Corporate Events",
    "image": "/images/portfolio/profile-p15-main.webp",
    "format": "Event installation",
    "headline": "Moments beyond the exhibition aisle",
    "summary": "Images document a decorative atrium installation and a live stage-based event.",
    "details": [
      "Public-space feature installation",
      "Decorative structures and illumination",
      "Branded stage experience"
    ],
    "sourcePage": 15,
    "gallery": [
      "/images/portfolio/profile-p15-main.webp",
      "/images/portfolio/profile-p15-detail-top.webp",
      "/images/portfolio/profile-p15-detail-bottom.webp",
      "/images/portfolio/profile-p15-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 15. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "hesa",
    "client": "HESA Shuttering Plywood",
    "category": "Exhibition Stands",
    "industry": "Building Materials",
    "image": "/images/portfolio/profile-p16-main.webp",
    "format": "Mixed documentation",
    "headline": "A bold red-and-white visual identity",
    "summary": "The profile pairs a booth visualization with construction-stage photographs for HESA.",
    "details": [
      "Strong overhead identity",
      "High-contrast material graphics",
      "Build-stage documentation"
    ],
    "sourcePage": 16,
    "gallery": [
      "/images/portfolio/profile-p16-main.webp",
      "/images/portfolio/profile-p16-detail-top.webp",
      "/images/portfolio/profile-p16-detail-bottom.webp",
      "/images/portfolio/profile-p16-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 16. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "jetage",
    "client": "JET AGE",
    "category": "Exhibition Stands",
    "industry": "Automotive & Equipment",
    "image": "/images/portfolio/profile-p17-main.webp",
    "format": "Completed installation",
    "headline": "A working equipment showcase",
    "summary": "Photographed exhibition environment featuring automotive equipment and demonstration products.",
    "details": [
      "Tall product display units",
      "Illuminated brand names",
      "Open aisle-level presentation"
    ],
    "sourcePage": 17,
    "gallery": [
      "/images/portfolio/profile-p17-main.webp",
      "/images/portfolio/profile-p17-detail-top.webp",
      "/images/portfolio/profile-p17-detail-bottom.webp",
      "/images/portfolio/profile-p17-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 17. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "industrial-pavilion-concept",
    "client": "Industrial Pavilion — Large Format",
    "category": "3D Concepts",
    "industry": "Industrial & Engineering",
    "image": "/images/portfolio/profile-p18-main.webp",
    "format": "Design concept",
    "headline": "A large multi-zone stand concept",
    "summary": "A 3D proposal combining several brand-marked structures, counters and vertical exhibition displays.",
    "details": [
      "Large open product zones",
      "Integrated video/display walls",
      "Architectural visual hierarchy"
    ],
    "sourcePage": 18,
    "gallery": [
      "/images/portfolio/profile-p18-main.webp",
      "/images/portfolio/profile-p18-detail-top.webp",
      "/images/portfolio/profile-p18-detail-bottom.webp",
      "/images/portfolio/profile-p18-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 18. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "northern-ply-concept",
    "client": "Plywood Brand Pavilion",
    "category": "3D Concepts",
    "industry": "Building Materials",
    "image": "/images/portfolio/profile-p19-main.webp",
    "format": "Design concept",
    "headline": "Material-inspired architecture",
    "summary": "Orange-and-white concept with a central meeting environment and elevated brand fascia.",
    "details": [
      "Wood-inspired framing",
      "Overhead branding",
      "Private discussion area"
    ],
    "sourcePage": 19,
    "gallery": [
      "/images/portfolio/profile-p19-main.webp",
      "/images/portfolio/profile-p19-detail-top.webp",
      "/images/portfolio/profile-p19-detail-bottom.webp",
      "/images/portfolio/profile-p19-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 19. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "chemical-products-concept",
    "client": "Chemical Product Display",
    "category": "3D Concepts",
    "industry": "Chemicals & Materials",
    "image": "/images/portfolio/profile-p20-main.webp",
    "format": "Design concept",
    "headline": "Product categories organized visually",
    "summary": "A split-zone concept with red, white and yellow product display walls and a compact visitor plan.",
    "details": [
      "Multiple product categories",
      "Color-coded messaging",
      "Meeting and display areas"
    ],
    "sourcePage": 20,
    "gallery": [
      "/images/portfolio/profile-p20-main.webp",
      "/images/portfolio/profile-p20-detail-top.webp",
      "/images/portfolio/profile-p20-detail-bottom.webp",
      "/images/portfolio/profile-p20-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 20. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "ssk",
    "client": "SSK Electrical",
    "category": "Exhibition Stands",
    "industry": "Electrical & Electronics",
    "image": "/images/portfolio/profile-p21-main.webp",
    "format": "Completed installation",
    "headline": "Electrical displays, unmistakable identity",
    "summary": "The profile documents a red-branded exhibition stall photographed in an active exhibition hall.",
    "details": [
      "High contrast fascia",
      "Illuminated branded counter",
      "Wall-mounted electrical products"
    ],
    "sourcePage": 21,
    "gallery": [
      "/images/portfolio/profile-p21-main.webp",
      "/images/portfolio/profile-p21-detail-top.webp",
      "/images/portfolio/profile-p21-detail-bottom.webp",
      "/images/portfolio/profile-p21-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 21. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "vibez",
    "client": "Vibez",
    "category": "Exhibition Stands",
    "industry": "Building Materials",
    "image": "/images/portfolio/profile-p22-main.webp",
    "format": "Mixed documentation",
    "headline": "An intimate interior exhibition environment",
    "summary": "The profile includes a 3D front-elevation rendering and photographs of an installed interior-style stand.",
    "details": [
      "Distinctive vertical-slat branding",
      "Interiors-inspired seating",
      "Detailed exhibit displays"
    ],
    "sourcePage": 22,
    "gallery": [
      "/images/portfolio/profile-p22-main.webp",
      "/images/portfolio/profile-p22-detail-top.webp",
      "/images/portfolio/profile-p22-detail-bottom.webp",
      "/images/portfolio/profile-p22-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 22. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "woodmac",
    "client": "WOODMAC",
    "category": "Exhibition Stands",
    "industry": "Building Materials",
    "image": "/images/portfolio/profile-p23-main.webp",
    "format": "Completed installation",
    "headline": "A brand-led showcase of materials",
    "summary": "A red-and-white trade-show stand photographed from different angles with meeting tables and product displays.",
    "details": [
      "Visible overhead brand signature",
      "Meeting and reception areas",
      "Visitor circulation around displays"
    ],
    "sourcePage": 23,
    "gallery": [
      "/images/portfolio/profile-p23-main.webp",
      "/images/portfolio/profile-p23-detail-top.webp",
      "/images/portfolio/profile-p23-detail-bottom.webp",
      "/images/portfolio/profile-p23-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 23. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "electrical-equipment-concept",
    "client": "Electrical Equipment Pavilion",
    "category": "3D Concepts",
    "industry": "Electrical & Electronics",
    "image": "/images/portfolio/profile-p24-main.webp",
    "format": "Design concept",
    "headline": "A spacious concept for technical displays",
    "summary": "A wide 3D concept with product walls, tall branded elements and open demo zones.",
    "details": [
      "Central visitor circulation",
      "High-level product branding",
      "Structured demo areas"
    ],
    "sourcePage": 24,
    "gallery": [
      "/images/portfolio/profile-p24-main.webp",
      "/images/portfolio/profile-p24-detail-top.webp",
      "/images/portfolio/profile-p24-detail-bottom.webp",
      "/images/portfolio/profile-p24-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 24. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "atpl-concept",
    "client": "ATPL Product Display",
    "category": "3D Concepts",
    "industry": "Food & Consumer",
    "image": "/images/portfolio/profile-p25-main.webp",
    "format": "Design concept",
    "headline": "Graphic-led compact booth",
    "summary": "An ATPL concept in red and white with illustrated product walls and greenery overhead.",
    "details": [
      "Compact footprint",
      "Eye-catching red detailing",
      "Integral product graphics"
    ],
    "sourcePage": 25,
    "gallery": [
      "/images/portfolio/profile-p25-main.webp",
      "/images/portfolio/profile-p25-detail-top.webp",
      "/images/portfolio/profile-p25-detail-bottom.webp",
      "/images/portfolio/profile-p25-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 25. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "sgn-exports-concept",
    "client": "SGN Exports",
    "category": "3D Concepts",
    "industry": "Food & Consumer",
    "image": "/images/portfolio/profile-p26-main.webp",
    "format": "Design concept",
    "headline": "A green entrance feature for brand discovery",
    "summary": "Compact visualized stand with planted arch styling and a reception-led interior.",
    "details": [
      "Organic green portal",
      "Center reception counter",
      "Product niche presentation"
    ],
    "sourcePage": 26,
    "gallery": [
      "/images/portfolio/profile-p26-main.webp",
      "/images/portfolio/profile-p26-detail-top.webp",
      "/images/portfolio/profile-p26-detail-bottom.webp",
      "/images/portfolio/profile-p26-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 26. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "durbi",
    "client": "Durbi Plywood",
    "category": "3D Concepts",
    "industry": "Building Materials",
    "image": "/images/portfolio/profile-p27-main.webp",
    "format": "Design concept",
    "headline": "Wood finishes define the space",
    "summary": "A modular-feeling architecture with wood-effect panels, corner showcases and overhead brand treatment.",
    "details": [
      "Timber-textured fascia",
      "Display materials integrated into walls",
      "Open hospitality arrangements"
    ],
    "sourcePage": 27,
    "gallery": [
      "/images/portfolio/profile-p27-main.webp",
      "/images/portfolio/profile-p27-detail-top.webp",
      "/images/portfolio/profile-p27-detail-bottom.webp",
      "/images/portfolio/profile-p27-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 27. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "exlome-concept",
    "client": "Exlome",
    "category": "3D Concepts",
    "industry": "Building Materials",
    "image": "/images/portfolio/profile-p28-main.webp",
    "format": "Design concept",
    "headline": "Architectural product discovery",
    "summary": "Contemporary black, grey and white concept with multiple product display walls.",
    "details": [
      "Lattice-like vertical framework",
      "Product-led partition walls",
      "Corner-facing brand visibility"
    ],
    "sourcePage": 28,
    "gallery": [
      "/images/portfolio/profile-p28-main.webp",
      "/images/portfolio/profile-p28-detail-top.webp",
      "/images/portfolio/profile-p28-detail-bottom.webp",
      "/images/portfolio/profile-p28-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 28. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "nyra-concept",
    "client": "NYRA Germany",
    "category": "3D Concepts",
    "industry": "Building Materials",
    "image": "/images/portfolio/profile-p29-main.webp",
    "format": "Design concept",
    "headline": "A multi-angle branded pavilion",
    "summary": "3D views show a large exhibition footprint with overhead timber strips and open meeting zones.",
    "details": [
      "High-visibility brand fascia",
      "Wood-panel overhead detailing",
      "Clear product presentation"
    ],
    "sourcePage": 29,
    "gallery": [
      "/images/portfolio/profile-p29-main.webp",
      "/images/portfolio/profile-p29-detail-top.webp",
      "/images/portfolio/profile-p29-detail-bottom.webp",
      "/images/portfolio/profile-p29-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 29. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "sealand-concept",
    "client": "Sealand / Sealant Concept",
    "category": "3D Concepts",
    "industry": "Building Materials",
    "image": "/images/portfolio/profile-p30-main.webp",
    "format": "Design concept",
    "headline": "Bright, accessible material displays",
    "summary": "White 3D proposal with broad overhead signage, light blue accents and internal displays.",
    "details": [
      "Minimal architectural framing",
      "Clean visitor sight lines",
      "Integrated presentation screen"
    ],
    "sourcePage": 30,
    "gallery": [
      "/images/portfolio/profile-p30-main.webp",
      "/images/portfolio/profile-p30-detail-top.webp",
      "/images/portfolio/profile-p30-detail-bottom.webp",
      "/images/portfolio/profile-p30-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 30. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "dix-concept",
    "client": "DIX Brand Pavilion",
    "category": "3D Concepts",
    "industry": "Building Materials",
    "image": "/images/portfolio/profile-p31-main.webp",
    "format": "Design concept",
    "headline": "A vivid red and charcoal signature",
    "summary": "Angular concept with contrasting black, red and white signage, plus a spacious meeting layout.",
    "details": [
      "Bold corner identity",
      "Open-plan visitor area",
      "Tall product display panels"
    ],
    "sourcePage": 31,
    "gallery": [
      "/images/portfolio/profile-p31-main.webp",
      "/images/portfolio/profile-p31-detail-top.webp",
      "/images/portfolio/profile-p31-detail-bottom.webp",
      "/images/portfolio/profile-p31-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 31. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "fillpack-concept",
    "client": "Fillpack Technology",
    "category": "3D Concepts",
    "industry": "Industrial & Engineering",
    "image": "/images/portfolio/profile-p32-main.webp",
    "format": "Design concept",
    "headline": "Green technology frontage",
    "summary": "Long exhibition concept with green-accented display modules and information walls.",
    "details": [
      "Technical product storytelling",
      "Integrated exhibition screens",
      "Continuous branded pavilion"
    ],
    "sourcePage": 32,
    "gallery": [
      "/images/portfolio/profile-p32-main.webp",
      "/images/portfolio/profile-p32-detail-top.webp",
      "/images/portfolio/profile-p32-detail-bottom.webp",
      "/images/portfolio/profile-p32-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 32. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "helious-concept",
    "client": "Helious Specialty Gases",
    "category": "3D Concepts",
    "industry": "Chemicals & Materials",
    "image": "/images/portfolio/profile-p33-main.webp",
    "format": "Design concept",
    "headline": "Product display for specialist industry",
    "summary": "White and red pavilion concept featuring a large centerpiece screen and product cylinder displays.",
    "details": [
      "Space for physical products",
      "High-mounted company identity",
      "Central digital storytelling"
    ],
    "sourcePage": 33,
    "gallery": [
      "/images/portfolio/profile-p33-main.webp",
      "/images/portfolio/profile-p33-detail-top.webp",
      "/images/portfolio/profile-p33-detail-bottom.webp",
      "/images/portfolio/profile-p33-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 33. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "jcb",
    "client": "JCB Air Tech",
    "category": "3D Concepts",
    "industry": "Industrial & Engineering",
    "image": "/images/portfolio/profile-p34-main.webp",
    "format": "Design concept",
    "headline": "Strong industrial brand expression",
    "summary": "Black-and-yellow concept with vertical product display elements and signature color blocking.",
    "details": [
      "Iconic brand palette",
      "Industrial product elevations",
      "High-ceiling signage"
    ],
    "sourcePage": 34,
    "gallery": [
      "/images/portfolio/profile-p34-main.webp",
      "/images/portfolio/profile-p34-detail-top.webp",
      "/images/portfolio/profile-p34-detail-bottom.webp",
      "/images/portfolio/profile-p34-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 34. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "kesaria-concept",
    "client": "Kesaria",
    "category": "3D Concepts",
    "industry": "Chemicals & Materials",
    "image": "/images/portfolio/profile-p35-main.webp",
    "format": "Design concept",
    "headline": "A distinctive branded material showcase",
    "summary": "Mixed wood and graphite concept with bold graphic walls and digital presentation elements.",
    "details": [
      "Material-rich design language",
      "Standing display and consultation",
      "Branded feature wall"
    ],
    "sourcePage": 35,
    "gallery": [
      "/images/portfolio/profile-p35-main.webp",
      "/images/portfolio/profile-p35-detail-top.webp",
      "/images/portfolio/profile-p35-detail-bottom.webp",
      "/images/portfolio/profile-p35-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 35. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "kumar-enterprises-concept",
    "client": "Kumar Enterprises",
    "category": "3D Concepts",
    "industry": "Home & Lifestyle",
    "image": "/images/portfolio/profile-p36-main.webp",
    "format": "Design concept",
    "headline": "Letting the products become the display",
    "summary": "A restrained concept with display carpets and textiles as the primary architectural feature.",
    "details": [
      "Full-height material display",
      "Minimal reception counter",
      "Open product-focused frontage"
    ],
    "sourcePage": 36,
    "gallery": [
      "/images/portfolio/profile-p36-main.webp",
      "/images/portfolio/profile-p36-detail-top.webp",
      "/images/portfolio/profile-p36-detail-bottom.webp",
      "/images/portfolio/profile-p36-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 36. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "netzsch",
    "client": "NETZSCH",
    "category": "3D Concepts",
    "industry": "Industrial & Engineering",
    "image": "/images/portfolio/profile-p37-main.webp",
    "format": "Design concept",
    "headline": "Industrial engineering meets clear design",
    "summary": "White-and-teal 3D stand combining technical displays and corner-facing branded fascia.",
    "details": [
      "White and teal brand palette",
      "Open meeting and product areas",
      "Technical visualization surfaces"
    ],
    "sourcePage": 37,
    "gallery": [
      "/images/portfolio/profile-p37-main.webp",
      "/images/portfolio/profile-p37-detail-top.webp",
      "/images/portfolio/profile-p37-detail-bottom.webp",
      "/images/portfolio/profile-p37-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 37. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "parcomm-concept",
    "client": "Parcomm",
    "category": "3D Concepts",
    "industry": "Technology & Electronics",
    "image": "/images/portfolio/profile-p38-main.webp",
    "format": "Design concept",
    "headline": "An organized technology pavilion",
    "summary": "Orange, grey and white 3D concept with modular display panels and consultation areas.",
    "details": [
      "Open frame facade",
      "Technical wall illustrations",
      "Product meeting stations"
    ],
    "sourcePage": 38,
    "gallery": [
      "/images/portfolio/profile-p38-main.webp",
      "/images/portfolio/profile-p38-detail-top.webp",
      "/images/portfolio/profile-p38-detail-bottom.webp",
      "/images/portfolio/profile-p38-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 38. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "durga-confectioners-concept",
    "client": "Durga Confectioners",
    "category": "3D Concepts",
    "industry": "Food & Consumer",
    "image": "/images/portfolio/profile-p39-main.webp",
    "format": "Design concept",
    "headline": "An inviting consumer-brand showcase",
    "summary": "Warm wood and red 3D design with packaged food graphics and counters along an open frontage.",
    "details": [
      "Product-brand display walls",
      "Open customer-facing counters",
      "Warm hospitality lighting"
    ],
    "sourcePage": 39,
    "gallery": [
      "/images/portfolio/profile-p39-main.webp",
      "/images/portfolio/profile-p39-detail-top.webp",
      "/images/portfolio/profile-p39-detail-bottom.webp",
      "/images/portfolio/profile-p39-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 39. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "industrial-brand-concept",
    "client": "Industrial Showcase — Orange & White",
    "category": "3D Concepts",
    "industry": "Industrial & Engineering",
    "image": "/images/portfolio/profile-p40-main.webp",
    "format": "Design concept",
    "headline": "A bright large-format pavilion",
    "summary": "The profile illustrates a wide white-and-orange 3D pavilion with product displays and an enclosed discussion section.",
    "details": [
      "Architectural fascia",
      "Transparent perimeter panels",
      "Separated meeting zone"
    ],
    "sourcePage": 40,
    "gallery": [
      "/images/portfolio/profile-p40-main.webp",
      "/images/portfolio/profile-p40-detail-top.webp",
      "/images/portfolio/profile-p40-detail-bottom.webp",
      "/images/portfolio/profile-p40-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 40. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "interior-booth-concept",
    "client": "Interior & Decor Pavilion",
    "category": "3D Concepts",
    "industry": "Home & Lifestyle",
    "image": "/images/portfolio/profile-p41-main.webp",
    "format": "Design concept",
    "headline": "A quieter interior exhibition setting",
    "summary": "Grey-and-white visualized stand with a seating configuration and framed interior display elements.",
    "details": [
      "Soft monochrome styling",
      "Central hospitality seating",
      "Lighted interior display walls"
    ],
    "sourcePage": 41,
    "gallery": [
      "/images/portfolio/profile-p41-main.webp",
      "/images/portfolio/profile-p41-detail-top.webp",
      "/images/portfolio/profile-p41-detail-bottom.webp",
      "/images/portfolio/profile-p41-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 41. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "preserve-machines-concept",
    "client": "Preserve Machines",
    "category": "3D Concepts",
    "industry": "Industrial & Engineering",
    "image": "/images/portfolio/profile-p42-main.webp",
    "format": "Design concept",
    "headline": "Machine-forward exhibition architecture",
    "summary": "A pale blue and white concept with a large perimeter structure and exhibition machinery.",
    "details": [
      "Product-forward visual access",
      "Glass-like cyan dividers",
      "Overhead brand sign"
    ],
    "sourcePage": 42,
    "gallery": [
      "/images/portfolio/profile-p42-main.webp",
      "/images/portfolio/profile-p42-detail-top.webp",
      "/images/portfolio/profile-p42-detail-bottom.webp",
      "/images/portfolio/profile-p42-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 42. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "product-finishes-concept",
    "client": "Product Finishes Showcase",
    "category": "3D Concepts",
    "industry": "Building Materials",
    "image": "/images/portfolio/profile-p43-main.webp",
    "format": "Design concept",
    "headline": "Color and finishes on display",
    "summary": "Concept with color sample panels, graphic product panels and a demonstration-focused floor plan.",
    "details": [
      "Visible sample displays",
      "Red and white structural accents",
      "Corner visitor flow"
    ],
    "sourcePage": 43,
    "gallery": [
      "/images/portfolio/profile-p43-main.webp",
      "/images/portfolio/profile-p43-detail-top.webp",
      "/images/portfolio/profile-p43-detail-bottom.webp",
      "/images/portfolio/profile-p43-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 43. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "sharda-jq-laser-concept",
    "client": "Sharda Engineers / JQ Laser",
    "category": "3D Concepts",
    "industry": "Industrial & Engineering",
    "image": "/images/portfolio/profile-p44-main.webp",
    "format": "Design concept",
    "headline": "Precision engineering as an exhibit",
    "summary": "Linear industrial booth visualization with clear frontage, prominent dual branding and machinery space.",
    "details": [
      "Machine display environment",
      "Combined brand identity",
      "Transparent visitor-facing glazing"
    ],
    "sourcePage": 44,
    "gallery": [
      "/images/portfolio/profile-p44-main.webp",
      "/images/portfolio/profile-p44-detail-top.webp",
      "/images/portfolio/profile-p44-detail-bottom.webp",
      "/images/portfolio/profile-p44-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 44. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "shreekrishna",
    "client": "Shreekrishna Industries",
    "category": "3D Concepts",
    "industry": "Industrial & Engineering",
    "image": "/images/portfolio/profile-p45-main.webp",
    "format": "Design concept",
    "headline": "Blue-and-white industrial pavilion",
    "summary": "A compact 3D trade-show design with clear overhead branding and display niches.",
    "details": [
      "Blue-accented structural frame",
      "Enclosed meeting corner",
      "Product-centric displays"
    ],
    "sourcePage": 45,
    "gallery": [
      "/images/portfolio/profile-p45-main.webp",
      "/images/portfolio/profile-p45-detail-top.webp",
      "/images/portfolio/profile-p45-detail-bottom.webp",
      "/images/portfolio/profile-p45-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 45. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "vcs",
    "client": "VCS India",
    "category": "3D Concepts",
    "industry": "Healthcare & Specialist",
    "image": "/images/portfolio/profile-p46-main.webp",
    "format": "Design concept",
    "headline": "Clean technical presentation",
    "summary": "White-and-blue trade-show booth visualization with product displays and branded walls.",
    "details": [
      "Clear health-product messaging",
      "Compact reception counter",
      "Exhibition-facing corner access"
    ],
    "sourcePage": 46,
    "gallery": [
      "/images/portfolio/profile-p46-main.webp",
      "/images/portfolio/profile-p46-detail-top.webp",
      "/images/portfolio/profile-p46-detail-bottom.webp",
      "/images/portfolio/profile-p46-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 46. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  },
  {
    "slug": "vega-plastic-concept",
    "client": "Vega Plastic",
    "category": "3D Concepts",
    "industry": "Building Materials",
    "image": "/images/portfolio/profile-p47-main.webp",
    "format": "Design concept",
    "headline": "A warm branded compact booth",
    "summary": "Small timber-toned 3D concept with product wall displays and a distinctive overhead nameplate.",
    "details": [
      "Tall product catalog displays",
      "Timber-effect brand frame",
      "Focused visitor engagement area"
    ],
    "sourcePage": 47,
    "gallery": [
      "/images/portfolio/profile-p47-main.webp",
      "/images/portfolio/profile-p47-detail-top.webp",
      "/images/portfolio/profile-p47-detail-bottom.webp",
      "/images/portfolio/profile-p47-spread.webp"
    ],
    "sourceNote": "Documented in Adya Expo Designs company profile, page 47. Visual descriptions are based on the images; dates, venue names, footprint and outcomes were not supplied."
  }
];

export const services: Service[] = [
  {
    "slug": "custom-exhibition-stands",
    "number": "01",
    "title": "Custom exhibition stands",
    "short": "Architecture that turns your brand into a destination.",
    "description": "Bespoke exhibition environments tailored to your product story, visitor journey, space and brand presence.",
    "highlights": [
      "Brand discovery and initial brief",
      "Spatial concept and 3D visualization",
      "Layout planning and display integration"
    ],
    "inclusions": [
      "Brand discovery and initial brief",
      "Spatial concept and 3D visualization",
      "Layout planning and display integration",
      "Structural design and material selection",
      "Production and site installation",
      "Event close-out and agreed dismantling"
    ],
    "idealFor": [
      "Consumer-facing product launches",
      "High-visibility corporate exhibitions",
      "Distinctive brand-led architecture"
    ],
    "deliverySteps": [
      "Brand discovery",
      "Concept and 3D presentation",
      "Technical planning",
      "In-house production coordination",
      "Install, inspect and hand over"
    ],
    "relatedSlugs": [
      "woodmac",
      "aquatech",
      "ctp-indoor"
    ],
    "image": "/images/portfolio/profile-p23-main.webp",
    "sourceNote": "The supplied profile explicitly describes custom-made exhibition stand design and construction on pages 3 and 5.",
    "icon": "panels"
  },
  {
    "slug": "modular-exhibition-stands",
    "number": "02",
    "title": "Modular exhibition stands",
    "short": "Flexible formats, designed to make repeat exhibiting easier.",
    "description": "Reusable display structures and flexible stand configurations for brands participating in multiple events.",
    "highlights": [
      "Adaptable stand planning",
      "Reconfigurable structural systems",
      "Reusable branded elements where feasible"
    ],
    "inclusions": [
      "Adaptable stand planning",
      "Reconfigurable structural systems",
      "Reusable branded elements where feasible",
      "Graphics and display integration",
      "Storage and logistics planning",
      "Assembly and dismantling coordination"
    ],
    "idealFor": [
      "Repeat trade-show participation",
      "Evolving booth sizes",
      "Brands wanting visual consistency"
    ],
    "deliverySteps": [
      "Exhibition calendar and requirements",
      "Select reusable components",
      "Brand and graphic customization",
      "Install for chosen footprint",
      "Dismantle and plan suitable reuse"
    ],
    "relatedSlugs": [
      "durbi",
      "netzsch",
      "exlome-concept"
    ],
    "image": "/images/portfolio/profile-p27-main.webp",
    "sourceNote": "The profile highlights flexibility, reusable structures and cost-conscious exhibition planning on page 6.",
    "icon": "grid"
  },
  {
    "slug": "shell-scheme-stalls",
    "number": "03",
    "title": "Shell-scheme stall customization",
    "short": "Get more impact from a standard exhibition footprint.",
    "description": "Brand identity and functional presentation for shell-scheme booths supplied or allocated by organizers.",
    "highlights": [
      "Shell-scheme brand graphics",
      "Fascia signage and wall treatments",
      "Custom product display fixtures"
    ],
    "inclusions": [
      "Shell-scheme brand graphics",
      "Fascia signage and wall treatments",
      "Custom product display fixtures",
      "Lighting and simple AV integration",
      "Reception counters and furniture",
      "Coordination with organizer rules"
    ],
    "idealFor": [
      "Small and medium exhibition footprints",
      "First-time exhibitors",
      "Standard allocated shell schemes"
    ],
    "deliverySteps": [
      "Confirm organizer specifications",
      "Map products and brand visuals",
      "Prepare graphic and fixture plan",
      "Produce allowed additions",
      "Install and inspect"
    ],
    "relatedSlugs": [
      "vcs",
      "vibez",
      "atpl-concept"
    ],
    "image": "/images/portfolio/profile-p46-main.webp",
    "sourceNote": "Shell-scheme exhibitions are listed among the company’s stand solutions on page 4.",
    "icon": "panels"
  },
  {
    "slug": "in-house-fabrication",
    "number": "04",
    "title": "In-house fabrication & manufacturing",
    "short": "From approved concept to physical components.",
    "description": "Manufacturing-led fabrication with in-house workforce, machinery, warehouse and materials, as confirmed by Adya.",
    "highlights": [
      "Production coordination",
      "Wood and metalworking as required",
      "Brand display and structural elements"
    ],
    "inclusions": [
      "Production coordination",
      "Wood and metalworking as required",
      "Brand display and structural elements",
      "Surface finishing and fit-out",
      "Workshop checks and preparation",
      "Pack-out for installation"
    ],
    "idealFor": [
      "Brands needing one accountable provider",
      "Agencies seeking fabrication partners",
      "Complex build and fit-out requirements"
    ],
    "deliverySteps": [
      "Review the approved drawings",
      "Material and production planning",
      "Workshop fabrication",
      "Finishing and inspection",
      "Prepare for transport and build"
    ],
    "relatedSlugs": [
      "hesa",
      "industrial-pavilion-concept",
      "ctp-outdoor"
    ],
    "image": "/images/portfolio/profile-p16-main.webp",
    "sourceNote": "The PDF describes stand building on page 3. In-house machinery, workforce and warehouse are company-supplied operational details.",
    "icon": "factory"
  },
  {
    "slug": "project-management",
    "number": "05",
    "title": "Exhibition project management",
    "short": "Fewer moving parts for your team.",
    "description": "Connected coordination across design, production, event venue requirements, logistics and project handover.",
    "highlights": [
      "Briefing and project scope",
      "Production timeline coordination",
      "Artwork and drawing reviews"
    ],
    "inclusions": [
      "Briefing and project scope",
      "Production timeline coordination",
      "Artwork and drawing reviews",
      "Organizer and venue requirement checks",
      "Transport and build sequencing",
      "Handover and close-out coordination"
    ],
    "idealFor": [
      "Multi-city exhibitors",
      "Marketing teams with limited internal capacity",
      "Time-bound trade-show projects"
    ],
    "deliverySteps": [
      "Project kickoff",
      "Approvals and risk planning",
      "Vendor and internal coordination",
      "On-site readiness review",
      "Handover and close-out"
    ],
    "relatedSlugs": [
      "woodmac",
      "jetage",
      "ctp-outdoor"
    ],
    "image": "/images/portfolio/profile-p17-main.webp",
    "sourceNote": "The company profile positions project management as a core offer on pages 2–3.",
    "icon": "clipboard"
  },
  {
    "slug": "branding-graphics",
    "number": "06",
    "title": "Print, branding & graphics",
    "short": "Be unmistakably you across every surface.",
    "description": "Large-format brand graphics and printed materials to unify exhibition architecture and product messaging.",
    "highlights": [
      "Large-format printed wall graphics",
      "Fascia logos and identity",
      "Wayfinding and labels"
    ],
    "inclusions": [
      "Large-format printed wall graphics",
      "Fascia logos and identity",
      "Wayfinding and labels",
      "Product catalogues and leaflets",
      "Display panels and print finishes",
      "Artwork preparation and coordination"
    ],
    "idealFor": [
      "Rebranding an existing booth",
      "Launching a new product line",
      "Product-rich retail presentations"
    ],
    "deliverySteps": [
      "Review artwork assets",
      "Plan audience sight lines",
      "Prepare and check proofs",
      "Produce approved graphics",
      "Install and inspect"
    ],
    "relatedSlugs": [
      "jetage",
      "ssk",
      "parcomm-concept"
    ],
    "image": "/images/portfolio/profile-p21-main.webp",
    "sourceNote": "The additional services list on page 4 explicitly mentions print and design, catalogues, visiting cards and leaflets.",
    "icon": "sparkles"
  },
  {
    "slug": "merchandising-gifting",
    "number": "07",
    "title": "Merchandising & gifting",
    "short": "Give visitors something to remember.",
    "description": "Event-oriented gifts and merchandise supporting brand recall, packaged around each exhibition brief.",
    "highlights": [
      "Corporate giveaway planning",
      "Gift product selection",
      "Custom-branded packaging"
    ],
    "inclusions": [
      "Corporate giveaway planning",
      "Gift product selection",
      "Custom-branded packaging",
      "Visitor and business partner gifts",
      "Merchandise presentation",
      "Fulfilment coordination"
    ],
    "idealFor": [
      "Brand activations",
      "Visitor engagement",
      "Distributor and partner events"
    ],
    "deliverySteps": [
      "Set audience and purpose",
      "Choose merchandise format",
      "Approve designs and quantities",
      "Produce and pack",
      "Distribute at the event"
    ],
    "relatedSlugs": [
      "durga-confectioners-concept",
      "atpl-concept",
      "event-installations"
    ],
    "image": "/images/portfolio/profile-p39-main.webp",
    "sourceNote": "Merchandising and gifting is expressly listed on page 4 of the company profile.",
    "icon": "package"
  },
  {
    "slug": "corporate-events",
    "number": "08",
    "title": "Corporate events & experiences",
    "short": "Beyond stalls: environments for memorable events.",
    "description": "Event stages, conference settings and decorative installations informed by the profile’s event photography.",
    "highlights": [
      "Stage and event environment planning",
      "Stage backdrops and display branding",
      "Temporary decorative installations"
    ],
    "inclusions": [
      "Stage and event environment planning",
      "Stage backdrops and display branding",
      "Temporary decorative installations",
      "Event zone and attendee flow concepts",
      "Event AV/lighting coordination",
      "On-ground setup collaboration"
    ],
    "idealFor": [
      "Business conferences",
      "Brand experiences",
      "Venue activations and celebrations"
    ],
    "deliverySteps": [
      "Understand event format",
      "Propose layout and experience",
      "Develop design and production plan",
      "Execute and test setup",
      "On-event support and wrap-up"
    ],
    "relatedSlugs": [
      "conference-production",
      "event-installations"
    ],
    "image": "/images/portfolio/profile-p14-main.webp",
    "sourceNote": "Profile pages 14–15 contain photography of event stages, conference and decorative installations.",
    "icon": "calendar"
  },
  {
    "slug": "installation-support",
    "number": "09",
    "title": "On-site installation & support",
    "short": "Precision matters when the doors open.",
    "description": "Build-day coordination, assembly, finishing, site checks and planned dismantling for exhibition environments.",
    "highlights": [
      "Transport arrival coordination",
      "Site assembly and finishing",
      "Graphic positioning and checks"
    ],
    "inclusions": [
      "Transport arrival coordination",
      "Site assembly and finishing",
      "Graphic positioning and checks",
      "Venue and access coordination",
      "Handover inspections",
      "Dismantling and asset handling"
    ],
    "idealFor": [
      "Tight venue schedules",
      "Multi-city projects",
      "Partner agency production support"
    ],
    "deliverySteps": [
      "Plan venue access",
      "Prepare labelled components",
      "Build and finish on site",
      "Quality and safety checks",
      "Handover then dismantle"
    ],
    "relatedSlugs": [
      "hesa",
      "ctp-indoor",
      "aquatech"
    ],
    "image": "/images/portfolio/profile-p11-main.webp",
    "sourceNote": "The original profile describes design, project management and stand construction as an integrated process on pages 2–3.",
    "icon": "factory"
  }
];

export const sectors = [
  {name:'Industrial & Engineering',detail:'Pumps, machinery, specialty equipment and technology installations.',icon:'factory'},
  {name:'Building Materials',detail:'Plywood, laminates, interior finishes and construction-product display.',icon:'building'},
  {name:'Automotive & Equipment',detail:'Tools, accessories and industrial automotive presentation.',icon:'truck'},
  {name:'Electrical & Electronics',detail:'Electrical fittings and technical product exhibitions.',icon:'zap'},
  {name:'Food & Consumer',detail:'Packaged goods, confectionery and consumer brand concepts.',icon:'package'},
  {name:'Healthcare & Specialist',detail:'Healthcare and specialist industrial product environments.',icon:'heart'},
  {name:'Chemicals & Materials',detail:'Specialty gases, chemicals and finishes-focused concepts.',icon:'factory'},
  {name:'Home & Lifestyle',detail:'Carpets, textiles, interiors and product-led spatial design.',icon:'building'},
  {name:'Technology & Electronics',detail:'Digital displays and technical systems presentation.',icon:'zap'},
  {name:'Corporate Events',detail:'Conference stages, public installations and branded event environments.',icon:'calendar'},
];

export const steps = [
  {n:'01',name:'Discover',detail:'Understand your brand, booth brief, event and goals.'},
  {n:'02',name:'Design',detail:'Explore a spatial concept with presentation and approvals.'},
  {n:'03',name:'Produce',detail:'Fabricate components using our in-house capabilities.'},
  {n:'04',name:'Deliver',detail:'Coordinate logistics, install on site and hand over.'},
  {n:'05',name:'Support',detail:'Plan event support, dismantling and suitable reuse.'},
];

export const faqs = [
  {q:'Do you execute projects outside Delhi and Bengaluru?',a:'Yes. Adya states that it serves clients pan-India, with operations based in Delhi and Bengaluru. Project logistics and feasibility are confirmed for each venue.'},
  {q:'Do you design and manufacture exhibition stalls in-house?',a:'Adya has its own manufacturing resources, machinery, warehouse, components and workforce, allowing integrated design-to-build execution.'},
  {q:'Can you work with an agency under its own brand?',a:'Yes, discuss white-label fabrication or execution arrangements with Adya. Scope, confidentiality and client ownership should be agreed before any project.'},
  {q:'Do you offer both custom and modular stands?',a:'Yes. The company profile covers bespoke exhibition stands and flexible modular solutions.'},
  {q:'What do you need to prepare a quotation?',a:'The exhibition name, city and venue, show dates, stall size, layout, products, preferred design style and approximate budget are helpful starting points.'},
  {q:'Can your team manage installation and dismantling?',a:'Adya offers end-to-end project execution. Confirm venue timings, access rules, deliverables and support requirements during project scoping.'},
  {q:'How early should we reach out?',a:'As soon as the event and approximate stall size are known. Larger custom installations generally need more time for design, approvals, production and venue coordination.'},
  {q:'Can previously manufactured stand components be reused?',a:'Potentially. Whether reuse is feasible depends on component condition, revised stall size, venue rules and the new creative brief.'},
];
