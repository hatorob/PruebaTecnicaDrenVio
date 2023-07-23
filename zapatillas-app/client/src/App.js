import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts, getPrice } from './redux/actions';
import { useSelector } from 'react-redux';

import Cards from './components/Cards';

function App() {

  const [ viewProducts, setViewProducts ] = useState(false);
  const [ viewPrice, setViewPrice ] = useState(false);
  const [ formData, setFormData ] = useState({
    id: "",
    name: "",
  })
  const dispatch = useDispatch();
  let productsData = useSelector( state => state.products );
  let price = useSelector( state => state.price );

  const handleClick = () => {
    dispatch(getProducts());
    setViewProducts(true);
    setViewPrice(false);
  }

  const handleClear = () => {
    setViewProducts(false);
    setViewPrice(true);
  }

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getPrice(formData.id, formData.name));
  }
  
 /*  console.log("productsData",productsData);
  console.log("price",price); */

  return (
    <div className="App">
      <h1 className=' text-center text-5xl mt-10'>Sneakers store</h1>
      <button className=' border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white p-2 rounded-md mt-4 transition' onClick={handleClick}>Productos en Stocke</button>
      <button className=' border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white p-2 rounded-md mt-4 ml-4' onClick={handleClear}>Buscar precio por usuario</button>
      
      {
        (viewProducts) ?
          <Cards products={productsData} />
        : null
      }
      {
        (viewPrice) ? 
          <div className=' mt-10 w-[40%] mx-auto'>
            <form  className=' flex flex-col' onSubmit={handleSubmit}>
              <div className='mt-5'>
                <label>Id del usuario</label>
                <br />
                <input type='text' name='id' placeholder=' id user' onChange={handleChange}></input>
              </div>
              <div className=' mt-5'>
                <label>Nombre del producto</label>
                <br />
                <input type='text' name='name' placeholder=' nombre del producto' onChange={handleChange}></input>
              </div>
              <button type='submit' className=' mt-5 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white p-2 rounded-md transition'>Buscar precio</button>
            </form>
            <div className=' mt-5'>
              { (price) ? <span className=' bg-blue-300 p-2'>El precio de este producto es: ${price}</span> : null}
            </div>
          </div>
        : null
      }

    </div>
  );
}

export default App;
