// import du lieu + css
import React from "react"
import './Navbar.css'
import SearchLogo from '../search.svg'
import {Link} from 'react-router-dom'

// navbar function component
function Navbar() {
    const [isbgBlack, setIsBgBlack] = React.useState(false)
    // Scroll style mau nav bar 
    React.useEffect(() => {
        // ham onscroll khi window.scrollY > 100 va background ko phai den => set state chuyen sang den
        // neu windown.scrollY < 100 va background la den thi => set state chuyen sang ko den nua
        const onScroll = () => {
            if (window.scrollY > 100 && !isbgBlack) {
                setIsBgBlack(true)
            } else if (window.scrollY <= 100 && isbgBlack) {
                setIsBgBlack(false)
            }
         }
     
         window.addEventListener('scroll', onScroll)

         // Remove even listener o componentWillUnmount
         return () => {
             window.removeEventListener('scroll', onScroll)
         }
     }, [isbgBlack])

    return (
        // Giao dien navbar + chuyen trang khi click nut
        <div className={`fixed-top d-flex justify-content-between align-items-center p-2 nav-style${isbgBlack ? ' bg-black' : ''}`}>
            <Link to={'/'}><h1 className='text-danger m-0'>Movie App</h1></Link>
            <Link to={'/search'}><img src={SearchLogo} style={{width: '36px', height: '36px'}} alt='' /></Link>
        </div>
    )
}

export default Navbar

