import { motion } from 'framer-motion';
import { Activity, Cpu, Hammer, LayoutGrid, Box } from 'lucide-react';

function Machinery() {
  return (
    <div className="space-y-24 px-6 pb-24 pt-10 md:px-8 lg:px-16">
      <section className="mx-auto max-w-6xl space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-industrial-orange">Machinery & Infrastructure</p>
        <h1 className="section-heading">Modern production infrastructure for precision manufacturing.</h1>
        <p className="section-copy">Our facility is configured to support laser cutting, sheet metal processing, assembly and inspection with industrial-grade systems.</p>
      </section>

      <section className="grid gap-10 lg:grid-cols-2">
        {[
          { title: 'Production Facility', copy: 'Large production floor with structured workflows, material staging and efficient loading systems.', icon: Activity },
          { title: 'Laser Cutting Equipment', copy: 'Fiber and CO2 laser systems equipped for MS and SS cut parts with precise edge quality.', icon: Hammer },
          { title: 'Sheet Metal Processing Equipment', copy: 'Press brakes, punching lines and forming stations for accurate sheet metal production.', icon: LayoutGrid },
          { title: 'Assembly Area', copy: 'Dedicated machine assembly cells with documented process steps and fitment verification.', icon: Box },
          { title: 'Inspection Equipment', copy: 'CMM, height gauges and inspection fixtures for dimensional validation on critical parts.', icon: Cpu },
          { title: 'Material Handling Systems', copy: 'Streamlined handling of raw material, semifinished components and finished assemblies.', icon: Activity }
        ].map((item, index) => (
          <motion.article key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-panel" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }}>
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-industrial-orange/10 text-industrial-orange"><item.icon size={24} /></div>
            <h2 className="mt-6 text-2xl font-semibold text-industrial-navy">{item.title}</h2>
            <p className="mt-4 text-slate-600">{item.copy}</p>
          </motion.article>
        ))}
      </section>

      <section className="rounded-[2rem] bg-[#F8FBFF] p-10 shadow-panel">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-industrial-orange">Facility Strengths</p>
            <h2 className="section-heading">A manufacturing environment built for industrial reliability.</h2>
            <p className="section-copy">We maintain an organized factory layout, process controls and equipment calibration to support high-volume production with consistent quality.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {['Structured workflows', 'Material traceability', 'Calibration management', 'Safety and cleanliness'].map((item) => (
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

export default Machinery;
