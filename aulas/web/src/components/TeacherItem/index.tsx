import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/38982851?s=460&u=e240e4d85995476b794e23532884c0a2b700b653&v=4" alt="Deyvison J Paula" />
        <div>
          <strong>Deyvison J Paula</strong>
          <span>Eterno Estudante</span>
        </div>
      </header>
      <p>
        Profissional em realizar cursos
      <br /> <br />
      Desde 2008 fazendo curso, inicialmente em Administração depois mais de 10 anos de computação.
    </p>

      <footer>
        <p>
          Preço/hora
        <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
        Entrar em contato
      </button>

      </footer>
    </article>
  )
}

export default TeacherItem;