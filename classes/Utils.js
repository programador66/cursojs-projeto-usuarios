class Utils {

    static dateFormat(value) {
        return value.getDate() + '/' + (value.getMonth() + 1) + '/' + value.getFullYear() + ' ' + value.getHours() + ':' + value.getMinutes();
    }

}