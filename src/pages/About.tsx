import { CheckCircle, Target, Eye, Heart } from 'lucide-react';
import { useInView } from '../hooks/useInView';

function Reveal({ children, className = '', delay = '' }: { children: React.ReactNode; className?: string; delay?: string }) {
  const { ref, inView } = useInView();
  return <div ref={ref} className={`${className} ${inView ? `animate-fade-up ${delay}` : 'opacity-0'}`}>{children}</div>;
}

export default function About() {
  return (
    <div className="page-enter pt-24">
      <section className="relative py-20 bg-appliance-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(https://cdn6.ep.dynamics.net/s3/rw-propertyimages/2801-H3125076-99702774__1721265853-49151-DSC07954.jpg?anchor=middlecenter&format=jpg&height=640&maxheight=2841&maxwidth=2841&mode=crop&quality=75&scale=down&width=640)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="section-tag text-amber-400">Our Story</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">About Appliances Repair Solutions</h1>
          <div className="gold-bar mx-auto" />
          <p className="text-appliance-300 max-w-2xl mx-auto mt-4 leading-relaxed">Professional appliance repair support for homes and businesses across Durban and surrounding areas.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4"><div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <span className="section-tag">Who We Are</span>
            <h2 className="section-heading mb-4">Reliable Appliance Repair Support</h2>
            <div className="gold-bar" />
            <p className="text-appliance-500 leading-relaxed mt-4 mb-4">Appliances Repair Solutions focuses on diagnosing and repairing essential household and selected commercial appliances. We help clients across Durban with practical repair support for refrigeration, laundry, cooking, dishwashing, air-conditioning and other appliance faults.</p>
            <p className="text-appliance-500 leading-relaxed mb-4">Our approach is simple: understand the fault, inspect the appliance, explain the repair options and provide a clear next step before work proceeds.</p>
            <p className="text-appliance-500 leading-relaxed mb-6">Whether the problem is a fridge that is not cooling, a washing machine that will not spin, an oven that is not heating or a dishwasher that will not drain, our aim is to get your appliance working again as efficiently as possible.</p>
            <ul className="space-y-3">{['On-site appliance diagnosis','Repairs for major household appliances','Residential and commercial support','Durban and surrounding service areas'].map((item) => <li key={item} className="flex items-center gap-3 text-appliance-700 text-sm"><CheckCircle size={16} className="text-amber-500 shrink-0" />{item}</li>)}</ul>
          </Reveal>

          <Reveal><div className="grid grid-cols-2 gap-4">
            <img src="https://cdn.shopify.com/s/files/1/0641/9388/8321/files/50097924_1046289.png?v=1776396808" alt="Oven and stove" className="w-full h-52 object-cover rounded-2xl shadow-lg" loading="lazy" />
            <img src="https://cdn.cocinaintegral.net/cocinaintegral/2024/05/FAGOR-LAVAVAJILLAS.jpg" alt="Dishwasher" className="w-full h-52 object-cover rounded-2xl shadow-lg mt-6" loading="lazy" />
            <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA1NjQ4NjAxNTY1MTI4MTM4Mw%3D%3D/original/19aa75e9-4e44-4bc6-a422-16fbbd369aa4.jpeg?im_w=720" alt="Washing machine" className="w-full h-52 object-cover rounded-2xl shadow-lg -mt-6" loading="lazy" />
            <img src="https://www.viessmann.be/content/dam/public-brands/fr/tout-savoir/technologies-chauffage/pompes-chaleur-air-air/3-2-vitoclima-confort.jpg/_jcr_content/renditions/original./3-2-vitoclima-confort.jpg" alt="Air conditioner" className="w-full h-52 object-cover rounded-2xl shadow-lg" loading="lazy" />
          </div></Reveal>
        </div></div>
      </section>

      <section className="py-20 bg-appliance-50">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal className="text-center mb-14"><span className="section-tag">Our Pillars</span><h2 className="section-heading text-center">Mission, Vision & Values</h2><div className="gold-bar mx-auto" /></Reveal>
          <div className="grid md:grid-cols-3 gap-8">{[
            {icon:<Target size={28}/>,title:'Our Mission',text:'To provide reliable appliance repair solutions that help Durban homes and businesses restore essential appliances with clear communication and practical service.'},
            {icon:<Eye size={28}/>,title:'Our Vision',text:'To become a trusted appliance repair name in Durban by building long-term customer relationships through dependable service and professional workmanship.'},
            {icon:<Heart size={28}/>,title:'Our Values',text:'Reliability, honesty, respect, clear communication and customer satisfaction guide how we approach every repair enquiry.'}
          ].map((item,i)=><Reveal key={item.title} delay={`delay-${(i+1)*100}`}><div className="bg-white rounded-2xl p-8 shadow-sm border border-appliance-100 h-full hover:shadow-lg transition-shadow"><div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center mb-5">{item.icon}</div><h3 className="font-bold text-appliance-800 text-xl mb-3">{item.title}</h3><p className="text-appliance-500 leading-relaxed text-sm">{item.text}</p></div></Reveal>)}</div>
        </div>
      </section>

      <section className="py-20 bg-appliance-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(https://cdn.cocinaintegral.net/cocinaintegral/2024/05/FAGOR-LAVAVAJILLAS.jpg)', backgroundSize: 'cover' }} />
        <div className="relative max-w-7xl mx-auto px-4">
          <Reveal className="text-center mb-14"><span className="section-tag text-amber-400">Why Choose Us</span><h2 className="text-3xl md:text-4xl font-bold text-white text-center">Appliance Repairs You Can Rely On</h2><div className="gold-bar mx-auto" /></Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{[
            {title:'Practical Diagnosis',desc:'We start by understanding the fault and identifying the likely cause before recommending a repair.'},
            {title:'Major Appliances',desc:'Support for fridges, freezers, washing machines, ovens, stoves, dishwashers, air conditioners and more.'},
            {title:'Durban Service Area',desc:'Mobile on-site assistance for clients across Durban and surrounding suburbs.'},
            {title:'Clear Communication',desc:'We explain the repair requirement so you know what work is being recommended.'}
          ].map((item,i)=><Reveal key={item.title} delay={`delay-${(i+1)*100}`}><div className="glass rounded-2xl p-6 text-center"><div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-4 text-lg font-bold">{i+1}</div><h3 className="text-white font-semibold mb-2">{item.title}</h3><p className="text-appliance-400 text-sm leading-relaxed">{item.desc}</p></div></Reveal>)}</div>
        </div>
      </section>
    </div>
  );
}
