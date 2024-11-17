import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'

export default function Home(){
  return(
    <div className='body-container'>
        <Header/>
        <Banner/>
        <Card/>
        <Footer/>
    </div>
  )
}