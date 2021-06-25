import '../../assets/scss/global/_button.scss';

const Button = ({ text, type = 'primary', fontSize= 16, marginTop = '16px' }) => {
    return <button style={{ 'marginTop': marginTop, 'fontSize': fontSize }} className={ 'btn ' + type }>{ text }</button>;
}

export default Button;
