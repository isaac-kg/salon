import "./style.css"
const Footer = () => {
  return (
   <div className="footer">
    <div className="footer__header">This is header</div>
    <p className="footer__description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam aperiam, 
      fuga architecto culpa eligendi dignissimos cupiditate, accusantium, impedit necessitatibus laudantium.
    </p>
    <div className="footer__icons">
      <span>fb</span>
      <span>IG</span>
      <span>TW</span>
      <span>YB</span>
    </div>
		<div className="footer__copyright">
      All right reserved 2020
    </div>
	 </div>
  )
}

export default Footer
