import { PaymentElement } from "@stripe/react-stripe-js";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import {useState} from "react";
import "./checkoutForm.css"
import {useNavigate} from "react-router-dom";

export default function CheckoutForm({onPaymentSuccess}) {
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessing, setIsProcessing] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsProcessing(true);
        const { error } = await stripe.confirmPayment({
            elements,
            redirect: "if_required",
        });
        setIsProcessing(false);
        onPaymentSuccess();
        navigate('/confirmation');

    };

    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <PaymentElement id="payment-element" />
            <button className = "pay-now" disabled={isProcessing || !stripe || !elements} id="submit">
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
            </button>
        </form>
    );
}