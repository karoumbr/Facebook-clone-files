import React from 'react';
import './SidebarMenu.css'

import SidebarRow from './SidebarRow'
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import TodayIcon from '@mui/icons-material/Today';
import GroupsIcon from '@mui/icons-material/Groups';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import { useStateValue } from './StateProvider';


function SidebarMenu() {
    const [{user},dispatch] = useStateValue();
  return (
    <div className='sidebarMenu'>
          {/*<SidebarRow src="https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-1/158611066_10221270980496354_3861283067396096225_n.jpg?stp=c156.0.200.200a_dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=bObRWIiEgSIAX9fM0S0&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfC1xBmfVtn25hvQ7F_aYFd0MOis3Pncyro7bSqhGfkzIw&oe=64E3909C" title="KBR"/> */} 
       <SidebarRow src= {user.photoURL} title={user.displayName}/>
       
       <SidebarRow Icon={PeopleIcon}  title="Friends" href="https://www.facebook.com/friends/"/>
       <SidebarRow Icon={BookmarkIcon} title="Saved" href="https://www.facebook.com/saved/?cref=28"/>
       <SidebarRow Icon={TodayIcon} title="Feeds" href="https://www.facebook.com/?filter=all&sk=h_chr"/>
       <SidebarRow Icon={GroupsIcon} title="Groups" href="https://www.facebook.com/groups/?ref=bookmarks"/>
       <SidebarRow Icon={StorefrontIcon} title="Marketplace" href="https://www.facebook.com/marketplace/?ref=bookmark"/>
       <SidebarRow Icon={VideoLibraryIcon} title="Video" href="https://www.facebook.com/watch/"/>
       <SidebarRow Icon={AvTimerIcon} title="Memories" href="https://www.facebook.com/onthisday/?source=bookmark"/>
       <SidebarRow Icon={EmojiFlagsIcon} title="Pages" href="https://www.facebook.com/pages/?category=your_pages&ref=bookmarks"/>
       <SidebarRow Icon={ExpandMoreIcon} title="See more" href="" /> 
    </div>
  )
}

export default SidebarMenu