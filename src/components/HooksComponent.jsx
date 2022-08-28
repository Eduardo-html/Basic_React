/* eslint-disable no-lone-blocks */
import { useState } from "react";

const Hooks = () => {
    let idade = 27;
    const [novaIdade, setNovaIdade] = useState(28);

    const changeNewAge = () => {
        return (
            setNovaIdade(novaIdade + 1)
        );
    }

    return (
        <div>
            <p>Sua idade anterior com váriavel: {idade}</p>
            <p>Sua idade atual com useState: {novaIdade}</p>
            <button onClick={changeNewAge}>Click para add +1 em idade</button>
        </div>
    );
}
export default Hooks;