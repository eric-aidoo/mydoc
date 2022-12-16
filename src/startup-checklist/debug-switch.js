// Debugging switch
export const turnOffDebugging = () => {
    return console.log = () => { };
}
