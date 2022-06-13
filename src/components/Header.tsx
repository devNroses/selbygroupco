import React from 'react'
import 'animate.css'

const Header: React.FC = ({}) => <header className="header-wrapper animate__animated animate__bounce ">
    <div className="header-status">Work Availability</div>
    <div className="header-logo"><span>Selby Group Co.</span></div>
    <div className="header-social">
     <ul>
         <li>Twitter</li>
         <li>Instagram</li>
     </ul>
    </div>
</header>

export default Header