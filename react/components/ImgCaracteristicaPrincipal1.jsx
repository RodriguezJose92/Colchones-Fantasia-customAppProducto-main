import React, {useState, useEffect} from 'react'

import { useProduct } from 'vtex.product-context';

const ImgCaracteristicaPrincipal1 = () => {
    const { product } = useProduct()

    const propiedadesImgCaracteristicaPrincipal1 = product?.properties
    const atributoImgCaracteristicaPrincipal1 = propiedadesImgCaracteristicaPrincipal1?.filter(function(element){
        return element?.name == "Imagen1";
    });
    // console.log("revisar",product?.properties);
    console.log(atributoImgCaracteristicaPrincipal1[0]?.values[0]);

    const valorAtributoImgCaracteristicaPrincipal1 = atributoImgCaracteristicaPrincipal1[0]?.values[0]

    console.log("atributo", valorAtributoImgCaracteristicaPrincipal1);

    const [data, setData] = useState(true)

    useEffect(() => {
        setData(valorAtributoImgCaracteristicaPrincipal1)
    }, [])

    return(
        valorAtributoImgCaracteristicaPrincipal1 === undefined ? <span></span>
        : 
        <img src={valorAtributoImgCaracteristicaPrincipal1} alt="Imagen Caracteristica Principal 1" className='vtex-store-components-3-x-ImgCaracteristicaPrincipal'/>
    )
}
export default ImgCaracteristicaPrincipal1
