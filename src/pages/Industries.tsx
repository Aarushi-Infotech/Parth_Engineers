import { motion } from 'framer-motion';
import { FlaskConical, Box, Cpu, Pill, Package, ShieldCheck } from 'lucide-react';

const sectors = [
  { title: 'Pharmaceutical Industry', description: 'Compliance-driven components for pharma processing and packaging equipment.', icon: Pill },
  { title: 'Chemical Industry', description: 'Durable manufacturing support for chemical processing and containment systems.', icon: FlaskConical },
  { title: 'Packaging Industry', description: 'Precision fabricated parts for packaging machinery and material handling.', icon: Package },
  { title: 'Industrial Automation', description: 'Components and assemblies for automation equipment, conveyors and skids.', icon: Cpu },
  { title: 'Machinery Manufacturing', description: 'Fabrication and assembly services for machine builders and OEMs.', icon: Box },
  { title: 'Engineering Companies', description: 'Partnering with engineering teams to deliver manufacturable solutions and prototypes.', icon: ShieldCheck }
];

function Industries() {
  return (
    <div className="space-y-24 px-6 pb-24 pt-10 md:px-8 lg:px-16">
      <section className="mx-auto max-w-6xl space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-industrial-orange">Industries Served</p>
        <h1 className="section-heading">Manufacturing solutions tailored to industrial sectors.</h1>
        <p className="section-copy">Parth Engineers supports critical manufacturing and equipment industries with precision components, assemblies and process-aligned services.</p>
      </section>

      <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {sectors.map((sector, index) => (
          <motion.article key={sector.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-panel" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }}>
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-industrial-orange/10 text-industrial-orange"><sector.icon size={24} /></div>
            <h2 className="mt-6 text-2xl font-semibold text-industrial-navy">{sector.title}</h2>
            <p className="mt-4 text-slate-600">{sector.description}</p>
          </motion.article>
        ))}
      </section>

      <section className="rounded-[2rem] bg-[#F8FBFF] p-10 shadow-panel">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-industrial-orange">Industrial Focus</p>
            <h2 className="section-heading">Supporting process-driven manufacturing with trusted execution.</h2>
            <p className="section-copy">Our systems are designed for regulated and high-precision sectors where component quality and delivery consistency matter most.</p>
          </div>
          <div className="grid gap-4">
            {['Regulatory awareness', 'Component traceability', 'Supply continuity', 'Process documentation'].map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Industries;
