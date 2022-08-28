const MeuNome = (props) =>{
    let nome = "Luiz";
    return (
      <>
        <h1>
            Meu nome é {nome}
            <br/>
            Seu nome é {props.x}
        </h1>
      </>
    );
}
export default MeuNome;