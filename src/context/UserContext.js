import React, { createContext, useEffect, useState } from 'react'
import { auth, db } from '../firebase'


export const UserContext = createContext()

export const UserProvider = (props) => {

    const userInitial = {
        name: null,
        email: null,
        image: null,
        active: null
    }

    const [user, setUser] = useState(userInitial)
    const [loadingUser, setLoadingUser] = useState(false)

    /* Detectar en todo momento en que estado esta el usuario */
    useEffect(() => {

        const getUser = () => {

            auth.onAuthStateChanged((authUser) => {

                console.log(authUser)
                
                if(authUser) {

                    setUser({
                        name: authUser.displayName || authUser.email.split('@')[0],
                        email: authUser.email,
                        image: authUser.photoURL || 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/768px-User_icon_2.svg.png',
                        active: true
                    })

                } else {

                    setUser({
                        name: null,
                        email: null,
                        image: null,
                        active: false
                    })

                }

            })

        }

        getUser()

    }, [])

    const registerUser = async (email, password, name) => {

        try {

            await auth.createUserWithEmailAndPassword(email, password)

            await db.collection('users').doc(email).set({
                email: email,
                name: name,
                image: 'https://thispersondoesnotexist.com/image'
            })

        }catch(error){
            console.log('soy yo', error)
        }

    }

    const loginUser = async (email, password) => {

        try {
            setLoadingUser(true)
            await auth.signInWithEmailAndPassword(email, password)
            setLoadingUser(false)
        }catch(error){
            setLoadingUser(false)
            console.log(error)
        }

    }

    const signOut = () => {
        auth.signOut()
    }

    return (
        <UserContext.Provider value={{registerUser, loginUser, user, signOut, loadingUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext
