// Phone number validation for U.S. phones only. You can apply
// the same logic for phone numbers of any other country
export default function isValidPhoneNumber(phone) {
    // U.S. phone syntax: +countryCode[number] e.g. +12345678901
    const isValidCountryCode = phone.slice(0, 2) === '+1';
    const numberAfterCountryCode = phone.slice(2, 12);
    const isValidUSNumber = new RegExp('^[0-9]{10}$').test(numberAfterCountryCode) === true;

    // Here, we're basically saying, if phone number (i.e. countryCode + number) is less than 12, return false
    // else if country code (i.e. +1) is less than 2, false... Hope you get it  
    return phone.length < 12 ? false 
        : !isValidCountryCode ? false
        : !isValidUSNumber ? false
        : true;
}