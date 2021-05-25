import './entry.styles.css'
import { Checkbox } from '../checkbox/checkbox.component'
import { Star } from '../star/star.component'

export const Entry = ({title, checked, starred, onChecked, onStarred}) => {
  return (
    <div className="entry-container">
      <Checkbox checked={checked} onClick={onChecked} />
      <p>{title}</p>
      <div className="spacer" />
      <Star checked={starred} onClick={onStarred} />
    </div>
  )
}