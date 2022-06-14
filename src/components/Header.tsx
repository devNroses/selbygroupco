import React from 'react'
import 'animate.css'

const Header: React.FC = ({}) => <header className="header-wrapper">
    <div className="header-status animate__animated animate__zoomInDown animate__delay-1s">Work Availability</div>
    <div className="header-logo animate__animated animate__zoomInDown animate__delay-2s"><span>Selby Group Co.</span></div>
    <div className="header-social animate__animated animate__zoomInDown animate__delay-3s">
     <ul>
         <li>Twitter</li>
         <li>Instagram</li>
     </ul>
    </div>
</header>

export default Header