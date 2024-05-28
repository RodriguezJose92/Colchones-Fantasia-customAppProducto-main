import React, {useState, useEffect} from 'react'

import { useProduct } from 'vtex.product-context';

const ImgCaracteristicaPrincipal4 = () => {
    const { product } = useProduct()

    const propiedadesImgCaracteristicaPrincipal4 = product?.properties
    const atributoImgCaracteristicaPrincipal4 = propiedadesImgCaracteristicaPrincipal4?.filter(function(element){
        return element?.name == "Imagen4";
    });
    // console.log("revisar",product?.properties);
    console.log(atributoImgCaracteristicaPrincipal4[0]?.values[0]);

    const valorAtributoImgCaracteristicaPrincipal4 = atributoImgCaracteristicaPrincipal4[0]?.values[0]

    console.log("atributo", valorAtributoImgCaracteristicaPrincipal4);

    const [data, setData] = useState(true)

    useEffect(() => {
        setData(valorAtributoImgCaracteristicaPrincipal4)
    }, [])

    return(
        valorAtributoImgCaracteristicaPrincipal4 === undefined ? <span></span>
        : 
        <img src={valorAtributoImgCaracteristicaPrincipal4} alt="Imagen Caracteristica Principal 4" className='vtex-store-components-3-x-ImgCaracteristicaPrincipal'/>
    )
}
export default ImgCaracteristicaPrincipal4