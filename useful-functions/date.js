function dateFormat(dateString, dateLocale) {
    var dateSlice = dateString.split('/');
    var date = new Date(dateSlice[2], dateSlice[1] - 1, dateSlice[0]);
    var dateOptions = { day: '2-digit', month: 'long', year: 'numeric' };
    var formatedDate = date.toLocaleDateString(dateLocale, dateOptions);
    return formatedDate;
}