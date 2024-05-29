import React from 'react';
import styles from './Campanha.module.css';

function Campanha({ mes }) {
  let mensagem = '';
  let classeCor = '';

  switch (mes.toLowerCase()) {
    case 'outubro':
      mensagem = 'Prevenção e combate ao câncer de mama';
      classeCor = styles.outubro;
      break;
    case 'novembro':
      mensagem = 'Prevenção e combate ao câncer de próstata';
      classeCor = styles.novembro;
      break;
    case 'dezembro':
      mensagem = 'Prevenção e combate ao câncer de pele';
      classeCor = styles.dezembro;
      break;
    default:
      mensagem = 'Campanha não identificada, tente novamente';
      classeCor = '';
  }

  return (
    <div className={`${styles.tarja} ${classeCor}`}>
      {mensagem}
    </div>
  );
}

export default Campanha;