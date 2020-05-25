import React from 'react';
import './SortingVisualizer.css';
import mergeSortingSequence from '../sortingAlgorithms/MergeSort.jsx';
import bubbleSortingSequence from '../sortingAlgorithms/BubbleSort.jsx';
import heapSortingSequence from '../sortingAlgorithms/HeapSort.jsx';
import SortingAnimationFromSequence from './SortingAnimationFromSequence.jsx';
import '../toolbar/Toolbar.css';

const NUM_OF_ELEMENTS = 125;

export default class SortingVisualizer extends React.Component {
    constructor(properties) {
        super(properties);

        this.isSorting = false;

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.initArr();
    }

    initArr() {
        const array = [];

        for (let i = 0; i < NUM_OF_ELEMENTS; ++i) {
            array.push(this.randomNumberInRange(50, 750));
        }

        this.setState({ array });
    }

    randomNumberInRange(minimum, maximum) {
        return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    }

    mergeSort(ms) {
        if (this.isSorting === false) {
            this.isSorting = true;

            const sortingSequence = mergeSortingSequence(this.state.array);
            let s = new SortingAnimationFromSequence(sortingSequence, ms);

            setTimeout(() => {
                this.isSorting = false;
            }, ms * s.timing);
        }
    }

    bubbleSort(ms) {
        if (this.isSorting === false) {
            this.isSorting = true;

            const sortingSequence = bubbleSortingSequence(this.state.array);
            let s = new SortingAnimationFromSequence(sortingSequence, ms);

            setTimeout(() => {
                this.isSorting = false;
            }, ms * s.timing);
        }
    }

    heapSort(ms) {
        if (this.isSorting === false) {
            this.isSorting = true;

            const sortingSequence = heapSortingSequence(this.state.array);
            let s = new SortingAnimationFromSequence(sortingSequence, ms);

            setTimeout(() => {
                this.isSorting = false;
            }, ms * s.timing);
        }
    }

    render() {
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
                                <li><a href="javascript:void(0);" onClick={() => this.mergeSort(5)}>Merge Sort</a></li>
                                <li><a href="javascript:void(0);" onClick={() => this.bubbleSort(1)}>Bubble Sort</a></li>
                                <li><a href="javascript:void(0);" onClick={() => this.heapSort(5)}>Heap Sort</a></li>
                            </ul>
                        </div>
                    </nav>
                </haeader>

                {
                    array.map((value, idx) => (
                        <div className="array-bar" key={idx} style={{ height: `${value}px` }}>
                            {'.'}
                        </div>
                    ))
                }
            </div>
        );
    }
}