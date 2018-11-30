import React from 'react'
import Header from '../components/common/authorized/header'
import Footer from '../components/common/authorized/footer'

class App extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>

                <Footer></Footer>
            </div>
        )
    }
}

export default App