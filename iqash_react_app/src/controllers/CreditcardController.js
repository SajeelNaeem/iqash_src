import * as React from 'react';
import CreditcardForm from "../components/creditcard/Creditcard"
import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:9000'
  });

export default function CreditcardController(){
    const [response, setResponse] = React.useState('')
    

    const onConfirm = async (data) => {
        console.log('I am in Controller!')

        await instance.post('/payment', data).then((resp) => { 
            console.log('post request done')
            setResponse(resp.data)
            return resp.data
        })
        .catch(err => {console.log(err)})


        // await instance.get('/payment').then(() => {
        //     console.log('get request done')
        // })
        // .catch(err => {console.log(err)})       
    }


    return (
        <CreditcardForm onConfirm={onConfirm}  response={response}/>
    )
}
