const { async } = require("@firebase/util");

require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

 exports.handler = async (event) => {

    try {

        const{ amount } = JSON.parse(event.body);

         const paymentIntent  = await stripe.paymentIntents.create({
             amount,
             currency: "usd",
             payment_methods_types: ["card"],

         });


         return{
             statusCodee: 200,
             body: JSON.stringify({ paymentIntent })
         }
        
    } catch (error) {
        console.log(error);

        return{
            status: 400,
            body: JSON.stringify({error})
        }
        
    }
 }