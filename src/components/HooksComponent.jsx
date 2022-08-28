/* eslint-disable no-lone-blocks */
import { useState } from "react";

const Hooks = () => {
    const [novaIdade, setNovaIdade] = useState(28);

    const changeNewAge = () => {
        return (
            setNovaIdade(novaIdade + 1)
        );
    }

    const changeNewAgeSub = () => {
        return (
            setNovaIdade(novaIdade - 1)
        );
    }

    return (
        <div>
            <p>Sua idade atual com useState: {novaIdade}</p>
            <button onClick={changeNewAge}>Click para add +1 em idade</button>
            <button onClick={changeNewAgeSub}>Click para add -1 em idade</button>
        </div>
    );
}
export default Hooks;