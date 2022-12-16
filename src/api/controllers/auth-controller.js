const { default: createUser } = require("../../entity/patient-entity");
const { default: ApplicationError } = require("../../helpers/app-error");
const { REQUIRED_DATA } = require("../../helpers/internal-error-codes");

const NAME_OF_MY_ORGANIZATION = 'MyDoc Healthcare Center'

exports.signUp = (req, res) => {
    if (!req.body) {
        throw new ApplicationError(REQUIRED_DATA, 'Request body is required', 400)
    }

    let userInfo = req.body;
    const newPatient = createUser(userInfo)
    
    // @TODO: you can save @newPatient to your preferred database like MongoDB or SQL
    res.status(201).json({
        success: true,
        message: `You've successfully created a new account with ${NAME_OF_MY_ORGANIZATION}`,
        data: newPatient
    })
}