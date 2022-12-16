import ApplicationError from "./app-error";
import { REQUIRED_DATA } from "./internal-error-codes";

export default function requireParam(param) {
    if (!param) {
        throw new ApplicationError(REQUIRED_DATA, `${param} is required`, 400)
    }
}