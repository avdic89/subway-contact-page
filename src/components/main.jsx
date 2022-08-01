import logo from './subway.jpg'
import ContactUs from './ContactUs.jsx'

const CurrentYear = new Date().getFullYear();
const Phrase_1 = 'Copyright \u00A9';
const Phrase_2 = "created by 3ko";
const copyright = `${Phrase_1} ${CurrentYear} ${Phrase_2}`;

function main() {
    return (
    <div className="main-container">
        <img src={logo} alt=" "></img>
        <div className="adresse">Subs Bad Cannstatt GmbH & Co. KG - König-Karl-Straße 54 - 70372 Stuttgart (Bad Cannstatt)</div>
        <h1>Neuer Job gefällig?</h1>
        <h2>Werde ein Teil unseres Teams!</h2> 
        <h3>Fülle alle unten aufgeführten Angaben aus und wir melden uns bei dir!</h3>
        <ContactUs />
        <div className="copyright">{copyright}</div>
    </div>
    );
}

export default main;