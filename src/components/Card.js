import "../styles/Home.css";
const Card = ({ children, title }) => (
  <div className="cardWhite gapCheck">
    <div className="cardCenter">
      <h3 style={{ marginTop: "30px" }}>{title}</h3>
      {children}
    </div>
  </div>
);
export default Card;
