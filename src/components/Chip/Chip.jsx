import "./Chip.css"

export function Chip({ label = "", isActive = true }) {
  const buttonClassName = isActive ? "chip active" : "chip";
  return (
    <button className={buttonClassName}>
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  );
}


export default Chip
