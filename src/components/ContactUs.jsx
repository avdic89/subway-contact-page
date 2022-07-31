import emailjs from '@emailjs/browser';

const ContactUs = () => {
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
  
    return (
      <div className="container-contact">
      <form onSubmit={sendEmail}>
        <div className="label-container">
        <label>Vorname</label><br></br>
        <input className="input-group" type="text" name="prename" />
        </div>
        <div className="label-container">
        <label>Nachname</label><br></br>
        <input className="input-group" type="text" name="Name" />
        </div>
        <div className="label-container">
        <label>Email</label><br></br>
        <input className="input-group" type="email" name="Email" />
        </div>
        <div className="label-container">
        <label>Tel</label><br></br>
        <input className="input-group" type="tel" name="Email" />
        </div>
        <div className="label-container">
        <label>Alter</label><br></br>
        <input className="input-group" min="0" type="number" name="Alter" />
        </div>
        <div className="label-container">
        <label>Führerschein</label><br></br>
        <input className="radio-input" type="radio" name="führerschein" />
        <span>Ja</span>
        <input className="radio-input" type="radio" name="führerschein" />
        <span>Nein</span>
        </div>
        <div className="label-container">
        <input className="submit" type="submit" value="senden" />
        </div>
      </form>
      </div>
    );
  };

  export default ContactUs;
