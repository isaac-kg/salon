import "./style.css"
const Footer = () => {
  return (
   <div className="footer">
    <div className="footer__header">Radiance Haven</div>
    <p className="footer__description">
    Join us on this voyage where each treatment, each consultation, and every moment spent with us nurtures your innate beauty and brings forth the confident, radiant you. 
    </p>
    <div className="footer__icons">
      <span>
        <img style={{width: "20px"}} src="../../assets/icons/facebook.svg" alt="" />
      </span>
      <span>
        <img style={{width: "20px"}} src="../../assets/icons/instagram.svg" alt="" />
      </span>
      <span>
        <img style={{width: "20px"}} src="../../assets/icons/twitter.svg" alt="" />
      </span>
      <span>
        <img style={{width: "20px"}} src="../../assets/icons/youtube.svg" alt="" />
      </span>
    </div>
		<div className="footer__copyright">
      All right reserved 2023
    </div>
	 </div>
  )
}

export default Footer
