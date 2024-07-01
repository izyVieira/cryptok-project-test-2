'use client'
import { useRouter } from 'next/navigation';
import Image from "next/image";

const Contatos = () => {
    const router = useRouter();

    const contatos = [
        {
            id: 1,
            nome: 'Bianca',
            imgSrc: '/images/people.png',
            codWallet: '0x1544848sdf478f5g7d8d5f4s...',
        },
        {
            id: 2,
            nome: 'Bruna',
            imgSrc: '/images/people.png',
            codWallet: '0x1544848sdf478f5g7d8d5f4s...',
        },
        {
            id: 3,
            nome: 'João',
            imgSrc: '/images/people.png',
            codWallet: '0x1544848sdf478f5g7d8d5f4s...',
        },
        {
            id: 4,
            nome: 'Gustavo',
            imgSrc: '/images/people.png',
            codWallet: '0x1544848sdf478f5g7d8d5f4s...',
        },
        {
            id: 5,
            nome: 'Bruno',
            imgSrc: '/images/people.png',
            codWallet: '0x1544848sdf478f5g7d8d5f4s...',
        },
        {
            id: 6,
            nome: 'Maria',
            imgSrc: '/images/people.png',
            codWallet: '0x1544848sdf478f5g7d8d5f4s...',
        },
    ];

    const handleClick = (retContato) => {
        router.push(`/sis/datails?id=${retContato.id}&nome=${retContato.nome}&imgSrc=${retContato.imgSrc}&codWallet=${retContato.codWallet}`);
    };

    return (
        <div className=''>
            <ul>
                {contatos.map((retContato) => (
                    <li 
                        key={retContato.id} 
                        onClick={() => handleClick(retContato)}
                        className="flex h-14 justify-start items-center p-4 cursor-pointer hover:bg-gray-100"
                    >
                        <div className="flex items-center gap-6">
                            <Image
                                src={retContato.imgSrc}
                                alt={retContato.nome}
                                width={40}
                                height={40}
                                className="mx-auto"
                            />
                            <div className="flex flex-col justify-end">
                                <span className="text-black font-bold text-sm">{retContato.nome}</span>
                                <span className="text-gray-500 text-xs">{retContato.codWallet}</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Contatos;
