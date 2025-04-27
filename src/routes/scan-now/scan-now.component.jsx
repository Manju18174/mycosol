import './scan-now.styles.scss';
import InputImageHolder from '../../assets/image-file-svgrepo-com.svg';
import ResultsImageHolder from '../../assets/statistics-svgrepo-com.svg';
import Loader from '../../components/loader/loader.component';
import { useState } from 'react';
import { dataArray,notFoundData,detectLeafDisease } from '../../ml';

const dataHeadings=['Leaf affected','Disease name','Percentage affected','Suggested fungicide','Recommended fungicides'];
const dataParams=['isLeafAffected','diseaseName','percentageAffected','suggestedFungicide','recommendedFungicides']

const ScanNow = () => {

    const [image,setImage]=useState(null);
    const [loading,setLoading]=useState(false);
    const [disabled,setDisabled]=useState(false);
    const [data,setData]=useState({});
    const [name,setName]=useState('');

    const handleChange=(e)=>{
        const file = e.target.files[0];
        detectLeafDisease(URL.createObjectURL(file));
        if(file){
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
            setName(file.name.replace(/.jpg|.png|.webp/g,''));
        }
    }
    
    const handleClick=()=>{
        if(image){
            setLoading(true);
            setDisabled(true)
            setTimeout(()=>{
            handleResultsChange()
            setLoading(false);
            setDisabled(false);
        },3500);    
        }
    }

    const handleResultsChange=()=>{
        const foundData = dataArray.find(obj=>obj.name===name)
        if(foundData) {
            setData(foundData)
            return;
        }
        setData(notFoundData);
    }

    return ( 
        <div className='scan-now-div'>
            <div className='input'>
                <h2>Upload</h2>
                <div>
                    <label htmlFor='file-input'>
                        <img src={image || InputImageHolder} />
                        <p>{image ? "Image uploaded" :"Upload your image"}</p>
                    </label>
                    <input type='file' id='file-input' onChange={(e)=>handleChange(e)} />
                </div>
                <button onClick={handleClick} disabled={disabled} >{loading ? <Loader lh={"30px"} lw={"30px"} /> : "Scan now"}</button>
            </div>
            <div className='results'>
                <h2>Results</h2>
                <div className='main'>
                    {!Object.keys(data).length ? <div className='empty'>
                        <img src={ResultsImageHolder} />
                    </div> : <div className='data'>
                        {dataHeadings.map((heading,index)=>{
                            return <div key={`data-heading-index-${index}`} className='tile'>
                                <h3>{heading} :</h3>
                                <p>{data?.[dataParams[index]]}</p>
                            </div>
                        })}
                    </div>}
                </div>
            </div>
        </div>
     );
}
 
export default ScanNow;