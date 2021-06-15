import React from 'react'

const Ejemplo = () => {

    console.log('hola')

    const productos = [
        {id: 1, title: 'zapatillas nike', price: 500, qty: 3, category: 'zapatillas'},
        {id: 2, title: 'notebook asus', price: 4000, qty: 1, category: 'notebook'},
        {id: 3, title: 'zapatillas adidas', price: 700, qty: 7, category: 'zapatillas'},
        {id: 4, title: 'lampara', price: 50, qty: 15, category: 'iluminacion'}
    ]

    /* productos.map((elemento, indice) => {
        console.log(elemento.price)
        return true
    }) */
/* 
    const productosCaros = productos.filter((elemento) => elemento.category === 'zapatillas')

    console.log(productosCaros) */

    const precioTotal = productos.reduce((i, c) => i + c.qty * c.price ,0)

    console.log(precioTotal)


    return (
        <div>
            
        </div>
    )
}

export default Ejemplo
