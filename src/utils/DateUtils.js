const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function getFormattedDate(date) {
    const jsDate = new Date(date);
    const month = jsDate.getMonth();
    return `${jsDate.getDate()} ${MONTH[month]}`;
}
