import { ReactNode } from "react";

export default function PaddingContainer({children}: { children: ReactNode}){
  return (
    <div className="px-8 w-full max-auto max-w-7xl">
        {children}
    </div>
  )
}

