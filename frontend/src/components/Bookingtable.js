import React from 'react'
import './Bookingtable.css'
function Bookingtable() {
  return (
    <div>
        <div class="container">
  <div class="row">
    <div class="col-xs-12">
      <div class="table-responsive">
        <table summary="This table shows how to create responsive tables using Bootstrap's default functionality" class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>id</th>
              <th>Customer Name</th>
              <th>Category</th>
              <th>Product Detail</th>
              <th>Deliver</th>
              <th>Booking Amount</th>
              <th>Payment</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#153281</td>
              <td>BHK1219</td>
              <td>Caravans</td>
              <td>Katie Klocke</td>
              <td>10/10/2016, 9:30pm</td>
              <td>22/10/2016, 4:00pm</td>
              <td>2.438,- EUR</td>
              <td><span class="btn btn-warning">Issue</span></td>
              <td><span class="btn btn-danger">Overdue</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Bookingtable