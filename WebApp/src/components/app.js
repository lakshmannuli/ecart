import React from 'react'
import Header from '../components/common/authorized/header'
import Footer from '../components/common/authorized/footer'
import Routes from '../routes'

class App extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Routes></Routes>
                <Footer></Footer>
            </div>
        )
    }
}

export default App