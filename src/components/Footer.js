import '../styles/Footer.scss';

function Footer() {
    let text = "N'oubliez pas de visiter notre page fb pour plus d'information ";

    return (
        <div className='lmj-footer'>
            <a href="https://www.facebook.com/MontfermeilArcClub/" className="lmj-footer-elem">{text}</a>
        </div>
    )
}

export default Footer;