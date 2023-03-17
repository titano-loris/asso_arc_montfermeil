import inscription from '../Image/inscriptions.jpg';
import '../styles/Lien.scss';
import { Link } from 'react-router-dom';
function Lien() {

    return (
        <div >
            <Link component={Link} to='/Formulaire'>
                <img src={inscription} alt='inscriptions' className='Lien' />
            </Link>
        </div>
    )
}

export default Lien;