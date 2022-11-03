/*
 * Домашнее задание: реализуйте функции sum, mul и avg
 */
module.exports = {
    sum: function(...arg) {
     let sum = arg.reduce((prev, next)=>prev + next, 0);
     return sum;
    },
    mul: function(...arg) { 
        let mul = arg.reduce((prev, next)=>prev * next, 1);
        return mul;  
    },
    avg: function(...arg) { 
        let sum = arg.reduce((prev, next)=>prev + next, 0);
        let avg = sum / arg.length;
        return avg; 
    },
};