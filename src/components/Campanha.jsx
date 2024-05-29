import React from 'react';
import styles from './Campanha.module.css';

function Campanha({ mes }) {
  let mensagem = '';
  let classeCor = '';

  switch (mes.toLowerCase()) {
    case 'setembro':
      mensagem = 'Prevenção ao suicídio';
      classeCor = styles.setembro;
      break;
    case 'outubro':
      mensagem = 'Conscientização sobre o câncer de mama';
      classeCor = styles.outubro;
      break;
    case 'novembro':
      mensagem = 'Prevenção e combate ao câncer de próstata';
      classeCor = styles.novembro;
      break;
    default:
      mensagem = 'Mês não especificado para campanha';
      classeCor = '';
  }

  return (
    <div className={`${styles.tarja} ${classeCor}`}>
      {mensagem}
    </div>
  );
}

export default Campanha;