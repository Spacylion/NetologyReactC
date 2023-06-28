// import "./components/styles/1.css"
import "./components/styles/3.css"
// import ShopItemFunc from "./components/ShopItemFunc"
import Calendar from "./components/Calendar"

const now = new Date(2017, 2, 8)

function App() {
  return <Calendar date={now} />
}

export default App
