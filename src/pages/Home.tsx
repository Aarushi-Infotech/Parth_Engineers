import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ClipboardCheck, Layers, Sparkles, Target, 
  Truck, Warehouse, Wrench, ChevronRight, Phone, Mail, 
  Award, CheckCircle, Zap, X, Shield, Clock, ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import logoUrl from '../assets/logo.png';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';

const stats = [
  { label: 'Years of Experience', value: 18, suffix: '+' },
  { label: 'Projects Delivered', value: 340, suffix: '+' },
  { label: 'Happy Customers', value: 120, suffix: '+' },
  { label: 'Tons Capacity / Mo', value: 220, suffix: '' }
];

const services = [
  { 
    title: 'Laser Cutting', 
    description: 'Precision laser cutting for MS and SS components with high accuracy and premium finish.', 
    icon: Sparkles, 
    badge: 'High Accuracy',
    color: 'from-orange-500 to-amber-500',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(255,107,0,0.2)]',
    category: 'cutting-forming',
    features: ['Up to 20mm MS / 12mm SS', 'Micron-level edge tolerance', 'Automatic nested layout yield']
  },
  { 
    title: 'Sheet Metal Processing', 
    description: 'Sheet metal manufacturing for industrial applications with durable quality and exact bending.', 
    icon: Layers, 
    badge: 'Reliable Bending',
    color: 'from-blue-500 to-cyan-500',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]',
    category: 'cutting-forming',
    features: ['150 Tons press capacity', 'Repeatable bend profiles', 'Custom punching options']
  },
  { 
    title: 'Machine Assembly', 
    description: 'Structured assembly services with strict engineering quality checks and compliance.', 
    icon: Warehouse, 
    badge: 'System Ready',
    color: 'from-emerald-500 to-teal-500',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]',
    category: 'fab-assembly',
    features: ['Sub-assembly integration', 'Wiring & mechanical fitment', 'Operational checklist audit']
  },
  { 
    title: 'Custom Manufacturing', 
    description: 'Custom assemblies built from customer drawings and exact specifications.', 
    icon: Target, 
    badge: 'Drawing Special',
    color: 'from-indigo-500 to-purple-500',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]',
    category: 'fab-assembly',
    features: ['DFM capability reviews', 'Batch scale flexibility', 'Bespoke mounting jigs']
  },
  { 
    title: 'Precision Engineering', 
    description: 'Engineered solutions for demanding industrial manufacturing needs and tight tolerances.', 
    icon: ClipboardCheck, 
    badge: 'Traceable Quality',
    color: 'from-rose-500 to-pink-500',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(244,63,94,0.2)]',
    category: 'design-inspection',
    features: ['Tolerances down to ±0.05mm', 'CAD file compliance verification', 'Quality test reports']
  },
  { 
    title: 'Welding & Fabrication', 
    description: 'Fabrication and welding support for finished assemblies and heavy-duty components.', 
    icon: Wrench, 
    badge: 'Heavy Duty',
    color: 'from-yellow-500 to-amber-600',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]',
    category: 'fab-assembly',
    features: ['Certified MIG / TIG welds', 'Structural load testing', 'Anti-corrosion prep coating']
  }
];

