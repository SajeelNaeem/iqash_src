

// takes text as a string, maxLength as a number and numericType as a boolean 
export default function validation(text, maxLength, numericType){
    let errormessage

    // check maximum length of the textfield 
    errormessage = checkMaxlength(text, maxLength)
    // errormessage = checkCharacters(text, numericType)

    // check input type of the textfield 
    if(!errormessage){
        errormessage = checkCharacters(text, numericType)
        return errormessage
    }
    return errormessage
}


// takes test as a string and maxLength as a number
const checkMaxlength = (text, maxLength) => {
    let error

    if (text.length > maxLength) {
        error = `The input should contain only ${maxLength} characters`
    }
    return error;
}


// takes text as a string and numericType as a boolean 
const checkCharacters = (text, numericType) => {
    let error

    // check if the field text should contain only digits
    if(numericType){
        if(text.match(/^(?=.*[0-9]+$)/)){
            return error
        }
        else{
            error = "The input should contain only digits"
            return error
        }
    }

    // check if the field text should contain only alphabets 
    else{
        if( !text.match(/^[0-9]+$/) && text.match(/^(?=.*[a-zA-Z]+$)(?=.*\s)/) ) {
            return error
        }
        else{
            error = "The input should contain only alphabets with only one white space between Names"
            return error
        }
    }
}

// if(text.match(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)){

    // }