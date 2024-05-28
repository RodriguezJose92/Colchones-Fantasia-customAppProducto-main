import React, {useState, useEffect} from 'react'
import { useProduct } from 'vtex.product-context';


const DescripcionCorta = () => {
    const { product } = useProduct()
    const descripcionCorta = product?.items[0]?.complementName

    console.log("Datos del producto:", product)
    console.log("descripcion del producto:", descripcionCorta)

    
    const [data, setData] = useState(true)

    useEffect(() => {
        setData(descripcionCorta)
    }, [])

    return(
        descripcionCorta === undefined ? <span>No hay descripción</span>
        : 
        <span className='vtex-store-components-3-x-descripcionCorta'>{descripcionCorta}</span>
    )
}
export default DescripcionCorta