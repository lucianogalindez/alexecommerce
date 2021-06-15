import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import { Link } from 'react-router-dom'

const ItemList = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const getProducts = async () => {

            setLoading(true)

            const data = await db.collection('products').get()

            setLoading(false)

            const results = data.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })

            setProducts(results)

        }

        getProducts()

    }, [])


    if(loading) {

        return (
            <div className="fa-3x text-center">
                <i className="fas fa-spinner fa-pulse text-primary"></i>
            </div>
        )

    } else {

        return (
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mb-5'> {/* g4?? */}
            
                {
                    products.map(item => (
                        
                            <div className='col' key={item.id}>
                                <Link to={`/product/${item.id}`} className='text-dark text-decoration-none'>
                                <div className='card'>
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        height='200'
                                        className='card-img-top my-3'
                                        style={{objectFit: 'contain'}}
                                    /> 

                                    <div className='card-body' style={{backgroundColor: '#e3f2fd'}}>
                                        <h5 className='card-title'>{item.title}</h5>
                                        <div className='d-flex flex-column'>
                                            <p className='font-weight-bold'>$ {item.price}</p>
                                            <span className='small h5'>Stock: {item.stock}</span>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        
                    ))
                }

            </div>
        )

    }
    
}

export default ItemList
