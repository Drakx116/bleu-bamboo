import '../../assets/scss/global/_button.scss';

const Button = ({ text, fontSize= 16, marginTop = '16px' }) => {
    return <button style={{ 'marginTop': marginTop, 'fontSize': fontSize }} className='btn-primary'>{ text }</button>;
}

export default Button;
