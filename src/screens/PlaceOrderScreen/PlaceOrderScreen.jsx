import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import UserContext from '../../context/UserContext'
import { db } from '../../firebase'

const PlaceOrderScreen = () => {

    const [order, setOrder] = useState('')

    const {id} = useParams()
    const {user} = useContext(UserContext)

    useEffect(() => {

        const getOrder = async() => {
            try {

                if(user.active){
                    const dbOrder = await db
                    .collection('users')
                    .doc(user.email)
                    .collection('orders')
                    .doc(id)
                    .get()


                    setOrder({
                        id: dbOrder.id,
                        ...dbOrder.data()
                    })
                }

            }catch(error){
                console.log(error)
            }
        }

        getOrder()

    }, [id, user.active, user.email])

    return (
        <div className='container mt-3 container-placeorder'>
            <div className='row d-flex'>

                <div className='col-md-8'>
                    <div className='card p-3 mt-3 bg-ligth'>
                        <h5 className='card-title text-capitalize mb-3'>
                            Datos de envio
                        </h5>
                        <div>
                            <p className='mb-1 fw-bold'>
                                Nombre: <span className='fw-normal'>nombre de orden</span>
                            </p>
                            <p>
                                Domicilio: <span className='fw-normal'>argentina</span>
                            </p>
                        </div>
                    </div>

                    <div className='card p-3 mt-3 bg-light'>
                        <h5 className='card-title text-capitalize mb-3'>
                            Medio de pago
                        </h5>
                        <p className='mb-1 fw-bold'>
                            Metodo: 
                            <span className='fw-bold text-uppercase'>
                                Mercado Pago
                            </span>
                        </p>
                        <p className='mb-1 fw-bold'>
                            Estado:
                            <span className='fw-bold text-uppercase'>
                                Not paid
                            </span>
                        </p>
                    </div>
                    
                    <div className='card p-3 mt-3 bg-light'>
                        <h5 className='card-title text-capitalize mb-3'>
                            Detalles de la orden
                        </h5>
                        <div>
                            {
                                //ACA IR EL CARRITO
                            }
                        </div>
                    </div>

                </div>


                <div className='col-md-4'>
                    <div className='card mt-3 bg-light p-3'>
                        <div className='d-flex justify-content-between'>
                            <span className='fw-bold'>Subtotal</span>
                            <span>$ 40000</span>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <span className='fw-bold'>Descuento</span>
                            <span>$ 3000</span>
                        </div>
                        <hr/>
                        <div className='d-flex justify-content-between'>
                            <span className='fw-bold'>Total</span>
                            <span>$ 37000</span>
                        </div>
                    </div>
                </div>

            </div>

            
        </div>
    )
}

export default PlaceOrderScreen
