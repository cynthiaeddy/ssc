import './Home.css'
import handmade from '../../assets/icons/icon_handmade.png'
import paraben from '../../assets/icons/icon_paraben.png'
import fragrance from '../../assets/icons/icon_fragrance.png'
import sustainable from '../../assets/icons/icon_sustainable.png'



export const Home = () => {



  return (

    <div className='HomeContainer'>
         <section className="fancy-box">
        <div className="corner top-left"></div>
        <div className="corner top-right"></div>
        <div className="corner bottom-left"></div>
        <div className="corner bottom-right"></div>
        <div className="box-content type" >We make eco-friendly, artisanal soaps and lotions that blend effectiveness with environmental responsibility, delivering sustainable products that you will love.</div>
      </section>
      <section className="value-icons">
        <div className='copy'>
          <img className='icon hand' src={handmade} alt={handmade} /><h6>handmade</h6>
        </div>
         <div className='copy'>
          <img className='icon para' src={paraben} alt={paraben} /><h6>paraben</h6>
        </div>
         <div className='copy'>
          <img className='icon para' src={fragrance} alt={fragrance} /><h6>fragrance</h6>
        </div>
        <div className='copy'>
          <img className='icon sust' src={sustainable} alt={sustainable} /><h6>sustainable</h6>
        </div>
      </section>
      <div className='box'></div>
      </div>

  )
}
