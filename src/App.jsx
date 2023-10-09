import React from 'react'
import logo from './assets/img/Group1.png'
import './App.css'
import card4 from './assets/img/image38.png'
import card3 from './assets/img/image36.png'
import card2 from './assets/img/image39.png'
import card1 from './assets/img/image43.png'
import Card from './components/Card'
import Footer from './components/Footer'
function App() {
  let data = [{
    img: card1,
    title: "RubIcon",
    price: 100
  }, {
    img: card2,
    title: "Camera",
    price: 200
  },{
    img: card3,
    title: "G Generator",
    price: 1000
  },{
    img: card4,
    title: "Invoice Creator",
    price: 100
  }]
  return (
    <div className='container'>
      <nav>
        <img className='logo' src={logo} alt="" />
      </nav>
      <h1>Popular wordpress plugins</h1>
        <Card data={data} ></Card>
        <Footer></Footer>
    </div>
  )
}

export default App