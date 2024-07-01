import Link from "next/link"


let Botao = (props) => {

    return (
        <nav className="text-gray-700 p-4 shadow-top absolute bottom-0 left-0 w-full">
            <div className="text-center flex justify-center items-center">
                <button
                    className="w-full text-white rounded-lg p-2.5 "
                    style={{
                        maxWidth: "327px", 
                        height: "52px",
                        borderRadius: '24px',
                        backgroundColor: '#0354EA',
                        fontSize: '16px',
                        fontWeight: 600
                    }}
                >
                    <a href={props.caminho}>
                        <span>{props.titulo}</span>
                    </a>
                </button>

            </div>
        </nav>
    )
}

export default Botao
