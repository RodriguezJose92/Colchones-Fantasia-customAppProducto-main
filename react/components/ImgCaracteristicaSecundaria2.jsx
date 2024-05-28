import React, {useState, useEffect} from 'react'

import { useProduct } from 'vtex.product-context';

const ImgCaracteristicaSecundaria2 = () => {
    const { product } = useProduct()

    const propiedadesImgCaracteristicaSecundaria2 = product?.properties
    const atributoImgCaracteristicaSecundaria2 = propiedadesImgCaracteristicaSecundaria2?.filter(function(element){
        return element?.name == "Imagen2  Infografía";
    });
    console.log("ImgCaracteristicaSecundaria2--:",propiedadesImgCaracteristicaSecundaria2);
    console.log(atributoImgCaracteristicaSecundaria2[0]?.values[0]);

    const valorAtributoImgCaracteristicaSecundaria2 = atributoImgCaracteristicaSecundaria2[0]?.values[0]

    console.log("atributo", valorAtributoImgCaracteristicaSecundaria2);

    const [data, setData] = useState(true)

    useEffect(() => {
        setData(valorAtributoImgCaracteristicaSecundaria2)
    }, [])

    return(
        valorAtributoImgCaracteristicaSecundaria2 === undefined ? <span></span>
        : 
        <img src={valorAtributoImgCaracteristicaSecundaria2} alt="Imagen Caracteristica Secundaria 2" className='vtex-store-components-3-x-ImgCaracteristicaSecundaria'/>
    )
}
export default ImgCaracteristicaSecundaria2
