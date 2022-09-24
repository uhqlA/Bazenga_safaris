import React from 'react'
import "./SocialMedia.css"
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Avatar } from "@mui/material";



function SocialMedia () {
  return (
    <div className="header">
        <div className="header_left">
            <div>
            <SearchIcon />
            <input type="text" />
        </div>
        </div>

        <div className="header_middle">
            <div className="header_option 
                header_option--facebook">
             <FacebookIcon fontSize="medium"/>

        <div className="header_option
             header_option--instagram">
          <InstagramIcon fontSize="medium" />
        </div>

        <div className="header_option
         header_option--linkedin">
          <LinkedInIcon fontSize="medium" />
        </div>

        <div className="header_option
         header_option--twitter">
          <TwitterIcon fontSize="medium" />
        </div>

        <div className="header_option
         header_option--whatsaap">
          <WhatsAppIcon fontSize="medium" />
        </div>

        <div className="header_option
         header_option--youtube">
          <YouTubeIcon fontSize="medium" />
        </div>

            </div>
        </div>

        <div className="header_right">
        <div className="header_info">
            <Avatar />
            <a href="/login">Login</a>
        </div>
        </div>

    </div>
  )
}

export default SocialMedia;