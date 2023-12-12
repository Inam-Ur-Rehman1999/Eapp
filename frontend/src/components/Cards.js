import React from 'react'
import './Cards.css'

function Cards() {
  return (
    <div>
        <div class="wrapper">
  <div class="container">
    <div class="top"></div>
    <div class="bottom">
      <div class="left">
        <div class="details">
          <h1>Chair</h1>
          <p>£250</p>
        </div>
        <div class="buy"><i class="material-icons">add_shopping_cart</i></div>
      </div>
      <div class="right">
        <div class="done"><i class="material-icons">done</i></div>
      </div>
    </div>
  </div>
  <div class="inside">
    <div class="icon"><i class="material-icons">info_outline</i></div>
    <div class="contents">
      <table>
        <tr>
          <th>Width</th>
          <th>Height</th>
        </tr>
        <tr>
          <td>200mm</td>
          <td>200mm</td>
        </tr>
      </table>
    </div>
  </div>
</div>

    </div>
    
  )
}

export default Cards