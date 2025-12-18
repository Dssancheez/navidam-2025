import React from "react";

type TarjetasProps = {
    color?: string;
    colorBorde?: string;
    estiloPadding?: string;
    texto: string;
    emoji?: string;
    subtitulo: string;
}

export default function Tarjetas({color = '9b9b9b', colorBorde = '9b9b9b', estiloPadding = '10px 20px', texto , emoji,  subtitulo}: TarjetasProps){
    const TarjetaEstilos: React.CSSProperties = {
        backgroundColor: color,
        color: 'white',
        padding: estiloPadding,
        border: `2px solid ${colorBorde}`,
        borderRadius: '12px',
        cursor: 'pointer',





    }
return(
    <div style={TarjetaEstilos} className="shadow-sm">
        <p className="text-sm text-slate-600">{texto}</p>
        <p className="text-2xl font-bold">{emoji}</p>
        <p className="text-xs text-slate-500">{subtitulo}</p>
    </div>

)}
