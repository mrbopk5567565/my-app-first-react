// export const calcAverage = () => {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++){
//         sum += arguments[i];
//     }
//     return sum / arguments.length;
// }

export function averegeCalc() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number') {
            sum += arguments[i];
        } else {
            let x = parseInt(arguments[i]);
            sum += x;
        }
    }
    return sum / arguments.length;
}

export function Rank(average){
    let classify = '';
    const classify_good = 'good';
    const classify_pretty = 'pretty';
    const classify_medium = 'medium';
    const classify_weak = 'weak';
    if (average >= 5 && average < 6.5){
        classify = classify_medium;
    } else if (average >= 6.5 && average < 8){
        classify = classify_pretty;
    } else if (average >= 8 && average <= 10){
        classify = classify_good;
    } else {
        classify = classify_weak;
    }
    return classify;
}

export const getDataFromLocalStorage = key => JSON.parse(localStorage.getItem(key))

export const saveDataToLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data))