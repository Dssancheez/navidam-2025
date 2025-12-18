import React from 'react';

type BotonProps = {
    color?: string;
    colorBorde?: string;
    estiloPadding?: string;
    texto: string;
    onClick?: () => void;
}

export default function Boton({color = '#007bff', colorBorde = 'white', estiloPadding = '10px 20px', texto, onClick}: BotonProps) {
    const BotonEstilo: React.CSSProperties = {
        backgroundColor: color,
        color: 'white',
        padding: estiloPadding,
        border: `2px solid ${colorBorde}`,
        borderRadius: '12px',
        cursor: 'pointer',
    };

    return (
        <button style={BotonEstilo} onClick={onClick}>
            {texto}
        </button>
    );
}