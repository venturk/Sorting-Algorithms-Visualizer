const PRIMARY_COLOR = '#73f7dd';
const COMPARISON_COLOR = "#e43f5a";
const FINAL_COLOR = "#e43f5a";
const ORIGINAL_COLOR = "#1f4068"

export default class SortingAnimationFromSequence {
    constructor(sortingSequence, sortingSpeedMs) {
        this.timing = 0;

        const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < sortingSequence.length; i++) {
            const [barOneIdx, barTwoIdx, barOneHeight, barTwoHeight] = sortingSequence[i];
            const barOne = arrayBars[barOneIdx].style;
            const barTwo = barOneHeight === undefined ? arrayBars[barTwoIdx].style : undefined;

            if (barOneHeight === undefined) {
                setTimeout(() => {
                    barOne.backgroundColor = COMPARISON_COLOR;
                    barTwo.backgroundColor = COMPARISON_COLOR;
                }, sortingSpeedMs * this.timing++);
                setTimeout(() => {
                    barOne.backgroundColor = PRIMARY_COLOR;
                    barTwo.backgroundColor = PRIMARY_COLOR;
                }, sortingSpeedMs * this.timing++);
            }
            else {
                setTimeout(() => {
                    if (barOneHeight === true) {
                        barOne.height = `${barTwoIdx}px`;
                    }
                    else {
                        barOne.height = `${barOneHeight}px`;
                        arrayBars[barTwoIdx].style.height = `${barTwoHeight}px`;
                    }
                }, sortingSpeedMs * this.timing++);
            }
        }

        setTimeout(() => {
            for (let i = 0; i < arrayBars.length; ++i) {
                arrayBars[i].style.backgroundColor = FINAL_COLOR;
            }
        }, sortingSpeedMs * this.timing++);

        this.timing += 250;

        setTimeout(() => {
            for (let i = 0; i < arrayBars.length; ++i) {
                arrayBars[i].style.backgroundColor = ORIGINAL_COLOR;
            }
        }, sortingSpeedMs * this.timing++);

        return this.timing;
    }
}