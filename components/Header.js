import headerStyle from '../styles/Header.module.css';

const Header = () => {
    const x = 2;
    return (
        <div>
            <h1 className={headerStyle.title}>
                <span>WebDev</span> News
            </h1>
            <p className={headerStyle.description}>
                Keep up to date with the lastest web dev news
            </p>
        </div>
    )
}

export default Header;