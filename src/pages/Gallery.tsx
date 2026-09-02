import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const IMAGES = [
  { src: 'https://cdn6.ep.dynamics.net/s3/rw-propertyimages/2801-H3125076-99702774__1721265853-49151-DSC07954.jpg?anchor=middlecenter&format=jpg&height=640&maxheight=2841&maxwidth=2841&mode=crop&quality=75&scale=down&width=640', cat: 'Fridges', title: 'Fridge & Freezer Repairs' },
  { src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA1NjQ4NjAxNTY1MTI4MTM4Mw%3D%3D/original/19aa75e9-4e44-4bc6-a422-16fbbd369aa4.jpeg?im_w=720', cat: 'Laundry', title: 'Washing Machine Repairs' },
  { src: 'https://cdn.shopify.com/s/files/1/0641/9388/8321/files/50097924_1046289.png?v=1776396808', cat: 'Cooking', title: 'Oven & Stove Repairs' },
  { src: 'https://cdn.cocinaintegral.net/cocinaintegral/2024/05/FAGOR-LAVAVAJILLAS.jpg', cat: 'Dishwashers', title: 'Dishwasher Repairs' },
  { src: 'https://www.viessmann.be/content/dam/public-brands/fr/tout-savoir/technologies-chauffage/pompes-chaleur-air-air/3-2-vitoclima-confort.jpg/_jcr_content/renditions/original./3-2-vitoclima-confort.jpg', cat: 'Air Conditioning', title: 'Air Conditioner Service' },
  { src: 'https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI1LTA0L3NyLWltYWdlLTA5MDQyMDI1LW1rbTA0LXMtMjI5XzEuanBn.jpg', cat: 'Microwaves', title: 'Microwave Repairs' },
  { src: 'https://object.pscloud.io/cms/cms/Uploads/mikr.png', cat: 'Microwaves', title: 'Kitchen Microwave Service' },
  { src: 'https://primary.jwwb.nl/public/h/i/m/temp-owlijzqjqgdpuzijwkjm/ds-head-01-high.png?crop=1.3333%3A1&enable=upscale&enable-io=true&width=800', cat: 'Air Conditioning', title: 'Residential Air Conditioner Service' },
];

const CATS = ['All', ...Array.from(new Set(IMAGES.map((i) => i.cat)))];

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView();
  return <div ref={ref} className={`${className} ${inView ? 'animate-scale-in' : 'opacity-0'}`}>{children}</div>;
}

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<typeof IMAGES[0] | null>(null);
  const filtered = filter === 'All' ? IMAGES : IMAGES.filter((i) => i.cat === filter);

  return (
    <div className="page-enter pt-24">
      <section className="relative py-20 bg-appliance-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(https://cdn6.ep.dynamics.net/s3/rw-propertyimages/2801-H3125076-99702774__1721265853-49151-DSC07954.jpg?anchor=middlecenter&format=jpg&height=640&maxheight=2841&maxwidth=2841&mode=crop&quality=75&scale=down&width=640)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="section-tag text-amber-400">Our Repair Categories</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Appliance Gallery</h1>
          <div className="gold-bar mx-auto" />
          <p className="text-appliance-300 max-w-xl mx-auto mt-4">A visual overview of the household and commercial appliances we service across Durban.</p>
        </div>
      </section>

      <section className="py-10 bg-white border-b border-appliance-100 sticky top-16 z-20">
        <div className="max-w-7xl mx-auto px-4"><div className="flex flex-wrap gap-2 justify-center">{CATS.map((cat) => <button key={cat} onClick={() => setFilter(cat)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${filter === cat ? 'bg-amber-500 text-white shadow-md' : 'bg-appliance-100 text-appliance-600 hover:bg-appliance-200'}`}>{cat}</button>)}</div></div>
      </section>

      <section className="py-16 bg-appliance-50">
        <div className="max-w-7xl mx-auto px-4"><div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">{filtered.map((item) => <Reveal key={`${item.src}-${item.title}`}><div className="gallery-item relative cursor-pointer rounded-2xl overflow-hidden shadow-sm group" onClick={() => setLightbox(item)}><img src={item.src} alt={item.title} className="w-full h-52 object-cover" loading="lazy"/><div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center"><ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"/></div><div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300"><p className="text-white text-xs font-semibold">{item.title}</p><span className="text-amber-300 text-[10px]">{item.cat}</span></div></div></Reveal>)}</div></div>
      </section>

      {lightbox && <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in" onClick={() => setLightbox(null)}><button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center" aria-label="Close"><X size={20}/></button><div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}><img src={lightbox.src} alt={lightbox.title} className="w-full max-h-[80vh] object-contain rounded-xl"/><div className="text-center mt-4"><p className="text-white font-semibold">{lightbox.title}</p><span className="text-amber-400 text-sm">{lightbox.cat}</span></div></div></div>}
    </div>
  );
}
