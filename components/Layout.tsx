import Head from 'next/head';
import Topbar from './Topbar';
import Footer from './Footer';

const Layout: React.FC = ({ children }) => {
    return (
        <div className="layout">
            <Head>
                <title>Noxfall E-store</title>
                <link rel="icon" type="image/svg+xml" href="/logo.svg" />
            </Head>
            <header>
                <Topbar />
            </header>
            <main className="main-container">
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;