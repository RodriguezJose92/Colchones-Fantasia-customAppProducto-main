import React, {useState, useEffect} from 'react'

import { useProduct } from 'vtex.product-context';

const ImgCaracteristicaSecundaria3 = () => {
    const { product } = useProduct()

    const propiedadesImgCaracteristicaSecundaria3 = product?.properties
    const atributoImgCaracteristicaSecundaria3 = propiedadesImgCaracteristicaSecundaria3?.filter(function(element){
        return element?.name == "Imagen3  Infografía";
    });
    // console.log("revisar",product?.properties);
    console.log(atributoImgCaracteristicaSecundaria3[0]?.values[0]);

    const valorAtributoImgCaracteristicaSecundaria3 = atributoImgCaracteristicaSecundaria3[0]?.values[0]

    console.log("atributo", valorAtributoImgCaracteristicaSecundaria3);

    const [data, setData] = useState(true)

    useEffect(() => {
        setData(valorAtributoImgCaracteristicaSecundaria3)
    }, [])

    return(
        valorAtributoImgCaracteristicaSecundaria3 === undefined ? <span></span>
        : 
        <img src={valorAtributoImgCaracteristicaSecundaria3} alt="Imagen Caracteristica Secundaria 3" className='vtex-store-components-3-x-ImgCaracteristicaSecundaria'/>
    )
}
export default ImgCaracteristicaSecundaria3
