import List from "../../Components/List/List"
import './Menu.scss'


function Menu() {
  return (
    <div className="menu">
      <div className="menu-title">
        <h2>Menü</h2>
      </div>
      <div className="menu-text text-center">
        <h4 className="text-light py-3">FÜR BESTELLUNGEN ZUM ABHOLEN - TEL: 06601711525</h4>
        <List/>
        
      </div>
      
      </div>
  )
}

export default Menu