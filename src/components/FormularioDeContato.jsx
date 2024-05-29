import React, { useState } from 'react';

function FormularioDeContato() {
  const [formValues, setFormValues] = useState({
    nome: '',
    contato: '',
    mensagem: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let jsonToSend = JSON.stringify(formValues);
    console.log(`O seguinte JSON será enviado via HTTP POST para o back-end: ${jsonToSend}`);
    alert('Formulário enviado com sucesso!');
  };

  return (
    <form className="formulario-de-contato" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formValues.nome}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="contato">Contato:</label>
        <input
          type="text"
          id="contato"
          name="contato"
          value={formValues.contato}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="mensagem">Mensagem:</label>
        <textarea
          id="mensagem"
          name="mensagem"
          value={formValues.mensagem}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioDeContato;