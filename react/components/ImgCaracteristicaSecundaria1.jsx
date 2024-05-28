import React, {useState, useEffect} from 'react'

import { useProduct } from 'vtex.product-context';

const ImgCaracteristicaSecundaria1 = () => {
    const { product } = useProduct()

    const propiedadesImgCaracteristicaSecundaria1 = product?.properties
    const atributoImgCaracteristicaSecundaria1 = propiedadesImgCaracteristicaSecundaria1?.filter(function(element){
        return element?.name == "Imagen1 Infografía";
    });
    // console.log("revisar",product?.properties);
    console.log(atributoImgCaracteristicaSecundaria1[0]?.values[0]);

    const valorAtributoImgCaracteristicaSecundaria1 = atributoImgCaracteristicaSecundaria1[0]?.values[0]

    console.log("atributo", valorAtributoImgCaracteristicaSecundaria1);

    const [data, setData] = useState(true)

    useEffect(() => {
        setData(valorAtributoImgCaracteristicaSecundaria1)
    }, [])

    return(
        valorAtributoImgCaracteristicaSecundaria1 === undefined ? <span></span>
        : 
        <img src={valorAtributoImgCaracteristicaSecundaria1} alt="Imagen Caracteristica Secundaria 1" className='vtex-store-components-3-x-ImgCaracteristicaSecundaria'/>
    )
}
export default ImgCaracteristicaSecundaria1
