const RenderCond = ({ x, y, z }) => {
    return (
        <div>
            <hr/>
            <h2>
                 Condicional e Props
            </h2>
            { x < z && "Chame o seu responsável."}
            <br/>
            { x < z ? "Você é menor de idade!" : "Você é maior de idade!"}
            <p>Valor de y é igual à {y}</p>

        </div>
    );
}
export default RenderCond;