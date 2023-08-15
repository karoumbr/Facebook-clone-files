import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';


import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';


import { Avatar, IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';

import { useStateValue } from './StateProvider';


function Header() {
    const logout=() => {
        localStorage.clear()
        window.location.reload()
    }
    const [{user},dispatch] = useStateValue();

  return (
    ////ctrl+tab to go to files
    <div className='header'>
        <div className='header__left'>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png?20190503112358" alt=""/> 
        
            <div class="header__input">      
                <SearchIcon/>
                <input type="text" placeholder='Search Facebook'/>               
            </div>


        </div>

        <div className='header__middle'>
            <div class="header__option header__option--active">  
                <HomeIcon fontSize='large'/>
            </div>
            <div class="header__option">  
                <OndemandVideoIcon fontSize='large'/>
            </div>
          
            <div class="header__option">  
            <StorefrontIcon fontSize='large'/>
            </div>
            <div class="header__option">  
            <SupervisedUserCircleIcon fontSize='large'/>
            </div>
            <div class="header__option">  
            <VideogameAssetIcon fontSize='large'/>
            </div>
        </div>
        <div className='header__right'>
            <div class="header__info"> 
              {/*<Avatar src='https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-1/158611066_10221270980496354_3861283067396096225_n.jpg?stp=c156.0.200.200a_dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=bObRWIiEgSIAX9fM0S0&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfC1xBmfVtn25hvQ7F_aYFd0MOis3Pncyro7bSqhGfkzIw&oe=64E3909C'/>
                <h4>KBR</h4> */ }  
      
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                  
                <Avatar src={user.photoURL} onClick={logout}/>
              {/*   <h4>{user.displayName}</h4> */}

            </div>
        </div>
       
    </div>
    

  )
}

export default Header