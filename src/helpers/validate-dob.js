export default function isLegalAge(dob) {
    var birthday = +new Date(dob);
    const age = ~~((Date.now() - birthday) / (31557600000));
    return age > 17 ? true : false;
}