import './checkbox.styles.css'

export const Checkbox = ({checked, onClick}) => {
  return (
    <div className={`checkbox ${checked ? 'checked' : ''}`} onClick={onClick} />
  )
}