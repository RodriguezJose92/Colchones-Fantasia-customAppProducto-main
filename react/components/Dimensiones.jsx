import React, { useState, useEffect } from 'react';

import { useProduct } from 'vtex.product-context';

const Dimensiones = () => {

    const { product } = useProduct();

    const propiedadesDimensiones = product?.properties
    const atributoDimensiones = propiedadesDimensiones?.filter((element) => {
        return element?.name == "Dimensiones del  producto";
    });
    const valorDimensiones = atributoDimensiones[0]?.values[0];
    const [data, setData] = useState(true);

    useEffect(() => { setData(valorDimensiones) }, []);


    return (<>

        {valorDimensiones === undefined
            ? <span></span>
            : <span className='vtex-store-components-3-x-Dimensiones'>{valorDimensiones}</span>}

    </>
    );
};

export default Dimensiones;