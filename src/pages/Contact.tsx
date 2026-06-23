import { MapPin, Mail, Phone, MessageCircle, MessageSquare } from 'lucide-react';

function Contact() {
  return (
    <div className="space-y-24 px-6 pb-24 pt-10 md:px-8 lg:px-16" id="contact">
      <section className="mx-auto max-w-6xl space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-industrial-orange">Contact Us</p>
        <h1 className="section-heading">Get in touch with Parth Engineers.</h1>
        <p className="section-copy">Reach out for precision manufacturing quotes, facility inquiries or project consultations from our Vapi team.</p>
      </section>

      <section className="grid gap-10 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-panel">
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-industrial-orange">
              <Phone size={24} />
              <div>
                <p className="text-sm uppercase tracking-[0.24em]">Phone</p>
                <a href="tel:9374639385" className="font-semibold text-industrial-navy hover:text-industrial-orange transition-colors">
                  +91 93746 39385
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 text-industrial-orange">
              <Mail size={24} />
              <div>
                <p className="text-sm uppercase tracking-[0.24em]">Email</p>
                <a href="mailto:parth.eng123@gmail.com" className="font-semibold text-industrial-navy hover:text-industrial-orange transition-colors">
                  parth.eng123@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 text-industrial-orange">
              <MapPin size={24} className="flex-shrink-0" />
              <div>
                <p className="text-sm uppercase tracking-[0.24em]">Address</p>
                <p className="font-semibold text-industrial-navy leading-snug">
                  Plot No. C-1B/54, L.I.C Sector 2nd Phase GIDC Vapi
                </p>
              </div>
            </div>
            <div className="rounded-[2rem] bg-slate-50 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">WhatsApp</p>
              <a href="https://wa.me/919374639385" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-3 rounded-full bg-industrial-navy px-5 py-3 text-sm font-semibold text-white hover:bg-[#0a1a30] transition">
                <MessageSquare size={18} /> Message us on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-[#F8FBFF] p-10 shadow-panel">
          <form className="grid gap-6">
            <div className="grid gap-4 md:grid-cols-2">
              <input type="text" placeholder="Full Name" className="rounded-3xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-700 outline-none focus:border-industrial-navy" />
              <input type="email" placeholder="Email Address" className="rounded-3xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-700 outline-none focus:border-industrial-navy" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <input type="tel" placeholder="Phone Number" className="rounded-3xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-700 outline-none focus:border-industrial-navy" />
              <input type="text" placeholder="Company / Project" className="rounded-3xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-700 outline-none focus:border-industrial-navy" />
            </div>
            <textarea placeholder="Project Requirements" className="min-h-[160px] w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-700 outline-none focus:border-industrial-navy" />
            <button type="submit" className="btn-primary inline-flex items-center justify-center gap-2 py-4">
              <MessageCircle size={18} /> Send Inquiry
            </button>
          </form>
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-panel">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-industrial-orange">Location</p>
          <div className="h-[360px] rounded-[2rem] bg-slate-200/90 p-8 text-slate-600">
            <p className="text-lg font-semibold text-industrial-navy">Google Maps placeholder</p>
            <p className="mt-4 max-w-xl text-sm leading-7">A fully integrated Google Maps component can be added during deployment to show the Vapi facility location and directions.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