const machineryItems = [
  {
    id: 1,
    title: 'Precision Laser Cutting & CNC',
    category: 'Cutting Systems',
    image: image1,
    description: 'Our high-performance CNC laser systems handle MS and SS sheets with micron-level tolerances. Equipped with automatic nesting software to maximize sheet usage efficiency.',
    specs: {
      capacity: 'Up to 20mm MS, 12mm SS',
      bedSize: '3000mm x 1500mm',
      materials: 'Mild Steel, Stainless Steel, Aluminum',
      tolerance: '±0.1 mm'
    }
  },
  {
    id: 2,
    title: 'Heavy Structural Fabrication',
    category: 'Welding & Assembly',
    image: image2,
    description: 'Robust structural components fabricated by certified welders (MIG/TIG). Built to endure high physical stress under rigorous plant operating conditions.',
    specs: {
      capacity: 'Structural frameworks up to 5 tons',
      certifications: 'ASME Section IX Standard',
      materials: 'Carbon Steel, Structural Alloys',
      tolerance: '±1.0 mm'
    }
  },
  {
    id: 3,
    title: 'Precision Press Bending & Forming',
    category: 'Metal Forming',
    image: image3,
    description: 'Multi-axis CNC press brakes deliver high-repeatability folding and forming. Ensures sheet metal shapes fit flawlessly into next-stage assemblies.',
    specs: {
      capacity: '150 Tons Bending Force',
      bendLength: 'Up to 3100mm',
      materials: 'MS, SS, Galvanized Steel',
      tolerance: '±0.2 Degree'
    }
  },
  {
    id: 4,
    title: 'Component Inspection & Quality Lab',
    category: 'Metrology',
    image: image4,
    description: 'Equipped with calibrated precision instruments to measure, record, and verify geometric tolerances. Comprehensive reporting for materials and critical dimensions.',
    specs: {
      inspectionMode: 'Dimensional & Vernier calibration',
      reporting: 'Material Test Certificates (MTC) & Dimensional Reports',
      standards: 'ISO Compliant Audit Ready',
      guarantee: '100% Component Inspection'
    }
  }
];

const processSteps = [
  {
    title: 'Requirement Analysis',
    short: 'Analysis',
    desc: 'Aligning project details, drawing specifications, target tolerances, and material grades before launching the pricing cycle.'
  },
  {
    title: 'Engineering Review',
    short: 'Engineering',
    desc: 'Reviewing 2D/3D models for design-for-manufacturability (DFM). Making engineering adjustments to optimize yield and assembly fit.'
  },
  {
    title: 'Precision Manufacturing',
    short: 'Production',
    desc: 'Executing cutting, bending, custom fabrication, and structural welding on state-of-the-art machinery by expert operators.'
  },
  {
    title: 'Quality Inspection',
    short: 'Quality',
    desc: 'Measuring key coordinate locations, confirming material trace-sheets, and certifying dimensions against design prints.'
  },
  {
    title: 'Delivery Coordination',
    short: 'Logistics',
    desc: 'Preparing dispatch packages with appropriate anti-corrosion protection and delivering components securely to the customer plant.'
  }
];

