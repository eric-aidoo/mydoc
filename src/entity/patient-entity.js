import ApplicationError from "../helpers/app-error";
import { VALIDATION_ERROR } from "../helpers/internal-error-codes";
import requireParam from "../helpers/require-param";
import isValidEmail from "../helpers/validate-email";
import isValidPhoneNumber from "../helpers/validate-phone";
import capitalize from "../helpers/capitalize-first-letter";
import hash from "../helpers/hash-password";
import isLegalAge from "../helpers/validate-dob";
import normalizeDate from "../helpers/normalize-date";


export default function createUser(user = requireParam('user details')) {
    const validPatient = validate(user) 
    const normalPatient = normalize(validPatient)
    return Object.freeze(normalPatient)

    // Validate user info
    function validate({
        email = requireParam('email'), 
        password = requireParam('password'), 
        firstName = requireParam('first name'), 
        lastName = requireParam('last name'), 
        phone = requireParam('phone'),
        dob = requireParam('date of birth'),
        medicalHHistory = null,
        line1 = requireParam('street name'),
        line2 = null,
        city = requireParam('city'),
        state = requireParam('state'),
        country = requireParam('country'),
        zipCode = requireParam('zip code')

    } = {}) {
        validateEmail(email)
        validateName('first', firstName)
        validateName('last', lastName)
        validatePhone(phone)
        validateDateOfBirth(dob)
        return {email, password, firstName, lastName, phone, dob, medicalHHistory, line1, line2, city, state, country, zipCode}
    }

    function validateEmail(email) {
        if (!isValidEmail(email)) {
            throw new ApplicationError(VALIDATION_ERROR, 'Invalid email', 400)
        }
    }

    function validateName(tag, name) {
        if (name.length < 2) {
            throw new ApplicationError(VALIDATION_ERROR, `A user's ${tag} name must be at least 2 characters long`, 400)
        }
    }

    function validatePhone(phone) {
        if (!isValidPhoneNumber(phone)) {
            throw new ApplicationError(VALIDATION_ERROR, 'Invalid phone number. Phone number must contain a country code followed by the number e.g. +12345678901', 400)
        }
    }

    function validateDateOfBirth(dob) {
        if (!isLegalAge(dob)) {
            throw new ApplicationError(VALIDATION_ERROR, 'You must be 18 years or older to create your own account', 400)
        }
    }

    // Normalize valid user
    function normalize({email, password, firstName, lastName, phone, dob, medicalHHistory, line1, line2, city, state, country, zipCode}) {
        return {
            user: {
                email: email.toLowerCase(),
                password: hash(password),
                first_name: capitalize(firstName),
                last_name: capitalize(lastName), 
                phone: phone.toString(),
                dob: normalizeDate(dob),
                medical_history: medicalHHistory,
                address: {
                    line1: capitalize(line1),
                    line2: capitalize(line2),
                    city: capitalize(city),
                    state: state.toUpperCase(),
                    country: capitalize(country),
                    postal_code: zipCode.toString()
                }
            }
        }
    }
}