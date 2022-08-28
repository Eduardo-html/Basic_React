/* eslint-disable jsx-a11y/anchor-is-valid */
const MeuNome = (props) =>{
    let nome = "Luiz";
    return (
      <>
        <h1>
            Meu nome é {nome}
            <br/>
            Seu nome é {props.x}
        </h1>
        <br/>
        <br/>
          <a to="https://github.com/Eduardo-html/Basic_React">
           GITHUB
          </a>
      </>
    );
}
export default MeuNome;