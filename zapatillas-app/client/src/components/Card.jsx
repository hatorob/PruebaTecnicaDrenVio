const Card = ({name, nombre, brand, price, specialPrices}) => {
    console.log(specialPrices);
    return ( 
        <div className=" bg-green-300 p-7 rounded-xl shadow-lg flex flex-col">
            {
                (name) ? <div>
                             <p className=" text-center"> {name} </p>
                         </div>
                : null
            }
            {
                (nombre) ? <div>
                                <p className=" text-center"> {nombre} </p>
                        </div>
                : null
            }
            {
                (brand) ? <span className=" text-white">Marca: {brand}</span> : null
            }
            {
                (price) ? <p className=" text-red-500"> Precio: ${price} </p> : null
            }
            {
                (specialPrices) ? <p className="text-red-500">Precio Especial: ${Object.values(specialPrices)[0]}</p> : null
            }
        </div>
     );
}
 
export default Card;

/* 
key={product.id}
                                                name={product.nombre}
                                                brand={product.brand || null}
                                                price={product.precioBase}
                                                specialPrices={product.specialPrices || null}
*/