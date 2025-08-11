'use client'
import React,{useState} from 'react';
export function Accordion({ items }:{ items:{ q:string; a:React.ReactNode }[] }){
  const [open,setOpen]=useState<number|null>(0);
  return (<div className="divide-y divide-sand/60 rounded-2xl border border-sand/80 bg-white">
    {items.map((it,idx)=>(<div key={idx}><button onClick={()=>setOpen(open===idx?null:idx)} className="w-full text-left px-5 py-4 font-medium hover:bg-sand/30">{it.q}</button>{open===idx&&<div className="px-5 pb-5 text-sm text-neutral-700">{it.a}</div>}</div>))}
  </div>);
}
