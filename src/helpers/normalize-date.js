export default function normalizeDate(date) {
    return new Date(date).toLocaleDateString('en-CA'); 
}