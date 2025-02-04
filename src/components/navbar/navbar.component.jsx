import { Fragment, useState } from 'react';
import './navbar.styles.scss';
import { Outlet } from 'react-router-dom';
import '@fontsource/bebas-neue';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const [page,setPage]=useState('Home');
    const pageIdentifiers=['Home','About Us','Sign In','Scan Now'];
    const pageNavigators = ['/','about-us','','']
    const navigateRouter = useNavigate();

    return ( 
        <Fragment>
            <nav className='navbar-div'>
                <div className='company'>
                    mycosol
                </div>
                <div className='pages'>
                    {pageIdentifiers.map((name,index)=>{
                        return <p key={`page-identifier-${index}`} onClick={()=>{
                            navigateRouter(`${pageNavigators[index]}`)
                            setPage(name)
                            }} style={{backgroundColor:page === name ? 'black' : '',color:page === name ? 'white' : ''}}>
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