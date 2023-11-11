import MainContent from '../MainContent/MainContent'
import CardInfoPanel from '../CardInfoPanel/CardInfoPanel'
import SideBar from './SideBar'

function RootLayout() {
    return (
        <div className='appContainer'>
            <div>
                <SideBar />
            </div>
            <div><MainContent /></div>
            <div> <CardInfoPanel /></div>
        </div>
    )
}

export default RootLayout
