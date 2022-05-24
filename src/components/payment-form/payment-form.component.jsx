import { async } from "@firebase/util";
import { CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import Button from "../button/button.component";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";


const PaymentForm = () =>{
    const stripe = useStripe();
    const elements = useElements();

    const stripePaymentHandler = async (e) => {
        e.preventDefault();

        if(!stripe  || !elements){
            return;
        }       



    }
    return (
        <PaymentFormContainer>
            <FormContainer>
                <h2>Credit Card Payment: </h2>
                <CardElement  />
                <Button buttonType="google-sign-in">Pay with Stripe</Button>
            </FormContainer>
         </PaymentFormContainer>
    )
}

export default PaymentForm;