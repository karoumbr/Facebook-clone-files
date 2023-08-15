import React from 'react'
import './SidebarRow.css'
import { Avatar } from '@mui/material'

function SidebarRow({src, Icon, title,href}) {
  return (
    <div className='sidebarRow'>
        {src && <Avatar src={src} />}
        {Icon && <Icon />}
 
        <a class="btn and btn-inf" href={href}>{title}</a>
 
    </div>
  )
}

export default SidebarRow