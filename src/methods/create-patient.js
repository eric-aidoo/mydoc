import makeHttpRequest from "../helpers/http-request-maker"

/**
 * 
 * @param {string} email 
 * @param {string} password
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} phone
 * @param {string} dob
 * @param {string} medicalHHistory
 * @param {string} line1
 * @param {string} line2
 * @param {string} line1
 * @param {string} city
 * @param {string} state
 * @param {string} country
 * @param {string} zipCode
 */
export const createNewAccount = async (patientDetails) => {
    patientDetails = mockupRequestBody;
    const endpoint = `http://localhost:3000/api/v1/signup`
    makeHttpRequest(endpoint, 'POST', patientDetails)
}
