type BotonProps = {
    color?: string;
    colorBorde?: string;
    estiloPadding?: string;
    texto: string;
    onClick?: () => void;
}

export default function Boton ({color = '#007bff',colorBorde = '#0056b3', estiloPadding = '10px 20px', texto, onClick  }: BotonProps){
    const BotonEstilo = {

        backgroundColor: color,
        color: 'white',
        padding:estiloPadding,
        border: `2px solid ${colorBorde}`,
        borderRadius: '10px',
        cursor: 'pointer',



    };


    return (
        <button style={BotonEstilo} onClick={onClick}>
            {texto}
        </button>
    )
}