import './style.css'
import serviceImg from '../../asset/img_service.png'
import checkmark from '../../asset/Checkmark.png'

const OurServices = (props) => {
    const {stList} = props;

    return ( 
        <div className='our-services'>
            <div className="left-section">
                <img src={serviceImg}></img>
            </div>
            <div className="right-section">
                <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
                <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                <div>
                    {stList.map((item) => (
                        <div className='strenght'>
                            <img src={checkmark} alt="checkmark"/>
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default OurServices;