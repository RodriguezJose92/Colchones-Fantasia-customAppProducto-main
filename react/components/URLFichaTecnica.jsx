import React, {useState, useEffect} from 'react'

import { useProduct } from 'vtex.product-context';

const URLFichaTecnica = () => {
    const { product } = useProduct()

    const propiedadesURLFichaTecnica = product?.properties
    const atributoURLFichaTecnica = propiedadesURLFichaTecnica?.filter(function(element){
        return element?.name == "URL ficha técnica";
    });
     console.log(product?.properties);
    // console.log(atributoURLFichaTecnica[0]?.values[0]);

    const valorAtributo = atributoURLFichaTecnica[0]?.values[0]

    console.log(valorAtributo);

    const [data, setData] = useState(true)

    useEffect(() => {
        setData(valorAtributo)
    }, [])

    return(
        valorAtributo === undefined ? <span></span>
        : 
        <span className='vtex-store-components-3-x-URLFichaTecnica'><a href={valorAtributo} target='FichaTecnica' className='vtex-store-components-3-x-URLFichaTecnica--Link'>Descargar manual de uso</a></span>
    )
}
export default URLFichaTecnica