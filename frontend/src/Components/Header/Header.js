import './Header.css';

function Header({ title }) {

    const headerImg = 'https://static.wixstatic.com/media/f1de6a_b4afa6eab39649f88f1460ddf3601020~mv2.png/v1/crop/x_0,y_41,w_1920,h_999/fill/w_173,h_92,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f1de6a_b4afa6eab39649f88f1460ddf3601020~mv2.png'

    return (
        <header className='Header'>
            <img src={headerImg} className='logo' />
            <h1 className='Title'>{title}</h1>
        </header>
    )
}
export default Header;