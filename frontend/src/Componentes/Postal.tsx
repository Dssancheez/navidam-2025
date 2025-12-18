export default function Postal() {
    return (
        <>
            <body className="bg-slate-50 m-0 font-sans text-white p-7">

                <div className="max-w-[700px] mx-auto">
                    <div className="border-[5px] border-[#cc8f0b] rounded-[15px] shadow-2xl overflow-hidden bg-[#006188c9]">

                        <div className="relative p-6 bg-[radial-gradient(900px_300px_at_20%_0%,rgba(251,68,36,0.25),transparent_55%)] bg-gradient-to-br from-red-500/10 to-purple-500/10">

                            <div className="absolute inset-0 pointer-events-none opacity-90 
                    bg-[radial-gradient(2px_2px_at_12%_28%,rgba(255,255,255,0.65)_50%,transparent_55%),radial-gradient(2px_2px_at_32%_18%,rgba(255,255,255,0.55)_50%,transparent_55%),radial-gradient(2px_2px_at_52%_26%,rgba(255,255,255,0.5)_50%,transparent_55%)]">
                            </div>

                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-700/50 text-white/80 text-xs uppercase tracking-wider">
                                🎄 Felicitación Navideña · NaviDAM
                            </span>

                            <h1 className="mt-4 mb-2 text-4xl font-bold leading-tight">
                                ¡Felices fiestas, Destinatario!
                            </h1>

                            <p className="text-slate-300 text-sm">Te han enviado un mensaje muy especial con una gran música 🎶</p>
                        </div>

                        <div className="p-6">
                            <div className="border border-white/10 rounded-2xl p-5 leading-relaxed text-lg bg-white/5 italic">
                                "Aquí va el cuerpo del mensaje navideño que has escrito para tu contacto."
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

                                <div className="bg-[#9ed4e9c9] border border-black/5 rounded-2xl p-4 text-slate-800">
                                    <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-blue-600/20 text-xl mb-3">
                                        ✉️
                                    </div>
                                    <span className="text-xs font-semibold uppercase tracking-widest text-white/90">De:</span>
                                    <p className="text-2xl font-bold">Tu Nombre</p>
                                    <p className="text-xs opacity-60">Enviado el 18 de diciembre, 2025</p>
                                </div>

                                <div className="bg-[#9ed4e9c9] border border-black/5 rounded-2xl p-4 text-slate-800">
                                    <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-blue-600/20 text-xl mb-3">
                                        🎵
                                    </div>
                                    <span className="text-xs font-semibold uppercase tracking-widest text-white/90">Melodía:</span>
                                    <p className="text-2xl font-bold tracking-tighter">DO RE MI FA...</p>
                                    <p className="text-xs opacity-60 italic">¡Dale al play en tu reproductor MIDI!</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-5 border-t border-white/5 flex flex-col sm:flex-row gap-4 items-center justify-between bg-slate-800/50">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-400 to-red-500 shadow-inner"></div>
                                <div>
                                    <div className="font-bold text-white text-sm">NaviDAM 2025</div>
                                    <div className="text-[10px] text-slate-400 uppercase tracking-widest">Hackathon Edition</div>
                                </div>
                            </div>
                            <div className="text-[11px] text-slate-400">Hecho con ❤️ para la comunidad</div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}