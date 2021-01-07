import "./style.css";

const About = () => {
  return (
    <div className="contact">
      <h1>Contact me!</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12217.686702386945!2d-4.237703507654698!3d55.84799239237255!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4822cab96021be31!2sGlasgow%20Green!5e0!3m2!1sen!2suk!4v1610050447718!5m2!1sen!2suk"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>

      <h4>Phone</h4>
      <p>0141 000 0000</p>

      <h4>Email</h4>
      <p>email@grmail.com</p>

      <h4>Address</h4>
      <p>Greendyke St, Saltmarket, Glasgow G1 5DB</p>
    </div>
  );
};

export default About;
