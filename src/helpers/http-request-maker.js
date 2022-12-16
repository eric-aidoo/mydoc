// Http Request Maker Module
export default async function makeHttpRequest(endpoint, requestMethod = requestMethod.toUpperCase(), requestBody) {
    let allowedMethods = ['POST', 'GET'];
    if (!allowedMethods.includes(requestMethod)) {
        throw new Error(`${requestMethod} method is not allowed`)
    }

    const options = {
        method: requestMethod,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    };

    try {
        const response  = await fetch(endpoint, options);

        if (!response.ok) {
            throw new Error({
                success: false,
                message: 'The request was not successful',
                statusCode: response.status
            })
        }

        const data = await response.json();
        return data;
    } catch (error) {
        return error.message
    } 
}