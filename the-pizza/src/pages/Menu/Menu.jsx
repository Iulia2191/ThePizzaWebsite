import List from "../../Components/List/List"
import './Menu.scss'


function Menu() {
  return (
    <div className="menu px-2">
      <div className="menu-title">
        <h2>Menü</h2>
      </div>
      <div className="menu-text">
        <List/>
      </div>
      </div>
  )
}

export default Menu