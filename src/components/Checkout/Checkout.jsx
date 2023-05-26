import ReactDOM from 'react-dom';
import { loadStripe } from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';

import stripe from 'stripe';


const CheckoutForm = () => {
   
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (elements == null) {
            return;
        }

        // const { error, paymentMethod } = await stripe.createPaymentMethod({
        //     type: 'card',
        //     card: elements.getElement(CardElement),
        // });

        const paymentIntent = await stripe.paymentIntents.create({
            receipt_email: 'pratik@gmail.com',
            metadata: {
                // we will use this order id to update the order when webhook called
                orderId:1,
            },
            amount: 100 * 100,//amount in usd
            currency: "usd",
            payment_method: "card",
            automatic_payment_methods: {
                enabled: true
            }
        });
        console.log(paymentIntent)
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe || !elements}>
                Pay
            </button>
        </form>
    );
};

const stripePromise = loadStripe('pk_test_51KBAVFSFZWMnloUwJshrJzEzhNDnk1QMy54iLLBYZij7LmGQRTLUttMYHu86DBoDmlarAUXgsdFF0bkMZz8azQd500P2sDVSTF');

const Checkout = () => {

    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>

    )
}

export default Checkout