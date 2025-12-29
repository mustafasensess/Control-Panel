import './Header.css';

function Header({title}) {
    return (
        <div className="header-wrapper">
            <h1 className="main-title">{title} Hizmetleri</h1>
            <p className="header-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
                dicta illum vero culpa cum quaerat architecto sapiente eius non
                soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
                perspiciatis?</p>
        </div>
    )
}

export default Header;
