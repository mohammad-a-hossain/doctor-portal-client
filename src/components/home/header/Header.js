import React from 'react'
import BusinessInfo from '../businessInfo/BusinessInfo'
import HeaderMain from '../headerMain/HeaderMain'
import Navigation from '../navber/Navigation'
import  './header.css'

 const Header = () => {
    return (
        <div className='containerOne'>
           <Navigation></Navigation>
           <HeaderMain></HeaderMain>
           <BusinessInfo></BusinessInfo>
        </div>
    )
}
export default Header