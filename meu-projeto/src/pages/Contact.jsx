import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Obrigado, ${name || 'torcedor'}! Mensagem recebida.`);
    setName('');
    setMsg('');
  }

  return (
    <>
      <h1>Contato</h1>

      <p>Fale com a equipe do FutSystem para parcerias e sugestões.</p>

      <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:8,maxWidth:600,marginTop:12}}>
        <input
          placeholder="Seu nome"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          style={{padding:8,borderRadius:8,border:'1px solid rgba(255,255,255,0.06)',background:'transparent',color:'var(--text)'}}
        />
        <textarea
          placeholder="Sua mensagem"
          value={msg}
          onChange={(e)=>setMsg(e.target.value)}
          rows={5}
          style={{padding:8,borderRadius:8,border:'1px solid rgba(255,255,255,0.06)',background:'transparent',color:'var(--text)'}}
        />
        <button type="submit" style={{padding:10,borderRadius:8,border:'none',background:'var(--accent)',color:'#000',fontWeight:700,cursor:'pointer'}}>Enviar</button>
      </form>
    </>
  );
}

