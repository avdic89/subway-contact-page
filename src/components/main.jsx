import logo from './subway.jpg'
import ContactUs from './ContactUs.jsx'

function main() {
    return (
    <div className="container">
        <img src={logo} alt=" "></img>
        <h1>Neuer Job gefällig?</h1>
        <h2>Werde ein Teil unseres Teams! Fülle alle unten aufgeführten Angaben aus und wir melden uns bei dir!</h2>
        <ContactUs />
    </div>
    );
}

export default main;