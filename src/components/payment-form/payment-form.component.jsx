import { async } from "@firebase/util";
import { CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import Button from "../button/button.component";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";
import { useState } from "react";
import { useSelector } from "react-redux";
import {selectCurrentUser} from"../../store/user/user.selector";
import {selectCartTotal} from"../../store/cart/cart.selector";

const PaymentForm = () =>{
    const stripe = useStripe();
    const elements = useElements();

    const  amount  = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const [isProcessing, setIsProcessing ] = useState(false);


    const stripePaymentHandler = async (e) => {
        e.preventDefault();

        if(!stripe  || !elements){
            return;
        }       

        setIsProcessing(true); 

        const response = await fetch('/.netlify/functions/create-payment-intent', { 
            method:'post',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: amount * 100}),
        }).then( res => res.json());

        console.log(response);

        //const client_secret = response.paymentIntent.client_secret;
        const {paymentIntent: {client_secret}} = response;

        console.log("secret:  ", client_secret);

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method:{
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Guest',
                }
            }
        });

        setIsProcessing(false); 
        if(paymentResult.error){
            alert(paymentResult.error);
        } else{
            if(paymentResult.paymentIntent.status === 'succeeded'){
                alert('Payment Success');
            }
        }

    }


    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={stripePaymentHandler}>
                <h2>Credit Card Payment: </h2>
                <CardElement  />
                <Button buttonType="payment" isLoading={isProcessing}>Pay Now</Button>
            </FormContainer>
         </PaymentFormContainer>
    )
}

export default PaymentForm;