import './home.styles.scss';
import HomeImg from '../../assets/home-img-2.png';
import 'animate.css'

const Home = () => {
    return ( 
        <div className='home-div'>
            <div className='img-div animate__animated animate__zoomIn'>
                <img src={HomeImg} width={'100%'} />
            </div>
            <div className='caption'>
            Growing the Future, Where Technology Meets Agriculture
            </div>
        </div>
     );
}
 
export default Home;