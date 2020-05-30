import {Deal} from '../../constants';

export const CalculateScore = (listOfValues: Array<string>):number => {
    let score = 0;
    let multiplier = 1;
    let bonus = 0;
    
    const length = listOfValues.length;
    if(length > 0) {
        score -= 20;
    }
    if (length >= 8) {
        bonus = 20;
    }
    listOfValues.forEach(value => {
        if(!value.toString().includes(Deal)) {
            score += parseInt(value);
        }
        else {
            multiplier++;
        }
    });
    return (score * multiplier) + bonus;
}
