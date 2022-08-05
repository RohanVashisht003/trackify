import React from 'react';
import ResponsiveDrawer from './ResponsiveDrawer';


function Layout({children}) {
  return (
    <div style={{marginTop:'49px',minHeight:'inherit', padding:'10px'}}>
        <ResponsiveDrawer/>
        {children}
    </div>
  )
}

export default Layout;