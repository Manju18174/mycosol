import './home.styles.scss';
import HomeImg from '../../assets/home-img-2.png';
import 'animate.css'
import { Fragment } from 'react';
import AboutUs from '../about-us/about-us.component';

const Home = () => {
    //img-div animate__animated animate__zoomIn
    return ( 
        <Fragment>
        <div className='home-div'>
        
            <div className='img-div '>
                <img src={HomeImg} width={'100%'} />
            </div>
            <div className='caption'>
            Growing the Future, Where Technology Meets Agriculture
            </div>
        </div>
        <AboutUs/>
        </Fragment>
     );
}
 
export default Home;