import "./style.css"
const Contact = () => {
  return <div className="contact">
    <div className="contact__title">
      Subscribe to our<br/> newsletter
    </div>
    <div className="contact__email">
      <input type="text" placeholder="your email..."/>
    </div>
    <button className="contact__button">Subscribe</button>
  </div>
}

export default Contact;
