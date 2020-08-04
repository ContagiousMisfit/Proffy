import React from 'react';

import Whatsapp from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {

    return (

        <article className="teacher-item">
        <header>
            <img src="https://avatars0.githubusercontent.com/u/52979585?s=460&u=ea2f6044cbcef53f81a3e120f22056d7f4c680af&v=4" alt="Isabela foto"></img>
            <div>
                <strong>Isabela Caovila Baldim</strong>
                <span>Sniper PR0 Valorant</span>
            </div>
        </header>
        <p>
        Cansou de morrer com 1 tap pro inimigo de VANDAL? <br/>
        Não aguenta mais perder um x1, mesmo com o time inimigo fazendo eco e você gastando tudo?
        <br/>Já está esgotado de ouvir um "Mas você tá jogando sério?" do time inimigo no chat depois de ter morrido 24 vezes? 
        <br/>Aprenda comigo como fazer tudo isso, gastando muito mais. Adquira já sua guia de AWP.
        </p>
        <footer>
            <p>Preço/hora
            <strong>R$ 100,00
            </strong>
            </p>
            <button type="button">
                <img src={Whatsapp} alt="WhatsApp"></img>
                Entrar em contato
            </button>
        </footer>
    </article>

    );
    
}

export default TeacherItem;