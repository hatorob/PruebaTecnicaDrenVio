import Card from "./Card";

const Cards = ({products}) => {
    console.log(products);
    return ( 
        <div className=" w-[80%] my-0 mx-auto mt-10 grid grid-cols-3 gap-10 mb-10">
            {
                products?.map( (product, index) => <Card key={index}
                                                nombre={product.nombre}
                                                name={product.name || null}
                                                brand={product.brand || null}
                                                price={product.precioBase}
                                                specialPrices={product.specialPrices || null}
                                         /> 
                )
            }
            
        </div>
     );
}
 
export default Cards;