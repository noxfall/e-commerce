import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer: React.FC = () => {
    return (
        <div className="footer-container">
            <p>Copyright © 2023 Milos Georgiev | All rights reserved.</p>
            <p className="icons">
                <AiFillInstagram />
                <AiOutlineTwitter />
            </p>
        </div>
    );
};

export default Footer;