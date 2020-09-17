export  const required = value => {
    if (value) return  undefined;
    return  'Field is required' ;
}

export  const maxLengthOfMessage = maxLength => value => {
    if(value.length > maxLength) return `Maximum length of message is ${maxLength} symbols`;

    return undefined;
}
