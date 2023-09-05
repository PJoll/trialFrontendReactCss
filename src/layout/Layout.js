import React from 'react'
import MenuBar from '../components/navigation/MenuBar'
import Footer from '../components/navigation/Footer'

import './Layout.css'

const Layout = (props) => {
    return(
        <React.Fragment>
            <MenuBar />

            <main className="main-content">
                {props.children}
            </main>

            <Footer/>
        </React.Fragment>
    );
}

export default Layout;