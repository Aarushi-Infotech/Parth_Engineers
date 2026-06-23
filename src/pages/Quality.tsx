import { motion } from 'framer-motion';
import { CheckCircle2, ClipboardList, Layers, ShieldCheck, Telescope } from 'lucide-react';

function Quality() {
  return (
    <div className="space-y-24 px-6 pb-24 pt-10 md:px-8 lg:px-16">
      <section className="mx-auto max-w-6xl space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-industrial-orange">Quality Assurance</p>
        <h1 className="section-heading">Quality systems and inspection controls for precision manufacturing.</h1>
        <p className="section-copy">Our quality framework ensures each component and assembly meets requirements through measurement, verification and process control.</p>
      </section>

      <section className="grid gap-10 lg:grid-cols-2">
        <motion.article className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-panel" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-industrial-orange/10 text-industrial-orange"><ShieldCheck size={24} /></div>
          <h2 className="mt-6 text-2xl font-semibold text-industrial-navy">Quality Policy</h2>
          <p className="mt-4 text-slate-600">We commit to consistent manufacturing quality backed by documented processes, material verification and continuous improvement.</p>
        </motion.article>
        <motion.article className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-panel" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-industrial-orange/10 text-industrial-orange"><ClipboardList size={24} /></div>
          <h2 className="mt-6 text-2xl font-semibold text-industrial-navy">Inspection Process</h2>
          <p className="mt-4 text-slate-600">Incoming material checks, in-process verification and final inspection are integrated into each production cycle.</p>
        </motion.article>
      </section>

      <section className="rounded-[2rem] bg-[#F8FBFF] p-10 shadow-panel">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-industrial-orange">Measurement Standards</p>
            <h2 className="section-heading">Critical measurement and verification protocols.</h2>
            <p className="section-copy">We apply calibrated inspection instruments and standard measurement procedures to verify tolerances on all critical features.</p>
          </div>
          <div className="grid gap-4">
            {['CMM readings', 'Height gauge checks', 'Template validation', 'Surface finish inspection'].map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.article className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-panel" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-industrial-orange/10 text-industrial-orange"><Layers size={24} /></div>
          <h2 className="mt-6 text-2xl font-semibold text-industrial-navy">Material Verification</h2>
          <p className="mt-4 text-slate-600">Material types and certificates are checked before production to ensure every batch aligns with customer requirements.</p>
        </motion.article>
        <motion.article className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-panel" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-industrial-orange/10 text-industrial-orange"><CheckCircle2 size={24} /></div>
          <h2 className="mt-6 text-2xl font-semibold text-industrial-navy">Final Inspection</h2>
          <p className="mt-4 text-slate-600">Final inspection confirms part geometry, assembly fit and compliance before dispatch to customers.</p>
        </motion.article>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-panel">
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-industrial-orange">
            <Telescope size={24} />
            <p className="text-sm uppercase tracking-[0.24em] font-semibold">Continuous Improvement</p>
          </div>
          <h2 className="section-heading">Improving manufacturing systems through data and feedback.</h2>
          <p className="section-copy">Quality reviews and production feedback drive process refinement, equipment calibration and operational efficiency.</p>
        </div>
      </section>
    </div>
  );
}

export default Quality;
