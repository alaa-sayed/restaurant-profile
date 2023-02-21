import React from 'react'
import '../payment/payment.css'

export default function Payment() {
  return (
  <div>
        <div className="container payment">

    <form action="">

        <div className="row">

            <div className="col">

                <h3 className="title">billing address</h3>

                <div className="inputBox">
                    <span>full name :</span>
                    <input type="text" placeholder="enter your name"/>
                </div>
                <div className="inputBox">
                    <span>email :</span>
                    <input type="email" placeholder="example@example.com"/>
                </div>
                <div className="inputBox">
                    <span>address :</span>
                    <input type="text" placeholder="room - street - locality"/>
                </div>
                <div className="inputBox">
                    <span>city :</span>
                    <input type="text" placeholder="Cairo"/>
                </div>

                <div className="flex">
                    <div className="inputBox">
                        <span>state :</span>
                        <input type="text" placeholder="Egypt"/>
                    </div>
                    <div className="inputBox">
                        <span>zip code :</span>
                        <input type="text" placeholder="123"/>
                    </div>
                </div>

            </div>

            <div className="col">

                <h3 className="title">payment</h3>

                <div className="inputBox">
                    <span>cards accepted :</span>
                    <img src="https://w7.pngwing.com/pngs/32/363/png-transparent-visa-master-card-and-american-express-mastercard-payment-visa-credit-card-emv-credit-card-visa-and-master-card-background-text-display-advertising-logo-thumbnail.png" alt=""/>
                </div>
                <div className="inputBox">
                    <span>name on card :</span>
                    <input type="text" placeholder="mr. john henry"/>
                </div>
                <div className="inputBox">
                    <span>credit card number :</span>
                    <input type="number" placeholder="1111-2222-3333-4444"/>
                </div>
                <div className="inputBox">
                    <span>exp month :</span>
                    <input type="text" placeholder="january"/>
                </div>

                <div className="flex">
                    <div className="inputBox">
                        <span>exp year :</span>
                        <input type="number" placeholder="2024"/>
                    </div>
                    <div className="inputBox">
                        <span>CVV :</span>
                        <input type="text" placeholder="1234"/>
                    </div>
                </div>

            </div>
    
        </div>

        <input type="submit" value="submit to checkout" className="submit-btn"/>

    </form>

</div>    
    </div>
  )  
}
