import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import './plans.styles.scss';

const Plans = () => {
    const [isYearly, setIsYearly] = useState(false);
    const [isRupees, setIsRupees] = useState(true);
    
    const exchangeRate = 83;
    
    const premiumFeatures = [
        'Disease detection for individual leafs',
        'Detailed analysis reports',
        'Treatment recommendations',
        'Fungicide suggestions',
        'Unlimited uploads',
        'Export to PDF'
    ];
    
    const organizationalFeatures = [
        ...premiumFeatures,
        'Multiple user accounts',
        'Team collaboration',
        'Farm-wide analysis',
        'Bulk processing',
        'Advanced statistics dashboard',
        'Priority support'
    ];
    
    const getPriceDisplay = (rupeesPrice) => {
        if (isRupees) {
            return `₹${isYearly ? Math.round(rupeesPrice * 10) : rupeesPrice}`;
        } else {
            const dollarPrice = rupeesPrice / exchangeRate;
            return `$${(isYearly ? dollarPrice * 10 : dollarPrice).toFixed(2)}`;
        }
    };

    const getPlanDuration = () => {
        return isYearly ? '/year' : '/month';
    };
    
    const getYearlyDiscount = () => {
        return `Save 17% with yearly billing`;
    };

    return ( 
        <div className='plans-container'>
            <h1>Subscription Plans</h1>
            <p className='plans-description'>
                Choose the perfect plan for your leaf disease detection needs
            </p>
            
            <div className='toggle-container'>
                <div className='billing-toggle'>
                    <span className={!isYearly ? 'active' : ''}>Monthly</span>
                    <label className='switch'>
                        <input 
                            type='checkbox' 
                            checked={isYearly}
                            onChange={() => setIsYearly(!isYearly)}
                        />
                        <span className='slider'></span>
                    </label>
                    <span className={isYearly ? 'active' : ''}>Yearly</span>
                </div>
                
                <div className='currency-toggle'>
                    <span className={isRupees ? 'active' : ''}>₹ INR</span>
                    <label className='switch'>
                        <input 
                            type='checkbox' 
                            checked={!isRupees}
                            onChange={() => setIsRupees(!isRupees)}
                        />
                        <span className='slider'></span>
                    </label>
                    <span className={!isRupees ? 'active' : ''}>$ USD</span>
                </div>
            </div>
            
            <div className='plans-grid'>
                <div className='plan-card premium'>
                    <h2>Premium</h2>
                    <p className='plan-subtitle'>For individual users</p>
                    <div className='plan-price'>
                        <span className='price'>{getPriceDisplay(450)}</span>
                        <span className='duration'>{getPlanDuration()}</span>
                    </div>
                    {isYearly && <p className='discount'>{getYearlyDiscount()}</p>}
                    <button className='subscribe-button'>Subscribe Now</button>
                    <div className='features-list'>
                        <h3>Features</h3>
                        <ul>
                            {premiumFeatures.map((feature, index) => (
                                <li key={index}>
                                    <FaCheck className='check-icon' />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                <div className='plan-card organizational'>
                    <h2>Organizational</h2>
                    <p className='plan-subtitle'>For teams and businesses</p>
                    <div className='plan-price'>
                        <span className='price'>{getPriceDisplay(499)}</span>
                        <span className='duration'>{getPlanDuration()}</span>
                    </div>
                    {isYearly && <p className='discount'>{getYearlyDiscount()}</p>}
                    <button className='subscribe-button'>Subscribe Now</button>
                    <div className='features-list'>
                        <h3>Features</h3>
                        <ul>
                            {organizationalFeatures.map((feature, index) => (
                                <li key={index}>
                                    <FaCheck className='check-icon' />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Plans;