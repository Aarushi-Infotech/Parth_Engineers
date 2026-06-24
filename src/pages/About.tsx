import { motion } from 'framer-motion';
import { Award, Briefcase, CheckCircle2, Compass, ShieldCheck, Target } from 'lucide-react';

function About() {
  return (
    <div className="space-y-24 px-6 pb-24 pt-10 md:px-8 lg:px-16">
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-industrial-orange">About Us</p>
            <h1 className="section-heading">Parth Engineers is a premium precision manufacturing partner in Vapi.</h1>
            <p className="section-copy">We support industrial manufacturers with high-accuracy laser cutting, sheet metal component production, machine assembly and custom engineered manufacturing solutions. Our work is built on strict quality systems, material verification and delivery discipline.</p>
          </div>
          <div className="rounded-[2rem] bg-slate-950/90 p-10 text-white shadow-panel">
            <p className="text-sm uppercase tracking-[0.24em] text-orange-200">Trusted Manufacturing Expertise</p>
            <h2 className="mt-6 text-3xl font-semibold leading-tight">Delivering reliable outcomes for demanding manufacturing environments.</h2>
            <p className="mt-6 text-sm leading-7 text-slate-300">Our team blends technical engineering with manufacturing craftsmanship to produce components and assemblies that meet international standards.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-[#F8FBFF] p-10 shadow-panel">
        <div className="grid gap-10 lg:grid-cols-3">
          <article className="space-y-4 rounded-3xl bg-white p-8 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-industrial-orange/10 text-industrial-orange"><Target size={20} /></div>
            <h2 className="text-xl font-semibold text-industrial-navy">Mission</h2>
            <p className="text-slate-600">To deliver superior precision manufacturing solutions with consistent quality, engineering discipline and customer responsiveness.</p>
          </article>
          <article className="space-y-4 rounded-3xl bg-white p-8 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-industrial-orange/10 text-industrial-orange"><Compass size={20} /></div>
            <h2 className="text-xl font-semibold text-industrial-navy">Vision</h2>
            <p className="text-slate-600">To be the regional leader in precision engineering by combining advanced manufacturing capability with trusted delivery performance.</p>
          </article>
          <article className="space-y-4 rounded-3xl bg-white p-8 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-industrial-orange/10 text-industrial-orange"><ShieldCheck size={20} /></div>
            <h2 className="text-xl font-semibold text-industrial-navy">Quality Commitment</h2>
            <p className="text-slate-600">Quality is enforced through inspection, traceability, material verification and continuous improvement at every manufacturing stage.</p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-8">
        <div className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-industrial-orange">Engineering Excellence</p>
          <h2 className="section-heading mx-auto max-w-3xl">Our core values shape manufacturing capability and customer confidence.</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'Precision', copy: 'Strict tolerance control, dimensional accuracy and repeatability for every part.' },
            { title: 'Reliability', copy: 'Consistent process control and dependable delivery across industrial orders.' },
            { title: 'Safety', copy: 'Workplace safety, material handling protocols and methodical process checks.' },
            { title: 'Responsiveness', copy: 'Direct communication and collaborative problem-solving with customers.' }
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-industrial-navy">{item.title}</h3>
              <p className="mt-3 text-slate-600">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="mx-auto max-w-7xl rounded-[2rem] bg-industrial-navy px-10 py-14 text-white shadow-panel">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-200">Partner with us</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">Built for demanding industrial requirements and engineered with precision.</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-200/90">Reach out to our team to discuss manufacturing strategy, design review and production planning for your next project.</p>
          </div>
          <div className="flex items-center justify-end">
            <a href="/contact" className="btn-primary">Contact Our Team</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
