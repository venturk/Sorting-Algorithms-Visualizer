const PRIMARY_COLOR = '#73f7dd';
const COMPARISON_COLOR = "#e43f5a";
const FINAL_COLOR = "#e43f5a";
const ORIGINAL_COLOR = "#1f4068"

export default class SortingAnimationFromSequence {
    constructor(sortingSequence, sortingSpeedMs) {
        this.timing = 0;

        const arrayBars = document.getElementsByClassName('array-bar');

        /* for each soting sequence */
        for (let i = 0; i < sortingSequence.length; i++)
        {
            const [barOneIdx, barTwoIdx, barOneHeight, barTwoHeight] = sortingSequence[i];
            const barOne = arrayBars[barOneIdx].style;
            const barTwo = barOneHeight === undefined ? arrayBars[barTwoIdx].style : undefined;

            /* current sequence is a comparison sequence */
            if (undefined === barOneHeight)
            {
                /* Comparison animation (the compared bars are colored) */
                setTimeout(() =>
                {
                    barOne.backgroundColor = COMPARISON_COLOR;
                    barTwo.backgroundColor = COMPARISON_COLOR;
                }, sortingSpeedMs * this.timing++);

                /* Return to primary color (comparison is finished) */
                setTimeout(() =>
                {
                    barOne.backgroundColor = PRIMARY_COLOR;
                    barTwo.backgroundColor = PRIMARY_COLOR;
                }, sortingSpeedMs * this.timing++);
            }
            else    /* bar(s) value should be updated */
            {
                setTimeout(() =>
                {
                    if (true === barOneHeight)
                    {
                        /* Update bar's new height */
                        barOne.height = `${barTwoIdx}px`;
                    }
                    else
                    {
                        /* Update bar's new height */
                        barOne.height = `${barOneHeight}px`;
                        arrayBars[barTwoIdx].style.height = `${barTwoHeight}px`;
                    }
                }, sortingSpeedMs * this.timing++);
            }
        }

        /* color all bars in a FINAL COLOR when sorting is done */
        setTimeout(() =>
        {
            /* for each bar in the array */
            for (let i = 0; i < arrayBars.length; ++i)
            {
                /* color all bars */
                arrayBars[i].style.backgroundColor = FINAL_COLOR;
            }
        }, sortingSpeedMs * this.timing++);

        /* increase delay */
        this.timing += 250;

        /* return to riginal color */
        setTimeout(() =>
        {
            /* for each bar in the array */
            for (let i = 0; i < arrayBars.length; ++i)
            {
                /* color all bars */
                arrayBars[i].style.backgroundColor = ORIGINAL_COLOR;
            }
        }, sortingSpeedMs * this.timing++);

        return this.timing;
    }
}