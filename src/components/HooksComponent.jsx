/* eslint-disable no-lone-blocks */
import { useState } from "react";

const Hooks = () => {
    let idade = 27;
    const [novaIdade, setNovaIdade] = useState(28);

    const changeAge = () => {
        return(
            idade = 28
        );
    }

    const changeNewAge = () => {
        return (
            setNovaIdade(29)
        );
    }

    {/*useEffect(() => {
        console.log("Usou o Effect")
    });*/}

    return (
        <div>
            <p>Sua idade: {idade}</p>
            <button onClick={changeAge}>Click para adicionar idade</button>
            <p>Sua idade: {novaIdade}</p>
            <button onClick={changeNewAge}>Click para alterar idade</button>
            
        </div>
    );
}
export default Hooks;