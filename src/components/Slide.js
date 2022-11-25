import QuoteIcon from "../icons/Quote";

import "./Slide.css";

function Slide({ title, signature, icon, theme }) {
  return (
    <div className={`slide theme-${theme}`}>
      <span className="quote-icon">
        <QuoteIcon />
      </span>

      <h2>{title}</h2>

      {icon}

      <p className="sign">{signature}</p>
    </div>
  );
}

export default Slide;
