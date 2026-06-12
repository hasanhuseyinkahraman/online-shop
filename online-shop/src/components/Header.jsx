import { FaBasketballBall } from "react-icons/fa";
import { Link } from 'react-router';
export const Header = () => {
  return (
    <header className='w-screen h-16 bg-blue-500 flex justify-center items-center'>
        <nav className='w-7xl flex justify-between items-center'>
            <FaBasketballBall className='text-white text-5xl' />

            <ul className='flex gap-5 text-white text-lg font-bold'>
                <li><Link to="/">Anasayfa</Link></li>
                <li><Link to="/cart">Sepetim</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;
