import React from "react";

export const metadata = {
  title: "Book a Consultation | Calia Functional Wellness & Aesthetics",
  description: "Schedule your integrative consult."
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-serif text-3xl">Book a Consultation</h1>
      <p className="mt-3 text-neutral-700">Use our secure Vagaro booking tool below to schedule your appointment.</p>
      <div className="mt-6 aspect-[16/9] w-full rounded-2xl border border-sand bg-white overflow-hidden">
        <iframe
          src="https://www.vagaro.com/yourbusinessname/embed"
          width="100%"
          height="100%"
          frameBorder="0"
          title="Book with Calia on Vagaro"
        />
      </div>
    </main>
  );
}
