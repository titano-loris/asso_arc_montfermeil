import '../styles/Home.scss';
import Banner from './Banner';
import Tuto from './Tuto';
import Footer from './Footer';
import Lien from './Lien';

function Home() {
    return (
        <div className='App-style'>
            <Banner></Banner>
            <main className='App-main'>
                <Tuto />
                <Lien />
            </main>
            <Footer className='Footer-app' />

        </div>
    );
};


export default Home;