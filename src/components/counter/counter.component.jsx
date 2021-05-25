import './counter.styles.css'

export const Counter = ({count, total}) => {
  return (
    <div>
      {count !== total && <h3>{`${count} out of ${total}`}</h3>}
      {count === total && <h3>Full house! 🥳</h3>}
    </div>
  )
}