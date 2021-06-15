import React, { createContext, useEffect, useState } from 'react'

export const TiendaContext = createContext() //creas tu contexto

export const TiendaProvider = (props) => {

    const [cart, setCart] = useState(
        localStorage.getItem('cart') !== null ?
        JSON.parse(localStorage.getItem('cart')) :
        []
    )

    useEffect(() => {

        /*
            1 - SETITEM (PARA AGREGAR ELEMENTOS AL LS)
            2 - GETITEM (PARA RECUPERAR ELEMENTOS DEL LS)
            3 - JSON.STRINGIFY (OBJETO => STRING)
            4 - JSON.PARSE  (STRING => OBJETO)
        */

        localStorage.setItem('cart', JSON.stringify(cart))

    }, [cart])

    const addCart = (product) => {

        //verificar que ese producto ya no este en nuestro carrito
        const existItem = cart.find(item => item.id === product.id)

        //

        if(existItem) {

            const arrayActualizado = cart.map(function(item){
                if(item.id === existItem.id) {
                    return product
                }else{
                    return item
                }
            })

            setCart(arrayActualizado)

           /*  cart.map(item => item.id === existItem.id ? product ) */

        }else{

            setCart([
                ...cart, product
            ])

        }


    }

    const removeItem = (product) => {
            setCart(cart.filter(item => item.id !== product.id))
    }

    return (
        <TiendaContext.Provider value={{addCart, cart, removeItem}}>
            {props.children}
        </TiendaContext.Provider>
    )
}
