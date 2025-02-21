import { Fragment, useState } from 'react';
import './navbar.styles.scss';
import { Outlet } from 'react-router-dom';
import '@fontsource/bebas-neue';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const [page,setPage]=useState('Home');
    const pageIdentifiers=['Home','About Us','Scan Now'];
    const pageNavigators = ['/','/#about-us-div','scan-now']
    const navigateRouter = useNavigate();

    const handleNavigation=(name,path)=>{
        if(path === "/#about-us-div"){
            navigateRouter('/');
            const aboutSection = document.getElementById('about-us-div');
            if(aboutSection){
                aboutSection.scrollIntoView({behavior:'smooth'});
            }
        }else if(path === '/'){
            window.scrollTo({top:0,behavior:'smooth'})
            navigateRouter(path);
        }
        else{
            navigateRouter(path);
        }
        setPage(name);
    }

    return ( 
        <Fragment>
            <nav className='navbar-div'>
                <div className='company' onClick={()=>handleNavigation('Home','/')}>
                    mycosol
                </div>
                <div className='pages'>
                    {pageIdentifiers.map((name,index)=>{
                        return <p key={`page-identifier-${index}`} onClick={()=>handleNavigation(name,pageNavigators[index])}
                         style={{backgroundColor:page === name ? 'black' : '',color:page === name ? 'white' : ''}}>
                            {name}
                        </p>
                    })}
                </div>
                <div className='ext'>Cortex</div>
            </nav>
            <Outlet/>
        </Fragment>
     );
}
 
export default Navbar;