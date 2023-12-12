import React from 'react'
import './Optionsbar.css'

function Optionsbar() {
  return (
    
       
    <div class="l-navbar" id="nav-bar">
        <nav class="nav">
            <div> 
                <div class="nav_list"> 
                <a href="#" class="nav_link active"> <i class='bx bx-grid-alt nav_icon'></i> <span class="nav_name">Dashboard</span> </a> 
                <a href="#" class="nav_link"> <i class='bx bx-user nav_icon'></i> <span class="nav_name">Home</span> </a> 
                <a href="#" class="nav_link"> <i class='bx bx-message-square-detail nav_icon'></i> <span class="nav_name">Wishlists</span> </a> 
                <a href="#" class="nav_link"> <i class='bx bx-bookmark nav_icon'></i> <span class="nav_name">Chats</span> </a> 
                <a href="#" class="nav_link"> <i class='bx bx-folder nav_icon'></i> <span class="nav_name">Carts</span> </a>
                <a href="#" class="nav_link"> <i class='bx bx-log-out nav_icon'></i> <span class="nav_name">SignOut</span></a>
                
                </div>
            </div>
        </nav>
    </div>

  )
}

export default Optionsbar