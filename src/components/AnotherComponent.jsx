const AnotherComponent = () => {
    const handleClick = () =>{
        console.log("Clickou no Botão")
    }
  return (
    <div>
      <hr/>
      <h2>Evento onClick</h2>
      <p><u>Abra o console do navegador com f12</u></p>
      <button onClick={handleClick}>Evento de click</button>
      <br/>
      <button onClick={() => console.log("Clickou dentro do Elemento")}>Evento no Elemento</button>
    </div>
  );
};

export default AnotherComponent;
