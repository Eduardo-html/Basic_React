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
        <h1>
          <p><strong><u>GITHUB</u></strong></p>
          <a>https://github.com/Eduardo-html/Basic_React</a>
        </h1>
      </>
    );
}
export default MeuNome;