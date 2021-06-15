import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { TiendaContext } from '../../context/TiendaContext'
import './Counter.css'

const Counter = ({product}) => {

    const {addCart} = useContext(TiendaContext)

    const [items, setItems] = useState('')
    const [inCart, setInCart] = useState(false)

    const addItems = () => {
        if (items < product.stock) {
            setItems(Number(items) + 1)
        }
    }

    const removeItems = () => {
        if (items > 0) {
            setItems(Number(items) - 1)
        }
    }

    const addToCart = () => {

        if (items <= 0) {
            alert('agrega productos para continuar')
            return false
        }

        if (items === '') {
            alert('agrega productos para continuar')
            return false
        }

        if (items > product.stock) {
            alert('no existe suficiente stock')
            return false
        }

        const order = {
            qty: items,
            ...product
        }

        addCart(order)
        setInCart(true)

    }

    return (
        <div className='counter my-4'>

            <div className='counter_cart d-flex justify-content-start align-items-center'>

                <div className='w-100 d-flex align-items-center counter_item'>

                    <i className="far fa-minus-square plus" onClick={removeItems}></i>

                    <input
                        className='counter_input'
                        type='number'
                        placeholder='0'
                        value={items}
                        onChange={e => setItems(e.target.value)}
                    />

                    <i className="far fa-plus-square plus" onClick={addItems}></i>

                </div>

                <div className='ms-3'>Stock: {product?.stock}</div>

            </div>

            <div className='mt-4 align-items-center w-100'>

                {
                    inCart ?
                    (
                        <div>
                            <Link to='/cart'>
                                <button className='btn btn-outline-primary text-uppercase my-2 px-4 w-100'>
                                    Finalizar Compra
                                </button>
                            </Link>

                            <Link to='/'>
                                <button className='btn btn-outline-secondary text-uppercase my-2 px-4 w-100'>
                                    Continuar Comprando
                                </button>
                            </Link>
                        </div>
                    ) :
                    (
                        <button className='btn btn-primary text-uppercase my-2 px4 w-100' onClick={() => addToCart()}>
                            Agregar a carrito
                        </button>
                    )
                }

                
            </div>
            
        </div>
    )
}

export default Counter
