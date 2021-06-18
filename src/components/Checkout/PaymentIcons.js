import americanExpress from '../../assets/images/svg/paiment 1.svg';
import bc from '../../assets/images/svg/paiment 2.svg';
import masterCard from '../../assets/images/svg/paiment 3.svg';
import visa from '../../assets/images/svg/paiment 4.svg';
import paypal from '../../assets/images/svg/paiment 5.svg';

const PaymentIcons = () => {
    return (
        <div id="payment-icons">
            <img src={ americanExpress } alt="Icône American Express"/>
            <img src={ bc } alt="Icône Carte Bancaire"/>
            <img src={ masterCard } alt="Icône MasterCard"/>
            <img src={ visa } alt="Icône Visa"/>
            <img src={ paypal } alt="Icône PayPal"/>
        </div>
    );
}

export default PaymentIcons;
