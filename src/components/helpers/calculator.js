import {Deal} from '../../constants';

export const CalculateScore = (listOfValues) => {
    let score = 0;
    let multiplier = 1;
    if(listOfValues.length > 0) {
        score -= 20;
    }
    listOfValues.forEach(value => {
        if(value !== Deal) {
            score += value;
        }
    });

    const dealCards = listOfValues.filter(value =>  value === Deal);
    multiplier += dealCards.length;

    return score * multiplier;
}
