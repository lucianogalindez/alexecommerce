import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/UserContext'

const Navbar = () => {

    const { signOut, user } = useContext(UserContext)

    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#e3f2fd'}}>
            <div className="container-fluid">
                <Link to='/'>
                    <img src='https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_shopping-512.png' alt='logo' height='40' className='mx-1'/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">

                    {
                        user.active ? (
                            <span
                                className='nav-link'
                                aria-current='page'
                                onClick={signOut}
                                style={{cursor: 'pointer'}}
                            >
                                Salir
                            </span>
                        ) :
                        (
                            <Link to='/login' className="nav-link active" aria-current="page">Login</Link>
                        )
                    }

                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="/#">Action</a></li>
                        <li><a className="dropdown-item" href="/#">Another action</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="/#">Something else here</a></li>
                    </ul>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar