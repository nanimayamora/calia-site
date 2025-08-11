import React from 'react';
export function Info({icon,title,text}:{icon:React.ReactNode;title:string;text:string}){
  return (<div className="flex items-start gap-3"><div className="h-9 w-9 rounded-full bg-brass/10 text-brass grid place-items-center">{icon}</div><div><p className="text-sm font-medium">{title}</p><p className="text-sm text-neutral-700">{text}</p></div></div>);
}
