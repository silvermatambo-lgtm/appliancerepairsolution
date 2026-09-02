import { CheckCircle, Target, Eye, Heart } from 'lucide-react';
import { useInView } from '../hooks/useInView';

function Reveal({ children, className = '', delay = '' }: { children: React.ReactNode; className?: string; delay?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`${className} ${inView ? `animate-fade-up ${delay}` : 'opacity-0'}`}>
      {children}
    </div>
  );
}

export default function About() {
  return (
    <div className="page-enter pt-24">
      {/* Hero */}
      <section className="relative py-20 bg-appliance-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(https://fridgeappliancerepairs.simdif.com/images/public/sd_68b228f45ff9c.jpg?no_cache=1756513562)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="section-tag text-amber-400">Our Story</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">About Appliances Repair Solutions</h1>
          <div className="gold-bar mx-auto" />
          <p className="text-appliance-300 max-w-2xl mx-auto mt-4 leading-relaxed">
            Transforming spaces with professional appliance repair solutions for with professional service. We bring craftsmanship, quality, and passion to every repair.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <span className="section-tag">Who We Are</span>
              <h2 className="section-heading mb-4">Quality You Can See & Trust</h2>
              <div className="gold-bar" />
              <p className="text-appliance-500 leading-relaxed mt-4 mb-4">
                Appliances Repair Solutions was founded on a simple belief: every space deserves to be beautiful. We started as a small team of passionate appliance craftsmen with a vision to bring professional appliance repair surfaces to homes and businesses across South Africa.
              </p>
              <p className="text-appliance-500 leading-relaxed mb-4">
                Today, we are one of the leading appliance repair companies, known for our meticulous attention to detail, exceptional craftsmanship, and commitment to using only the finest materials.
              </p>
              <p className="text-appliance-500 leading-relaxed mb-6">
                Whether you're renovating a kitchen, upgrading a bathroom, fitting out a commercial reception, or adding stunning wall cladding — we bring the same level of excellence to every repair, large or small.
              </p>
              <ul className="space-y-3">
                {['Licensed & insured appliance fabricators', 'State-of-the-art cutting & finishing equipment', 'Dedicated repair managers for every job', 'Post-installation care & warranty'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-appliance-700 text-sm">
                    <CheckCircle size={16} className="text-amber-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <div className="grid grid-cols-2 gap-4">
                <img src="https://appliancesrepairsmakkah.shop/wp-content/uploads/2025/07/orig-8.jpeg" alt="Appliance surface" className="w-full h-52 object-cover rounded-2xl shadow-lg" loading="lazy" />
                <img src="https://img.olx.com.br/images/18/186610497509556.jpg" alt="Marble countertop" className="w-full h-52 object-cover rounded-2xl shadow-lg mt-6" loading="lazy" />
                <img src="https://s3.ap-south-1.amazonaws.com/cdn.sajilosewa.com/uploads/blogs/69edf01f67a8ed1e84640303.webp" alt="Quartz installation" className="w-full h-52 object-cover rounded-2xl shadow-lg -mt-6" loading="lazy" />
                <img src="https://durbanactorsstudio.co.za/wp-content/uploads/2024/08/appliance-repairs-Durban-1024x585.jpg" alt="Porcelain cladding" className="w-full h-52 object-cover rounded-2xl shadow-lg" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 bg-appliance-50">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal className="text-center mb-14">
            <span className="section-tag">Our Pillars</span>
            <h2 className="section-heading text-center">Mission, Vision & Values</h2>
            <div className="gold-bar mx-auto" />
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target size={28} />,
                title: 'Our Mission',
                text: 'To deliver professional appliance repair installation services that transform spaces and exceed client expectations through quality craftsmanship, attention to detail, and exceptional service.',
              },
              {
                icon: <Eye size={28} />,
                title: 'Our Vision',
                text: 'To be South Africa\'s most trusted professional appliance repair solutions company — building lasting relationships through excellence, innovation, and an unwavering commitment to quality.',
              },
              {
                icon: <Heart size={28} />,
                title: 'Our Values',
                text: 'Quality, integrity, craftsmanship, and client satisfaction are at the heart of everything we do. We treat every repair as if it were our own home.',
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={`delay-${(i + 1) * 100}`}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-appliance-100 h-full hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center mb-5">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-appliance-800 text-xl mb-3">{item.title}</h3>
                  <p className="text-appliance-500 leading-relaxed text-sm">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-appliance-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(https://www.smartappliance.co.za/wp-content/uploads/2022/10/local-seo-1024x683.jpg)', backgroundSize: 'cover' }} />
        <div className="relative max-w-7xl mx-auto px-4">
          <Reveal className="text-center mb-14">
            <span className="section-tag text-amber-400">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Excellence in Stone Installation</h2>
            <div className="gold-bar mx-auto" />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Premium Quality', desc: 'Only the finest appliances sourced from trusted suppliers globally.' },
              { title: 'Expert Installation', desc: 'Skilled craftsmen with with professional service of hands-on experience.' },
              { title: 'Custom Designs', desc: 'Tailored solutions designed to match your unique style and space.' },
              { title: 'Durable & Reliable', desc: 'Installations built to last decades with minimal maintenance.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={`delay-${(i + 1) * 100}`}>
                <div className="glass rounded-2xl p-6 text-center">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {i + 1}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-appliance-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
