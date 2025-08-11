
'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf, Calendar, HeartPulse, Thermometer, FlaskConical, Sparkles, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";
import { Accordion } from "@/components/Accordion";
import { Info } from "@/components/Info";

function Badge({icon, label}:{icon: React.ReactNode, label: string}){
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-brass/30 bg-white px-3 py-1 shadow-sm">
      <span className="text-brass">{icon}</span>
      <span className="text-xs text-neutral-700">{label}</span>
    </div>
  )
}

function TreatmentCard({icon, title, desc, bullets}:{icon: React.ReactNode, title:string, desc:string, bullets:string[]}){
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-brass/10 grid place-items-center text-brass">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-neutral-700 text-sm">{desc}</p>
        <ul className="mt-4 grid gap-2 text-sm text-neutral-700">
          {bullets.map(b => <li key={b} className="flex items-start gap-2"><span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-brass"/><span>{b}</span></li>)}
        </ul>
      </CardContent>
    </Card>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Calia logo" width={120} height={28} />
            <div className="leading-tight">
              <p className="font-serif text-xl tracking-wide">CALIA</p>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Functional Wellness & Aesthetics</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#treatments" className="hover:text-brass">Treatments</a>
            <a href="#approach" className="hover:text-brass">Our Approach</a>
            <a href="#aesthetics" className="hover:text-brass">Aesthetics</a>
            <a href="#faq" className="hover:text-brass">FAQ</a>
            <a href="#contact" className="hover:text-brass">Contact</a>
          </nav>
          <div className="hidden md:block">
            <Button asChild href="/book" className="bg-ink hover:bg-black text-white">
              <><Calendar className="mr-2 h-4 w-4"/>Book consult</>
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10"><div className="absolute inset-0 bg-gradient-to-br from-sand via-ivory to-sage/20"/></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} transition={{duration:.6}} viewport={{once:true}}>
            <h1 className="font-serif text-4xl sm:text-5xl leading-tight">
              Modern integrative care with a
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brass to-sage"> natural glow</span>
            </h1>
            <p className="mt-4 text-lg text-neutral-700 max-w-prose">
              Personalized BHRT, thyroid support, functional medicine, and aesthetics—crafted to balance hormones, optimize energy, and enhance natural beauty.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild href="/book" className="bg-brass hover:bg-[#8B6F45] text-white">Book a Consultation</Button>
              <Button asChild href="#treatments" className="border border-brass text-brass hover:bg-brass/10 bg-white">Explore Treatments</Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-neutral-600">
              <Badge icon={<HeartPulse className="h-4 w-4"/>} label="Evidence-led protocols"/>
              <Badge icon={<Leaf className="h-4 w-4"/>} label="Root-cause focus"/>
              <Badge icon={<Sparkles className="h-4 w-4"/>} label="Aesthetics with intention"/>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} transition={{duration:.6, delay:.1}} viewport={{once:true}} className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <Image src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1200&auto=format&fit=crop" alt="Serene interior" fill className="object-cover"/>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block w-40 h-40 rounded-3xl overflow-hidden shadow-lg ring-1 ring-black/5">
              <Image src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1000&auto=format&fit=crop" alt="Natural texture" fill className="object-cover"/>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="treatments" className="py-14 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl"><h2 className="font-serif text-3xl">Treatments</h2><p className="mt-2 text-neutral-700">Four pillars, one cohesive plan—tailored to your labs, lifestyle, and goals.</p></div>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TreatmentCard icon={<HeartPulse className="h-6 w-6"/>} title="BHRT" desc="Physiologic dosing for symptom relief & longevity—estradiol, progesterone, testosterone." bullets={["Comprehensive labs","Pellet/cream/injectable options","Cycle-aware protocols"]} />
            <TreatmentCard icon={<Thermometer className="h-6 w-6"/>} title="Thyroid Support" desc="Optimize TSH, Free T3/T4, rT3 and symptoms." bullets={["T4/T3 or combo dosing","Autoimmunity screening","Nutrition & lifestyle stack"]} />
            <TreatmentCard icon={<FlaskConical className="h-6 w-6"/>} title="Functional Medicine" desc="Root-cause evaluation across metabolism, gut, stress, and micronutrients." bullets={["Advanced diagnostics","Targeted supplements","Coaching & habit systems"]} />
            <TreatmentCard icon={<Sparkles className="h-6 w-6"/>} title="Aesthetics" desc="Subtle, natural results that complement hormonal balance." bullets={["Neurotoxins & skincare","Hair/scalp therapies","Skin boosters & peels"]} />
          </div>
        </div>
      </section>

      <section id="approach" className="py-16 sm:py-24 bg-[#F4EFE8]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-serif text-3xl">Our Integrative Approach</h2>
              <p className="mt-3 text-neutral-700 max-w-prose">We combine clinical diagnostics with lifestyle-centered medicine and aesthetics. Each plan is sequenced to reduce symptoms quickly while rebuilding long-term resiliency.</p>
              <ul className="mt-6 grid gap-3 text-sm">
                {[{step:"01",title:"Discovery",text:"Deep-dive consult, timeline, and targeted lab work."},{step:"02",title:"Balance",text:"BHRT & thyroid optimization with close follow-ups."},{step:"03",title:"Rebuild",text:"Nutrition, stress, sleep, and gut protocols with coaching."},{step:"04",title:"Refine",text:"Skin & hair aesthetics to match how you feel."},].map((s)=> (
                  <li key={s.step} className="flex items-start gap-4">
                    <div className="mt-1 h-7 w-7 rounded-full bg-brass/10 text-brass grid place-items-center font-semibold">{s.step}</div>
                    <div><p className="font-medium">{s.title}</p><p className="text-neutral-600">{s.text}</p></div>
                  </li>
                ))}
              </ul>
              <div className="mt-6"><Button className="bg-ink hover:bg-black text-white">See sample care plan</Button></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-lg ring-1 ring-black/5 relative"><Image src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop" alt="Workspace" fill className="object-cover"/></div>
              <div className="aspect-square rounded-3xl overflow-hidden shadow-lg ring-1 ring-black/5 relative"><Image src="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=1200&auto=format&fit=crop" alt="Calm" fill className="object-cover"/></div>
              <div className="col-span-2 aspect-[3/1.6] rounded-3xl overflow-hidden shadow-lg ring-1 ring-black/5 relative"><Image src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop" alt="Spa" fill className="object-cover"/></div>
            </div>
          </div>
        </div>
      </section>

      <section id="aesthetics" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl"><h2 className="font-serif text-3xl">Aesthetics, Naturally</h2><p className="mt-2 text-neutral-700">Subtle refinements that honor your features and support hormonal harmony.</p></div>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[{title:"Neurotoxins",text:"Soften expression lines with light, precise dosing."},{title:"Hair & Scalp",text:"Topicals, PRP/PRF guidance, and scalp health."},{title:"Skin Boosters & Peels",text:"Glow-focused protocols including polynucleotides, niacinamide, and TXA."},].map((i)=> (
              <Card key={i.title}><CardHeader><CardTitle>{i.title}</CardTitle></CardHeader><CardContent><p className="text-neutral-700">{i.text}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-gradient-to-r from-sand via-ivory to-sage/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div><p className="font-serif text-2xl">Ready to feel balanced and look refreshed?</p><p className="text-neutral-700">Start with a comprehensive consult—virtual or in-clinic.</p></div>
          <Button asChild href="/book" className="bg-brass hover:bg-[#8B6F45] text-white flex items-center">Book now <ArrowRight className="ml-2 h-4 w-4"/></Button>
        </div>
      </section>

      <section id="faq" className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl">FAQ</h2>
          <div className="mt-6"><Accordion items={[
            { q: "What does a BHRT plan include?", a: "Consult + targeted labs, individualized dosing (pellet/cream/injectable), follow-ups at 6–12 weeks, and symptom tracking."},
            { q: "Do you treat thyroid with combination T4/T3?", a: "Yes—when clinically indicated based on labs and symptoms. We also address autoimmunity, stress, sleep, and nutrition."},
            { q: "Are aesthetic treatments aggressive?", a: "Our aesthetic philosophy is conservative and natural. We prioritize skin health and subtle refinement over drastic change."},
          ]}/></div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-[#F4EFE8]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-serif text-3xl">Contact</h2>
            <p className="mt-2 text-neutral-700">Questions or ready to book? Send a note and we’ll get back within one business day.</p>
            <form className="mt-6 grid gap-4" onSubmit={(e)=>{e.preventDefault(); alert('Thanks! For HIPAA reasons, please avoid PHI. We will reach out via email.');}}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input placeholder="Full name" className="rounded-xl px-3 py-2 border border-sand bg-white" required/>
                <input placeholder="Email" type="email" className="rounded-xl px-3 py-2 border border-sand bg-white" required/>
              </div>
              <input placeholder="Phone" className="rounded-xl px-3 py-2 border border-sand bg-white"/>
              <textarea placeholder="How can we help? (no PHI please)" className="min-h-[120px] rounded-xl px-3 py-2 border border-sand bg-white"/>
              <div><Button className="bg-ink hover:bg-black text-white">Send message</Button></div>
            </form>
          </div>
          <div className="grid gap-6">
            <Card><CardContent className="p-6 grid sm:grid-cols-3 gap-6">
              <Info icon={<Phone className="h-4 w-4"/>} title="Call" text="(555) 123-4567"/>
              <Info icon={<Mail className="h-4 w-4"/>} title="Email" text="calia@functionalmed.com"/>
              <Info icon={<MapPin className="h-4 w-4"/>} title="Visit" text="209 Andover Ln, Uhland, TX"/>
            </CardContent></Card>
            <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 relative">
              <Image src="https://images.unsplash.com/photo-1527289635667-f8b8976cda5e?q=80&w=1600&auto=format&fit=crop" alt="Clinic exterior" fill className="object-cover"/>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600">© {new Date().getFullYear()} Calia Functional Wellness & Aesthetics. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacy" className="hover:text-brass">Privacy</Link>
            <Link href="/terms" className="hover:text-brass">Terms</Link>
            <Link href="/hipaa" className="hover:text-brass">HIPAA Notice</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
