import {Deal} from '../../constants';

export const CalculateScore = (listOfValues) => {
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
        if(value !== Deal) {
            score += value;
        }
    });

    const dealCards = listOfValues.filter(value =>  value === Deal);
    multiplier += dealCards.length;

    return (score * multiplier) + bonus;
}