function Home() {
  const [activeStep, setActiveStep] = useState(0);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [activeMachinery, setActiveMachinery] = useState<typeof machineryItems[0] | null>(null);
  const [heroSlide, setHeroSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(s => s.category === selectedCategory);

  // Stats counting animation
  useEffect(() => {
    const duration = 1500;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      
      setCounts(
        stats.map((stat) => Math.floor(stat.value * progress))
      );

      if (progress === 1) {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  // Hero auto slide for visual collage/carousel (mobile focus)
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % machineryItems.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-50 pb-24 text-slate-800 antialiased overflow-x-hidden">
      
      {/* Background radial highlights */}
      <div className="absolute top-0 left-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-industrial-navy/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[800px] right-0 -z-10 h-[600px] w-[600px] rounded-full bg-industrial-orange/5 blur-[150px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative px-4 pt-6 md:px-8 lg:px-16 lg:pt-12">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-[#0a1b33] to-slate-900 px-6 py-12 text-white shadow-2xl sm:px-12 lg:px-20 lg:py-24">
            
            {/* Ambient overlay light */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,107,0,0.15),_transparent_45%)]" />
            <div className="absolute -bottom-48 -left-48 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]" />

            <div className="relative z-10 grid gap-12 lg:grid-cols-12 lg:items-center">
              
              {/* Left Column: Text Content */}
              <div className="space-y-6 sm:space-y-8 lg:col-span-7">
                
                {/* Premium badge containing logo */}
                <motion.div 
                  initial={{ opacity: 0, y: -20 }} 
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 p-1.5 pr-4 backdrop-blur-md"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white p-0.5 shadow-md">
                    <img src={logoUrl} alt="Parth Engineers logo" className="h-full w-full object-contain" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400 sm:text-xs">
                    Vapi Precision Fabrication
                  </span>
                </motion.div>

                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="text-3xl font-extrabold tracking-tight leading-tight sm:text-5xl lg:text-6xl"
                >
                  Precision Engineering.<br />
                  <span className="bg-gradient-to-r from-industrial-orange to-amber-400 bg-clip-text text-transparent">
                    Built to Perform.
                  </span>
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base sm:leading-relaxed"
                >
                  From high-speed CNC laser cutting and heavy fabrication to multi-stage assemblies. We deliver parts with material verification, dimensional traceability, and absolute scheduling discipline.
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link 
                    to="/contact" 
                    className="btn-primary group shadow-lg shadow-industrial-orange/20"
                  >
                    <span>Get a Custom Quote</span>
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link 
                    to="/services" 
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
                  >
                    Explore Facilities
                  </Link>
                </motion.div>

                {/* Micro highlights - Desktop only */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="hidden md:grid gap-4 grid-cols-3 pt-6 border-t border-white/10"
                >
                  {[
                    { label: 'Engineering Audit', desc: 'DFM review of drawings' },
                    { label: 'Calibrated Quality', desc: 'Traceable measurement lab' },
                    { label: 'Material Assurance', desc: 'MTC & Grade verification' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2">
                      <div className="mt-0.5 text-industrial-orange">
                        <CheckCircle size={16} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">{item.label}</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>

              </div>

              {/* Right Column: Visual Showcase (Collage for Desktop / Carousel for Mobile) */}
              <div className="relative h-64 sm:h-96 lg:col-span-5 lg:h-[450px]">
                
                {/* Mobile View: Dynamic Slider */}
                <div className="absolute inset-0 block lg:hidden">
                  <div className="relative h-full w-full overflow-hidden rounded-2xl bg-slate-900 shadow-xl border border-white/10">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={heroSlide}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0"
                      >
                        <img 
                          src={machineryItems[heroSlide].image} 
                          alt={machineryItems[heroSlide].title} 
                          className="h-full w-full object-cover brightness-[0.65]" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                        <div className="absolute bottom-5 left-5 right-5 space-y-1 text-left">
                          <span className="inline-block rounded-full bg-industrial-orange/90 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                            {machineryItems[heroSlide].category}
                          </span>
                          <h3 className="text-lg font-bold text-white">{machineryItems[heroSlide].title}</h3>
                          <p className="text-xs text-slate-300 line-clamp-2">{machineryItems[heroSlide].description}</p>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                    
                    {/* Bullet Indicators */}
                    <div className="absolute right-4 top-4 z-20 flex gap-1.5">
                      {machineryItems.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setHeroSlide(i)}
                          className={`h-2 rounded-full transition-all duration-300 ${heroSlide === i ? 'bg-industrial-orange w-6' : 'bg-white/40 w-2'}`}
                          aria-label={`Show slider index ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Desktop View: Premium Interactive Card Stack */}
                <div className="hidden lg:block h-full w-full">
                  <div className="relative h-full w-full">
                    {machineryItems.map((item, index) => {
                      // Custom positions for a beautiful staggered overlapping list
                      const offsetClass = [
                        'translate-x-0 translate-y-0 scale-100 z-30 opacity-100',
                        'translate-x-6 translate-y-6 scale-95 z-20 opacity-80 hover:opacity-100',
                        'translate-x-12 translate-y-12 scale-90 z-10 opacity-60 hover:opacity-100',
                        '-translate-x-6 translate-y-8 scale-92 z-20 opacity-50 hover:opacity-100'
                      ][(index + heroSlide) % 4];

                      return (
                        <motion.div
                          key={item.id}
                          layout
                          onClick={() => setActiveMachinery(item)}
                          className={`absolute inset-0 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900 transition-all duration-500 cursor-pointer ${offsetClass}`}
                          whileHover={{ scale: 1.03, y: -5 }}
                        >
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="h-full w-full object-cover brightness-[0.7] transition-all duration-300 hover:brightness-90" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/35 p-6 flex flex-col justify-between">
                            <span className="self-start rounded-full bg-industrial-orange px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                              {item.category}
                            </span>
                            <div className="text-left space-y-1.5">
                              <h3 className="text-lg font-bold text-white tracking-wide">{item.title}</h3>
                              <p className="text-xs text-slate-300 line-clamp-2">{item.description}</p>
                              <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-orange-400">
                                <span>Tap to view engineering specs</span>
                                <ChevronRight size={14} />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-12 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm transition hover:shadow-md sm:p-7"
              >
                <div className="absolute -right-4 -bottom-4 h-16 w-16 rounded-full bg-slate-50" />
                <p className="text-3xl font-black text-slate-900 sm:text-4xl">
                  {counts[i] || 0}{stat.suffix}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-slate-500 sm:text-xs">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Machinery Gallery Showcase */}
      <section className="px-4 py-12 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          
          <div className="text-center md:text-left md:flex md:items-end md:justify-between mb-10 space-y-4 md:space-y-0">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-industrial-orange">
                Machinery & Infrastructure
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Advanced Production Equipment
              </h2>
              <p className="max-w-2xl text-slate-600 text-sm leading-relaxed">
                Take a closer look at our setup designed for high tolerances and repeatable industrial production. Click or tap any facility below for detailed engineering specifications.
              </p>
            </div>
            
            <Link 
              to="/machinery" 
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-industrial-navy shadow-sm transition"
            >
              <span>See Complete Shop Floor</span>
              <ChevronRight size={14} />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {machineryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveMachinery(item)}
                className="group relative cursor-pointer overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-3 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden rounded-2xl bg-slate-100">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                    <span className="text-xs font-semibold text-white bg-industrial-orange px-2.5 py-1 rounded-full">
                      Specifications
                    </span>
                  </div>
                </div>
                
                <div className="mt-4 px-2 pb-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                      Tolerance: {Object.values(item.specs)[3] || 'High'}
                    </span>
                  </div>
                  <h3 className="mt-1 text-base font-bold text-slate-900 group-hover:text-industrial-orange transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Capabilities Section */}
      <section className="px-4 py-16 bg-slate-50 text-slate-800 rounded-[2.5rem] mx-4 md:mx-8 lg:mx-16 relative overflow-hidden border border-slate-200/50 shadow-sm">
        
        {/* Soft background glow */}
        <div className="absolute -top-32 -left-32 h-[350px] w-[350px] rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-industrial-orange">
              Our Capabilities
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-industrial-navy">
              Engineered for Industrial Needs
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mx-auto">
              From individual machined parts to continuous production pipelines. We coordinate sheet supply, bending fabrication, and custom mechanical assembly.
            </p>
          </div>

          {/* Interactive Categories Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-2xl mx-auto">
            {[
              { id: 'all', label: 'All Operations' },
              { id: 'cutting-forming', label: 'Cutting & Forming' },
              { id: 'fab-assembly', label: 'Fabrication & Assembly' },
              { id: 'design-inspection', label: 'Engineering & Quality' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-wider transition-all duration-200 border ${
                  selectedCategory === cat.id 
                    ? 'text-white bg-industrial-orange border-industrial-orange shadow-md shadow-industrial-orange/10 scale-[1.01]' 
                    : 'text-slate-500 bg-white border-slate-200 hover:text-industrial-navy hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Capabilities Grid */}
          <motion.div 
            layout 
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.article 
                    layout
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.25 }}
                    key={item.title}
                    className="group relative rounded-2xl border border-slate-200 bg-white p-5 hover:border-slate-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  >
                    {/* Top Accent Strip */}
                    <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${item.color}`} />

                    <div>
                      {/* Icon & Badge Header */}
                      <div className="flex items-center justify-between mb-4 mt-1">
                        <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-sm`}>
                          <Icon size={18} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-base font-bold text-industrial-navy mb-1.5 group-hover:text-industrial-orange transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Horizontal Inline Tags to save space */}
                      <div className="mt-4 flex flex-wrap gap-1 border-t border-slate-100 pt-3.5">
                        {item.features.map((feat, fIdx) => (
                          <span 
                            key={fIdx} 
                            className="inline-block bg-slate-50 border border-slate-200/60 text-slate-700 text-[10px] font-semibold px-2 py-0.5 rounded-md"
                          >
                            {feat}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Compact Trigger Link */}
                    <Link
                      to="/services" 
                      className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 group-hover:text-industrial-orange transition-colors"
                    >
                      <span className="font-semibold">See processing parameters</span>
                      <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                    </Link>

                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* Production Process Timeline Switcher */}
      <section className="px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-industrial-orange">
              Workflow Discipline
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Process-Driven Execution
            </h2>
            <p className="text-slate-600 text-sm">
              We eliminate delays and dimensional errors by enforcing key gate inspections from drawing ingestion to packing slips.
            </p>
          </div>

          {/* Interactive Steps Control */}
          <div className="bg-white rounded-3xl border border-slate-200/60 p-4 shadow-sm max-w-5xl mx-auto">
            
            {/* Step Selection Header (Touch friendly) */}
            <div className="flex gap-2 pb-4 overflow-x-auto scrollbar-none border-b border-slate-100">
              {processSteps.map((step, idx) => (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(idx)}
                  className={`flex-1 min-w-[130px] rounded-2xl py-3 px-4 text-center text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeStep === idx ? 'bg-industrial-navy text-white shadow-md' : 'bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-800'}`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <span className={`h-5 w-5 rounded-full flex items-center justify-center text-[10px] ${activeStep === idx ? 'bg-industrial-orange text-white' : 'bg-slate-200 text-slate-600'}`}>
                      {idx + 1}
                    </span>
                    <span>{step.short}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Step Content Area */}
            <div className="py-6 px-2 sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.25 }}
                  className="grid gap-6 md:grid-cols-12 md:items-center"
                >
                  <div className="md:col-span-8 space-y-4">
                    <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-industrial-orange">
                      Stage 0{activeStep + 1} in Progress Cycle
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
                      {processSteps[activeStep].title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {processSteps[activeStep].desc}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-xs">
                      <div className="flex items-center gap-2 text-slate-700">
                        <ShieldCheck size={16} className="text-emerald-500" />
                        <span>Quality gate check</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-700">
                        <Clock size={16} className="text-blue-500" />
                        <span>Schedule compliance tracking</span>
                      </div>
                    </div>
                  </div>

                  {/* Illustrative details box on the right */}
                  <div className="md:col-span-4 bg-slate-50 rounded-2xl p-5 border border-slate-200/50 text-left">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                      Output Certificate
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-600">
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-industrial-orange" />
                        <span>Digitized Drawing Trace sheet</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-industrial-orange" />
                        <span>Standard Operator Instruction Sheet</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-industrial-orange" />
                        <span>Dimensional Verification Log</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* Trust Badges */}
      <section className="px-4 py-8 bg-slate-100/60 border-y border-slate-200/50">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-around gap-6 text-slate-400 font-semibold">
          <div className="flex items-center gap-2.5">
            <Award size={20} className="text-industrial-orange" />
            <span className="text-sm tracking-wider text-slate-600">ISO Compliant Infrastructure</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Shield size={20} className="text-industrial-orange" />
            <span className="text-sm tracking-wider text-slate-600">100% Material Traceability</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Truck size={20} className="text-industrial-orange" />
            <span className="text-sm tracking-wider text-slate-600">Reliable Plant-Floor Dispatch</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-gradient-to-tr from-industrial-navy to-slate-900 p-8 text-white text-center sm:p-16 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-industrial-orange/10 blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-orange-400">
              Get an Estimate in 24 Hours
            </span>
            <h2 className="text-3xl font-extrabold sm:text-4xl leading-tight">
              Ready to Discuss Your Tolerances and Volume?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Upload your engineering drawings or material blueprints today. Our technical estimation department will review your design limits and get back to you with rates and lead-times.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link 
                to="/contact" 
                className="btn-primary shadow-lg shadow-industrial-orange/20"
              >
                <Mail size={16} className="mr-2" />
                <span>Submit Technical Drawings</span>
              </Link>
              <a 
                href="tel:9374639385" 
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                <Phone size={16} className="mr-2" />
                <span>Call +91 93746 39385</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Bottom Actions - Mobile Only */}
      <div className="fixed bottom-4 left-4 right-4 z-40 block sm:hidden">
        <motion.div 
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.4 }}
          className="mx-auto max-w-md rounded-2xl border border-slate-200/80 bg-white/95 p-3.5 shadow-xl backdrop-blur-md flex gap-2.5 items-center justify-between"
        >
          <div className="flex items-center gap-2 pl-1.5">
            <img src={logoUrl} alt="logo" className="h-7 w-7 object-contain" />
            <div className="text-left">
              <p className="text-[11px] font-black text-slate-800 leading-tight">Parth Engineers</p>
              <p className="text-[9px] font-semibold text-emerald-600 flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Online Inquiry Active</span>
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <a 
              href="https://wa.me/919374639385?text=Hello%20Parth%20Engineers,%20I'm%20interested%20in%20manufacturing%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-3.5 py-2.5 text-xs font-bold text-white active:scale-95 transition"
            >
              WhatsApp
            </a>
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-industrial-orange px-3.5 py-2.5 text-xs font-bold text-white active:scale-95 transition"
            >
              Get Quote
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Detail Specifications Modal Overlay */}
      <AnimatePresence>
        {activeMachinery && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 max-h-[90vh] flex flex-col"
            >
              {/* Header image banner */}
              <div className="relative h-48 sm:h-64 flex-shrink-0 bg-slate-100">
                <img 
                  src={activeMachinery.image} 
                  alt={activeMachinery.title} 
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                <button
                  onClick={() => setActiveMachinery(null)}
                  className="absolute right-4 top-4 h-9 w-9 rounded-full bg-slate-950/40 text-white flex items-center justify-center hover:bg-slate-950/60 active:scale-95 transition"
                  aria-label="Close details"
                >
                  <X size={18} />
                </button>
                <div className="absolute bottom-4 left-5 right-5 text-left">
                  <span className="inline-block bg-industrial-orange text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-1.5">
                    {activeMachinery.category}
                  </span>
                  <h3 className="text-xl font-extrabold text-white sm:text-2xl">
                    {activeMachinery.title}
                  </h3>
                </div>
              </div>

              {/* Specs & description */}
              <div className="p-6 overflow-y-auto space-y-6 text-left">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Description</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {activeMachinery.description}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Engineering Specifications</h4>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {Object.entries(activeMachinery.specs).map(([key, val]) => (
                      <div key={key} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/50">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          {key.replace(/([A-Z])/g, ' $1')}
                        </span>
                        <span className="block text-sm font-bold text-slate-800 mt-1">
                          {val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="p-5 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between flex-shrink-0">
                <span className="text-xs text-slate-500">
                  Ready to fabricate components on this machine?
                </span>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setActiveMachinery(null)}
                    className="flex-1 sm:flex-none rounded-xl border border-slate-200 bg-white py-2.5 px-4 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition"
                  >
                    Close
                  </button>
                  <Link
                    to="/contact"
                    onClick={() => setActiveMachinery(null)}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center rounded-xl bg-industrial-orange py-2.5 px-4 text-xs font-bold text-white hover:bg-[#e15d00] transition"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default Home;
