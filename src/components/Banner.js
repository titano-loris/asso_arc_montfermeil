import '../styles/Banner.css';
import Logo from '../Image/Logo.png';
function Banner() {
    return (
        <div className='lmj-banner'>
            <img src={Logo} alt='Logo' className='lmj-imglogo' />
            <h1 className='text'>Le Trophée Jean Valjean</h1>
        </div >)
}

export default Banner;