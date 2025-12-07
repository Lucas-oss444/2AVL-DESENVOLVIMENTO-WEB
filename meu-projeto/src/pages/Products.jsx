import React from 'react';

const teams = [
  {
    name: 'Flamengo',
    city: 'Rio de Janeiro - RJ',
    stadium: 'Maracanã',
    founded: 1895,
    colors: 'Vermelho e Preto'
  },
  {
    name: 'Fluminense',
    city: 'Rio de Janeiro - RJ',
    stadium: 'Maracanã',
    founded: 1902,
    colors: 'Verde, Branco e Grená'
  },
  {
    name: 'Corinthians',
    city: 'São Paulo - SP',
    stadium: 'Neo Química Arena',
    founded: 1910,
    colors: 'Preto e Branco'
  },
  {
    name: 'São Paulo',
    city: 'São Paulo - SP',
    stadium: 'Morumbis',
    founded: 1930,
    colors: 'Vermelho, Branco e Preto'
  },
  {
    name: 'Remo',
    city: 'Belém - PA',
    stadium: 'Baenão',
    founded: 1905,
    colors: 'Azul e Branco'
  },
  {
    name: 'Cruzeiro',
    city: 'Belo Horizonte - MG',
    stadium: 'Mineirão',
    founded: 1921,
    colors: 'Azul e Branco'
  }
];

export default function Products() {
  return (
    <>
      <h1>Times</h1>

      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:16}}>
        {teams.map((t) => (
          <div key={t.name} style={{background:'rgba(255,255,255,0.05)',padding:16,borderRadius:12}}>
            <h3>{t.name}</h3>
            <p>Cidade: {t.city}</p>
            <p>Estádio: {t.stadium}</p>
            <p>Fundação: {t.founded}</p>
            <p>Cores: {t.colors}</p>
          </div>
        ))}
      </div>
    </>
  );
}
