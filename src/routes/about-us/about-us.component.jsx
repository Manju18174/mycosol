import './about-us.styles.scss';
// import LeafImage from '../../assets/about-us-leaf.png';
import LeafImage from '../../assets/leaf-svgrepo-com.svg';

const AboutUs = () => {

    const teamDetails=['Manjunath Reddy','Vivek','Purna Kumar','Dileep'];

    return ( 
        <div className='about-us-div' id='about-us-div'>
            <div className='content'>
                <h1>Smart Leaf Analysis - Detect & Defend Aganist Fungal Attacks!</h1>
                <p>Welcome to MycoSol, your smart solution for plant health! Our AI-powered web app helps farmers and gardeners quickly detect leaf diseases and provides expert-recommended fungal treatments. Simply upload a leaf image, and MycoSol will analyze it instantly, identifying the disease and suggesting the best remedy. With cutting-edge technology and a user-friendly interface, we empower you to protect your crops and ensure a healthier yield. Try MycoSol today and take the guesswork out of plant care!</p> 
                <h3 className='blt'>Keep your plants Healthier with Mycosol!</h3>
                <div className='team'>
                    <h4>Meet the Creators</h4>
                    <div>
                    {teamDetails.map((member,index)=>{
                        return <p key={`team-member-id-${index}`} className='members'>{member}</p>
                    })}
                    </div>
                </div>
            </div>
            <div className='block-image'>
                    <div className='img'>
                        <img src={LeafImage} width={"50%"} />
                    </div>
            </div>
        </div>
     );
}
 
export default AboutUs;