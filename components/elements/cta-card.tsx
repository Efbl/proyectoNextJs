import Image from "next/image";


export default function CtaCard() {
  return (
    <div className="relative rounded-md bg-slate-100 px-6 py-10 overflow-hidden">
        {/* Overlay */}
        <div className=" absolute inset-0 z-10 bg-gradient-to-br from-white/95 via-white/70 to-white/20"/>
        {/* La imagen */}
        <Image fill
               className="object-center object-cover" 
               src="/img/whitehorse1.jpg" alt="Imagen CTA Card"/>
        {/* container */}
        <div className="relative z-20">
            <div className="text-lg font-medium">#explorerworld</div>
            <h3 className="text-4xl font-semibold mt-3">Explore the wold with me!</h3>
            <p className="mt-2 text-lg max-w-lg">Explore the world with me! I´m traveling around the world. I´ve visited
            most of the great cities of EEUU and currently I´m traveling with Join me! 
            </p>
            <form className=" flex items-center w-full gap-2 mt-6">
                <input placeholder="Write your email"
                        className=" w-full md:w-auto px-3 py-2 text-base placeholder:text-sm rounded-md bg-white/80 outline-none focus:ring-2 ring-neutral-600"/>
                <button className=" px-3 py-2 whitespace-nowrap rounded-md bg-neutral-900 text-neutral-200">Sing up</button>
            </form>
        
        </div>
        {/* create form element */}
        
            
    </div>
  )
}