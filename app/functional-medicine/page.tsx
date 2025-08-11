import React from "react";

export const metadata = {
  title: "Functional Medicine | Calia Functional Wellness & Aesthetics",
  description: "Functional Medicine at Calia"
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 prose prose-neutral">
      <h1 className="font-serif !mb-2 text-3xl">Functional Medicine</h1>
      <div className="mt-6 whitespace-pre-wrap">{body}</div>
    </main>
  );
}
