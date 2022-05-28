import CreditcardForm from "../components/Creditcard"
import axios from 'axios'

export default function CreditcardController(){
    const onConfirm = (creditcardnumber) => {
        console.log('I am in Controller!')

        const instance = axios.create({
            baseURL: 'http://localhost:9000'
          });

        instance.post('/payment', {creditcardnumber}).then(() =>{ 
            console.log('done')
        })
        .catch(err => {console.log(err)})

    }

    return <CreditcardForm onConfirm={onConfirm} />
}