import React, {useState, useEffect} from 'react'
import { useProduct } from 'vtex.product-context';


const TextoDescripcionEspecifica = () => {
    const { product } = useProduct()

    const propiedadesAutorPes = product?.properties
    const atributoAutorPes = propiedadesAutorPes?.filter(function(element){
        return element?.name == "Texto Desc";
    });
    console.log(product?.properties);

    const valorAtributo = atributoAutorPes != undefined ? atributoAutorPes[0]?.values[0] : undefined
    //console.log("Valor de la variable Bio:", valorAtributo)

    const [data, setData] = useState(true)

    useEffect(() => {
        setData(valorAtributo)
    }, [])

    return(
        valorAtributo === undefined ? <span></span>
        :
        <div className='contenidoHtml' dangerouslySetInnerHTML={{ __html: valorAtributo }}></div>
    )
}
export default TextoDescripcionEspecifica