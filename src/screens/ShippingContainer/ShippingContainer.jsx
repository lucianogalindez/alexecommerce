import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { TiendaContext } from '../../context/TiendaContext'
import UserContext from '../../context/UserContext'
import { db } from '../../firebase'

const ShippingContainer = (props) => {

    const history = useHistory()

    const {user} = useContext(UserContext)
    const {cart} = useContext(TiendaContext)

    const [name, setName] = useState('')
    const [direccion, setDireccion] = useState('')
    const [postal, setPostal] = useState('')
    const [error, setError] = useState('')
    const [orderLoading, setOrderLoading] = useState(false)

    useEffect(() => {
        props.setActualLocation(window.location.pathname)
    }, [props])

    const createOrder = async () => {

        try {

            const order = {
                email: user.email,
                name, /* name: name */
                direccion,
                postal,
                cart,
                totalPrice: cart.reduce((i,c) => i+c.qty*c.price, 0),
                status: 'NOT PAID'
            }

            setOrderLoading(true)

            const newOrder = await db.collection('users').doc(user.email).collection('orders').add(order)
        
            setOrderLoading(false)

            history.push(`/placeorder/${newOrder.id}`)

        }catch(error){
            console.log(error)
            setOrderLoading(false)
        }

    }

    const handlerOrder = (e) => {
        e.preventDefault()

        setError('')

        if (name.trim() === '') {
            setError('name')
            return false
        }

        if (direccion.trim() === '') {
            setError('direccion')
            return false
        }

        if (postal.trim() === '') {
            setError('postal')
            return false
        }

        createOrder()

    }

    return (
        <div className='container mt-4'>

            <div className='row d-flex justify-content-center'>
                <div className='col-md-8'>
                    <form
                        className='d-flex flex-column align-items-center'
                        onSubmit={handlerOrder}
                    >
                        <h4 className='text-muted'>DATOS DE ENVIO</h4>

                        <input
                            type='text'
                            placeholder='Nombre Completo'
                            onChange={e => setName(e.target.value)}
                            value={name}
                            style={{borderColor: error === 'name' && 'red'}}
                        />
                        {error === 'name' && <span className='text-danger mb-1'>Ingrese un nombre correcto</span>}

                        <input
                            type='text'
                            placeholder='Direccion de envio'
                            onChange={e => setDireccion(e.target.value)}
                            value={direccion}
                            style={{borderColor: error === 'direccion' && 'red'}}
                        />
                        {error === 'direccion' && <span className='text-danger mb-1'>Ingrese una direccion correcta</span>}


                        <input
                            type='text'
                            placeholder='Codigo Postal'
                            onChange={e => setPostal(e.target.value)}
                            value={postal}
                            style={{borderColor: error === 'postal' && 'red'}}
                        /> 
                        {error === 'postal' && <span className='text-danger mb-1'>Ingrese un codigo postal correcto</span>}

                        {
                            orderLoading ?
                            (
                                <div className="fa-3x text-center my-2">
                                    <i className="fas fa-spinner fa-pulse text-primary"></i>
                                </div>
                            ) : (
                                <input
                                    type='submit'
                                    value='Continuar'
                                />
                            )
                        }   
                        

                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default ShippingContainer
