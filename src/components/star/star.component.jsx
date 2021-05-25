import './star.styles.css'

export const Star = ({checked, onClick}) => {
  return (
    <div className="star-container" onClick={onClick}>
      {checked && <div className="star checked">★</div>}
      {!checked && <div className="star">☆</div>}
    </div>
  )
}