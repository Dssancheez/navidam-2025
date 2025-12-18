import Boton from "@/Componentes/Boton.tsx";
import { Link } from "react-router-dom";

export default function Header() {

    return (
        <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
                <Link to={"/"} className="flex items-center gap-3">
                    <div
                        className="h-10 w-10 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shadow-lg">
                        <span className="text-xl">🎅</span>
                    </div>
                    <div className="leading-tight">
                        <p className="text-xs text-white/70">Postales digitales con música</p>
                        <p className="font-extrabold tracking-tight">NaviDAM</p>
                    </div>
                </Link>

                <nav className="flex items-center gap-2">
                    <Boton
                        texto="personas"
                        color='#0000'
                        colorBorde='#000000'

                    />
                    <Boton
                        texto="Alta"
                        color='#0000'

                        colorBorde='#000000'

                    />
                    <Boton
                        texto="Enviar postal"
                        color='#ff0000'
                        colorBorde='#000000'

                    />
                </nav>
            </div>
        </header>
    )
}