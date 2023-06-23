import React, { useEffect, useState } from 'react'

const ProductList = () => {
    const [ products, setProducts ] = useState<string[]>([])

    useEffect( () => {
        console.log("Fectching from server...")
        setProducts( [ 'Clothing', "Household" ] )
    }, [] )


  return (
    <div>ProductList</div>
  )
}

export default ProductList