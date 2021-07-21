import React from 'react';

function CartComponent(props) {
    return (
        <div>
            
<div class="site-section ftco-subscribe-1 site-blocks-cover"
 >
  <div class="container">
    <div class="row align-items-cener">
      <div class="col-lg-12 text-center">
        <h2>Cart</h2>
        <div class="text-center">
          <a class="text-white" href="<?=base_url()?>">Home</a>
          <span class="icon-keyboard_arrow_right  text-white"></span>
          <span class="current text-white">Cart</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="site-section">
  <br />
  <div class="container payment-div">
    <div class="row" style={{marginTop:'60px'}}>

      <div class="card card-new text-secondary bg-white " style="width: 100%;">
        <div class="card-header bg-transparent  ">
          <h5>Your Cart</h5>

        </div>

        <div class="card-body mt-2">

          <table class="table">
            <thead class="thead table-active ">
              <tr>

                <td scope="col">Item</td>
                <td scope="col">Total</td>
                <td scope="col"></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src="<?=base_url()?><?php echo $item['images']; ?>" style={{width: '100px,height: 70px'}} /> <span
                    style="color:blue;">
                  /</span>/Name</td>
                <td>//Price</td>

                <td><button class="btn btn-danger btn-sm"
                      class="fa fa-pencil-alt"></i>Delete </button> </td>
              </tr>
              <td class="col-lg-12 col-md-12 col-sm-12 col-12">
                <p>Your cart is empty.....</p>
              </td>
              </tr>
            </tbody>
          </table>

          <div class="card-deck mt-5 mb-5">
            <div class="card col-md-3 card-new">
              <div class="card-header bg-transparent mt-2">Coupon</div>
              <div class="card-body mt-2">
                <form>
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Enter coupon Code">

                  </div>
                  <div class="form-group">
                    <button type="button" class="btn btn-primary btn-sm">Apply</button>

                  </div>
                </form>

              </div>
            </div>
            <div class="card col-md-5 card-new">
              <form>
                <div class="card-header bg-transparent mt-2">Payment Method</div>
                <div class="card-body">
                  <table class="table table-striped payment-table">
                    <tbody>
                      <tr>

                        <td scope="col"> <input type="radio" id="Paypal" name="PaymentMethod" value="Paypal"></td>
                        <td scope="col"><label for="Paypal">Paypal</label></td>
                      </tr>
                      <tr>

                        <td scope="col"> <input type="radio" id="bank/cash" name="PaymentMethod" value="bank/cash"></td>
                        <td scope="col"><label for="bank/cash">Bank Transfer/Cash Deposit</label></td>
                      </tr>
                      <tr>
                        <td scope="col"><input type="radio" id="Stripe" name="PaymentMethod" value="Stripe"></td>
                        <td scope="col"><label for="Stripe">Stripe</label></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
            
            <div class="card card-total">
              <div class="card-header bg-transparent mt-2">
                <h5>Total <span style="float:right;">//Total</span>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-8">
                    <a href="<?=base_url()?>courses/" style="color:blue;"><i class="fa fa-cart-plus"
                        aria-hidden="true"></i> Continue
                      Shopping</a>
                  </div>
                  <div class="col-md-4">
                    <a href="javascript:void(0)" id="buynow" data-amount="<?php echo $this->cart->total() ?>"
                      data-days="<?php echo $item['instructors']; ?>" data-id="<?php echo $id; ?>"
                      class="btn btn-success btn-sm text-white buy_now"> <i class="fa fa-money" aria-hidden="true"></i>
                      Checkout</a>

                  </div>

                </div>

              </div>
            </div>
            

          </div>
        </div>
      </div>
    </div>
  </div>

</div>

<div class="site-section container">
<div class="row">
   <div class="col-md-8">

<table class="table table-bordered">
  <thead class="thead-light">
    <tr class="text-center">
      <th scope="col">#</th>
      <th scope="col">Item</th>
      <th scope="col">Course Fee</th>
      <th scope="col">Action(delete)</th>
    </tr>
  </thead>
  <tbody>
    <tr class="text-center">
      <th scope="row">2</th>
      <td><img class="img-fluid cart-img" src="http://localhost/bhargavi/vsjit/edu.hrlooks.com/edu.hrlooks.com/uploads/course/372750406_1613218766.jpg" alt="" style=" width:303px;height:100%;" /></td>
      <td>INR 1000/-</td>
      <td><button type="button" class="btn btn-danger">delete</button></td>
    </tr>
    <tr class="text-center">
      <th scope="row">3</th>
      <td><img class="img-fluid cart-img" src="http://localhost/bhargavi/edu.hrlooks.com-20-2-2021/edu.hrlooks.com/uploads/course/1262393237_1613218845.jpg" alt="" style=" width:303px;height:100%;" /></td>
      <td>INR 5000/-</td>
      <td><button type="button" class="btn btn-danger">delete</button></td>
    </tr>
    <tr class="text-center">
      <th scope="row">1</th>
      <td><img class="img-fluid cart-img" src="http://localhost/bhargavi/vsjit/edu.hrlooks.com/edu.hrlooks.com/uploads/course/841829515_1613217034.png" alt="" style=" width:303px;height:100%;" /></td>
      <td>INR 8000/-</td>
      <td><button type="button" class="btn btn-danger">delete</button></td>
    </tr>
  </tbody>
</table>

<div class="row mt-5">
<div class="col-md-8">
<h5><b><i class="fa fa-cart-plus" aria-hidden="true"></i> Continue Shopping</b></h5>
</div>
<div class="col-md-4">
<h5><button type="button" class="btn btn-success"><i class="fa fa-money" aria-hidden="true"></i> Check Out</button></h5>
</div>
</div>



</div>
<div class="col-md-4">

<div class="cart-sec">

<h5 class="mb-3">Your cart</h5>
<div class="row">
<div class="col-md-6">
<h5><b>Total</b></h5>
</div>

<div class="col-md-6">
<h5>14000</h5>
</div>

</div>
 </div>

<div class="coupon-sec">
<div class="row ">
<div class="col-md-12">
<h5 class="card-title">Coupon</h5>
<div class="form-group">
            <input type="text" name="user_name" id="user_name" class="form-control" id="exampleInputEmail1"
              aria-describedby="emailHelp" placeholder="Enter Coupon Code" />
          </div>
          <button type="button" class="btn btn-primary">Apply</button>
</div>
</div>
</div>
</div>


</div>
</div>
</div>

        </div>
    );
}

export default CartComponent;