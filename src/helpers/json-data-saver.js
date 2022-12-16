const fs = require('fs');

/**
 * @param {string} dataToAdd The data you want to add to the JSON file
 * @param {string} file Name/directory to the JSON file
 */
const addToJSONFile = (dataToAdd, file) => {
    fs.readFile(file, "utf8", (error, data) => {
        try {
            if (error) {
                console.log(error.message)
            }
            const JSONFileContent = JSON.parse(data); 
    
            JSONFileContent.push(dataToAdd); 
            const logs = JSON.stringify(JSONFileContent, null, 4);
            fs.writeFile(file, logs, "utf8", (error) => {
                return error ? console.log(error.message) : '';
            })
        } catch (error) {
            console.log(error)
        }
    })
}

export default addToJSONFile;