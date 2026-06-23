import { motion } from 'framer-motion';
import { ArrowRight, Layers, Package, Scissors, Settings2, Sparkles } from 'lucide-react';

const details = [
  {
    title: 'Laser Cutting',
    overview: 'High-precision laser cutting for Mild Steel and Stainless Steel components with exact tolerances and premium surface finish.',
    benefits: ['Accurate profiles', 'Minimal edge burr', 'Reduced setup time', 'Remote process control'],
    applications: ['Enclosures', 'Bracket assemblies', 'Precision panels', 'Instrumentation parts'],
    features: ['3-axis fiber lasers', 'CNC nesting', 'High repeatability', 'Material thickness control'],
    industries: ['Machinery Manufacturers', 'Industrial Equipment', 'Automation']
  },
  {
    title: 'Sheet Metal Processing',
    overview: 'Sheet metal manufacturing and component processing tailored to industrial designs and high-volume needs.',
    benefits: ['Bending accuracy', 'Weld ready parts', 'Consistent fabrication', 'Material traceability'],
    applications: ['Panels', 'Housings', 'Ducting assemblies', 'Structural frames'],
    features: ['Press brake lines', 'CNC turret punching', 'Laser trimming', 'Surface treatment readiness'],
    industries: ['Packaging', 'Chemical Manufacturing', 'Pharmaceutical']
  },
  {
    title: 'Machine Assembly',
    overview: 'Complete machine assembly services with assembly validation, fit checks and test-ready handoff.',
    benefits: ['Integrated assemblies', 'Quality checks', 'Assembly documentation', 'Functional testing support'],
    applications: ['Production equipment', 'Automation modules', 'Control cabinets', 'Custom machines'],
    features: ['Sequence assembly cells', 'Torque-controlled fastening', 'Wiring harness support', 'Assembly jigs'],
    industries: ['Machine Builders', 'Industrial Automation', 'Engineering Companies']
  },
  {
    title: 'Custom Manufacturing',
    overview: 'Custom part manufacturing based on customer drawings, specifications, and exact industrial requirements.',
    benefits: ['Tailor-made solutions', 'Material sourcing support', 'Batch consistency', 'Manufacturing flexibility'],
    applications: ['Prototype components', 'Specialized fixtures', 'Custom brackets', 'OEM parts'],
    features: ['Engineering support', 'Customer review cycles', 'Special finishes', 'Documentation control'],
    industries: ['Pharmaceutical Manufacturing', 'Chemical Manufacturing', 'Packaging']
  },
  {
    title: 'Precision Engineering Solutions',
    overview: 'Engineering-led manufacturing support for components requiring tight tolerance and repeatable performance.',
    benefits: ['Design validation', 'Tolerance assurance', 'Critical dimension control', 'Process optimization'],
    applications: ['Precision assemblies', 'Instrument components', 'Mechanical sub-systems', 'Regulated parts'],
    features: ['CAD review', 'DFM feedback', 'Process planning', 'Inspection protocols'],
    industries: ['Industrial Equipment', 'Automation', 'Engineering & Manufacturing Companies']
  }
];

function Services() {
  return (
    <div className="space-y-24 px-6 pb-24 pt-10 md:px-8 lg:px-16">
      <section className="mx-auto max-w-6xl space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-industrial-orange">Services</p>
        <h1 className="section-heading">End-to-end manufacturing and engineering services for industrial customers.</h1>
        <p className="section-copy">Parth Engineers provides a comprehensive portfolio of production-ready services matched to high accuracy, quality control and industrial delivery requirements.</p>
      </section>

      <section className="grid gap-10">
        {details.map((service, index) => (
          <motion.article key={service.title} className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-panel" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }}>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-industrial-orange">{service.title}</p>
                <h2 className="mt-4 text-3xl font-semibold text-industrial-navy">{service.overview}</h2>
              </div>
              <div className="inline-flex items-center rounded-full bg-industrial-navy px-6 py-3 text-sm font-semibold text-white">
                <Sparkles size={18} className="mr-2" /> Reliable manufacturing
              </div>
            </div>

            <div className="mt-10 grid gap-8 xl:grid-cols-3">
              <div className="rounded-3xl bg-slate-50 p-6">
                <h3 className="font-semibold text-industrial-navy">Benefits</h3>
                <ul className="mt-4 space-y-3 text-slate-600">
                  {service.benefits.map((item) => <li key={item}>• {item}</li>)}
                </ul>
              </div>
              <div className="rounded-3xl bg-slate-50 p-6">
                <h3 className="font-semibold text-industrial-navy">Applications</h3>
                <ul className="mt-4 space-y-3 text-slate-600">
                  {service.applications.map((item) => <li key={item}>• {item}</li>)}
                </ul>
              </div>
              <div className="rounded-3xl bg-slate-50 p-6">
                <h3 className="font-semibold text-industrial-navy">Key Features</h3>
                <ul className="mt-4 space-y-3 text-slate-600">
                  {service.features.map((item) => <li key={item}>• {item}</li>)}
                </ul>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-6 border-t border-slate-200 pt-8 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Industries Served</p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-700">
                  {service.industries.map((industry) => (
                    <span key={industry} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2">{industry}</span>
                  ))}
                </div>
              </div>
              <button className="btn-primary inline-flex items-center gap-2">Request Service <ArrowRight size={16} /></button>
            </div>
          </motion.article>
        ))}
      </section>
    </div>
  );
}

export default Services;
