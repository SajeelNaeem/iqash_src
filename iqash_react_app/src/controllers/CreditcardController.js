import CreditcardForm from "../components/Creditcard"

export default function CreditcardController(){
    const onConfirm = () => {
        return console.log('I am in Controller!')
    }

    return <CreditcardForm onConfirm={onConfirm} />
}