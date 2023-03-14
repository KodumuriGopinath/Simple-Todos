// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteUser} = props
  const {title, id} = todoDetails
  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="list-item">
      <p className="item-name">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
