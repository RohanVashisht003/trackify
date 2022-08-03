
import React from 'react';
import ResponsiveDrawer from './ResponsiveDrawer';


function Layout({children}) {
  return (
    <div >
        <ResponsiveDrawer/>
        {children}
    </div>
  )
}

export default Layout;