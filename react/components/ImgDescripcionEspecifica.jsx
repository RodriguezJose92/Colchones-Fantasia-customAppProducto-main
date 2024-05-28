import React, { useState, useEffect } from 'react'
import { useProduct } from 'vtex.product-context';
import MudiExperience from './mudiExperience';

const ImgDescripcionEspecifica = () => {
    const { product } = useProduct()

    const propiedadesImgDescripcionEspecifica = product?.properties
    const atributoImgDescripcionEspecifica = propiedadesImgDescripcionEspecifica?.filter(function (element) {
        return element?.name == "Imagen Desc";
    });
    // console.log("revisar",product?.properties);
    console.log(atributoImgDescripcionEspecifica[0]?.values[0]);

    const valorAtributoImgDescripcionEspecifica = atributoImgDescripcionEspecifica[0]?.values[0]

    console.log("atributo", valorAtributoImgDescripcionEspecifica);

    const [data, setData] = useState(true)

    useEffect(() => {
        setData(valorAtributoImgDescripcionEspecifica)
    }, [])

    return (
        <>
            <img src={valorAtributoImgDescripcionEspecifica} alt="Imagen Descripcion Especifica" className='vtex-store-components-3-x-ImgDescripcionEspecifica' />
            <MudiExperience></MudiExperience>
        </>
    )
}
export default ImgDescripcionEspecifica
