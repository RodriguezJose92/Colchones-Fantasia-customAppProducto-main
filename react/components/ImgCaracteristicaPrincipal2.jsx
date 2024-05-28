import React, {useState, useEffect} from 'react'

import { useProduct } from 'vtex.product-context';

const ImgCaracteristicaPrincipal2 = () => {
    const { product } = useProduct()

    const propiedadesImgCaracteristicaPrincipal2 = product?.properties
    const atributoImgCaracteristicaPrincipal2 = propiedadesImgCaracteristicaPrincipal2?.filter(function(element){
        return element?.name == "Imagen2";
    });
    // console.log("revisar",product?.properties);
    console.log(atributoImgCaracteristicaPrincipal2[0]?.values[0]);

    const valorAtributoImgCaracteristicaPrincipal2 = atributoImgCaracteristicaPrincipal2[0]?.values[0]

    console.log("atributo", valorAtributoImgCaracteristicaPrincipal2);

    const [data, setData] = useState(true)

    useEffect(() => {
        setData(valorAtributoImgCaracteristicaPrincipal2)
    }, [])

    return(
        valorAtributoImgCaracteristicaPrincipal2 === undefined ? <span></span>
        : 
        <img src={valorAtributoImgCaracteristicaPrincipal2} alt="Imagen Caracteristica Principal 2" className='vtex-store-components-3-x-ImgCaracteristicaPrincipal'/>
    )
}
export default ImgCaracteristicaPrincipal2