const RenderCond = ({ x, y, z }) => {
    return (
        <div>
            <hr/>
            <h2>
                 Condicional e Props
            </h2>
            <p>Valor de x é igual à {x}</p>
            { x < z && "Chame o seu responsável."}
            { x < z ? "Você é menor de idade!" : "Você é maior de idade!"}
            <br/>
            <p>Valor de y é igual à {y}</p>
            { y < z && "Chame o seu responsável."}
            { y < z ? "Você é menor de idade!" : "Você é maior de idade!"}

        </div>
    );
}
export default RenderCond;