import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = "pk_test_51K7hHfDttDZFVK63cpR94M3gr3u7pOJFyVlnGrEDuLFQMBWP4430SwXwLkaeYbXzEI1wh6ym2H8oi0k6AvSog9hb00neYfz0fI";
    const onToken = token => {
        console.log(token)
        alert("Payment Successful");
    }
    return (
        <StripeCheckout 
            label="Pay Now"
            name="CRWN Clthing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishablekey}            
            />
    );

};

export default StripeCheckoutButton;
