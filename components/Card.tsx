import React from "react";
export function Card({children,className=""}:{children:React.ReactNode;className?:string}){return <div className={`rounded-2xl border border-clay/30 bg-white ${className}`}>{children}</div>}
export function CardHeader({children,className=""}:{children:React.ReactNode;className?:string}){return <div className={`p-5 ${className}`}>{children}</div>}
export function CardTitle({children,className=""}:{children:React.ReactNode;className?:string}){return <h3 className={`text-base font-medium ${className}`}>{children}</h3>}
export function CardContent({children,className=""}:{children:React.ReactNode;className?:string}){return <div className={`p-5 pt-0 ${className}`}>{children}</div>}
