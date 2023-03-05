import Link from "next/link";
import { AiOutlineShopping } from 'react-icons/ai';

const Topbar: React.FC = () => {
    return (
        <div className="navbar-container">
            <p className="logo">
                <Link href="/">Noxfall Headphones</Link>
            </p>
            <button type="button" className="cart-icon">
                <AiOutlineShopping />
                <span className="cart-item-qty">1</span>
            </button>
        </div>
    );
};

export default Topbar;