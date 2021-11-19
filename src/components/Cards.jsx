import personagens from '../data/database'

const Cards = () => {
    return (
        <>
            {personagens.map((personagem)=>
                 <div key={personagem.id}>
                 <h2>{personagem.nome}</h2>
                 <p>{personagem.poder}</p>
                 <img src={personagem.capa} alt={personagem.nome}/>
             </div>
            )}
        </>
    )
}

export default Cards