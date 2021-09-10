import Nav from './Nav';
import Header from './Header';
import style from '../styles/Layout.module.css';

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <div className={style.container}>
                <main className={style.main}>
                    <Header />
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout;