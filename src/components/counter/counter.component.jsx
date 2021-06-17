import './counter.styles.css'

export const Counter = ({count, total}) => {
  const scale = 1 + count/total
  return (
    <div className="counter" style={{transform: `scale(${scale})`}}>
      {count !== total && <h3>{`${count} out of ${total}`}</h3>}
      {count === total && <h3>🎉 Full house! 🎉</h3>}
    </div>
  )
}