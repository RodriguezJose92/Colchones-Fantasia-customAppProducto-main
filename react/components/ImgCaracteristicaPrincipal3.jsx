import React, {useState, useEffect} from 'react'

import { useProduct } from 'vtex.product-context';

const ImgCaracteristicaPrincipal3 = () => {
    const { product } = useProduct()

    const propiedadesImgCaracteristicaPrincipal3 = product?.properties
    const atributoImgCaracteristicaPrincipal3 = propiedadesImgCaracteristicaPrincipal3?.filter(function(element){
        return element?.name == "Imagen3";
    });
    // console.log("revisar",product?.properties);
    console.log(atributoImgCaracteristicaPrincipal3[0]?.values[0]);

    const valorAtributoImgCaracteristicaPrincipal3 = atributoImgCaracteristicaPrincipal3[0]?.values[0]

    console.log("atributo", valorAtributoImgCaracteristicaPrincipal3);

    const [data, setData] = useState(true)

    useEffect(() => {
        setData(valorAtributoImgCaracteristicaPrincipal3)
    }, [])

    return(
        valorAtributoImgCaracteristicaPrincipal3 === undefined ? <span></span>
        : 
        <img src={valorAtributoImgCaracteristicaPrincipal3} alt="Imagen Caracteristica Principal 3" className='vtex-store-components-3-x-ImgCaracteristicaPrincipal'/>
    )
}
export default ImgCaracteristicaPrincipal3