import './App.css'
import CardInfoPanel from './components/CardInfoPanel/CardInfoPanel'
import MainContent from './components/MainContent/MainContent'
import SideBar from './components/sideBar/SideBar'

function App() {
  return (
    <div className='appContainer'>
      <div>
        <SideBar />
      </div>
      <div>
        <MainContent />
      </div>
      <CardInfoPanel />
    </div>
  )
}

export default App
