import {Component} from 'react'
import HomeBody from '../HomeBody'
import Header from '../Header'
import SideBar from '../SideBar'
import Banner from '../Banner'
import './index.css'

class Home extends Component {
  state = {isBanner: true}

  fintJobButton = () => {
    const {history} = this.props
    return history.replace('/jobs')
  }
  bannerClick = () => {
    this.setState({isBanner: false})
  }

  render() {
    const {isBanner} = this.state

    return (
      <>
        <ul>
          <Header />
        </ul>
        <div className="homeMainDiv">
          <SideBar />
          <div>
            {isBanner ? (
              <Banner className="banDiv" bannerClicks={this.bannerClicks} />
            ) : null}
            <HomeBody />
          </div>
        </div>
      </>
    )
  }
}

export default Home
