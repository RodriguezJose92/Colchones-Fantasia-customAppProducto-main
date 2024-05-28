import React, {useState, useEffect} from 'react'

import { useProduct } from 'vtex.product-context';

const VerGarantia = () => {
    const { product } = useProduct()

    const propiedadesVerGarantia = product?.properties
    const atributoVerGarantia = propiedadesVerGarantia?.filter(function(element){
        return element?.name == "Url Garantía";
    });
     console.log(product?.properties);
    // console.log(atributoURLFichaTecnica[0]?.values[0]);

    const valorAtributoVerGarantia = atributoVerGarantia[0]?.values[0]

    console.log(valorAtributoVerGarantia);

    const [data, setData] = useState(true)

    useEffect(() => {
        setData(valorAtributoVerGarantia)
    }, [])

    return(
        valorAtributoVerGarantia === undefined ? <span></span>
        : 
        <span className='vtex-store-components-3-x-VerGarantia'><a href={valorAtributoVerGarantia} target='Ver Garantia' className='vtex-store-components-3-x-VerGarantia--Link'>¡Te invitamos a leer el certificado de Garantia!</a></span>
    )
}
export default VerGarantia