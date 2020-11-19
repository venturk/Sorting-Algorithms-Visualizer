import React from 'react';
import './SortingVisualizer.css';
import mergeSortingSequence from '../sortingAlgorithms/MergeSort.jsx';
import bubbleSortingSequence from '../sortingAlgorithms/BubbleSort.jsx';
import heapSortingSequence from '../sortingAlgorithms/HeapSort.jsx';
import selectionSortingSequence from '../sortingAlgorithms/selectionSort.jsx';
import SortingAnimationFromSequence from './SortingAnimationFromSequence.jsx';
import '../toolbar/Toolbar.css';

const NUM_OF_ELEMENTS = 150;

export default class SortingVisualizer extends React.Component
{
    constructor(properties)
    {
        super(properties);

        this.isSorting = false;

        this.state =
        {
            array: [],
        };
    }

    componentDidMount()
    {
        /* initialize a random array */
        this.initArr();
    }

    initArr()
    {
        /* if there is no active sorting sequence */
        if (false === this.isSorting)
        {
            const array = [];
            
            /* for each element in the array */
            for (let i = 0; i < NUM_OF_ELEMENTS; ++i)
            {
                /* set a random height (value) */
                array.push(this.randomNumberInRange(50, 750));
            }

            /* update array */
            this.setState({ array });
        }

    }

    randomNumberInRange(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    sortFunction(animation_speed, sortingSequenceFunc)
    {
        /* if there is no sorting at the moment */
        if (false === this.isSorting)
        {
            /* set sorting flag */
            this.isSorting = true;

            /* get sorting sequence animation */
            const sortingSequence = sortingSequenceFunc(this.state.array);

            /*
                run animation of sorting sequence
                and set the sorting duration
            */
            let sorting_time = new SortingAnimationFromSequence(sortingSequence,
                                                    animation_speed);
            
            /*
                set sorting flag to false
                only after sorting sequence is over
            */
            setTimeout(() =>
            {
                this.isSorting = false;
            }, animation_speed * sorting_time.timing);
        }
    }

    render()
    {
        const { array } = this.state;

        return (
            <div className="array-container">
                <haeader className="toolbar">
                    <nav className="toolbar__navigation">
                        <div></div>
                        <div className="toolbar__logo">
                            Sorting Algorithms Visualizer
                        </div>

                        <div className="spacer"></div>

                        <div className="toolbar_navigation-items">
                            <ul>
                                <li><a href="javascript:void(0);" onClick={() => this.initArr()}>Randomize array</a></li>
                                <li><a href="javascript:void(0);" onClick={() => this.sortFunction(5, mergeSortingSequence)}>Merge Sort</a></li>
                                <li><a href="javascript:void(0);" onClick={() => this.sortFunction(1, bubbleSortingSequence)}>Bubble Sort</a></li>
                                <li><a href="javascript:void(0);" onClick={() => this.sortFunction(5, heapSortingSequence)}>Heap Sort</a></li>
                                <li><a href="javascript:void(0);" onClick={() => this.sortFunction(1, selectionSortingSequence)}>Selection Sort</a></li>
                            </ul>
                        </div>
                    </nav>
                </haeader>

                {
                    array.map((value, idx) =>
                    (
                        <div className="array-bar" key={idx}
                                            style={{ height: `${value}px` }}>
                            {'.'}
                        </div>
                    ))
                }
            </div>
        );
    }
}