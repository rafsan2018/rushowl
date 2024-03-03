

Q2

Write a Typescript snippet to find out the minimum value of the maximum value of each nested array given the following structure


const values: number[][] = [
	[1,2,3,4,5],
	[3,4,5,6,7],
	[6,7,8,9,10]
]
const answer: number = calculateMinMax(values)
// 5

Ans: 

const values: number[][] = [
    [1, 2, 3, 4, 5],
    [3, 4, 5, 6, 7],
    [6, 7, 8, 9, 10]
];

function calculateMinMax(arr: number[][]): number {
    let maxValues: number[] = [];

    // Find maximum value in each nested array
    for (let subArray of arr) {
        let maxInSubArray = Math.max(...subArray);
        maxValues.push(maxInSubArray);
    }

    // Find the minimum among the maximum values
    let minOfMaxValues = Math.min(...maxValues);

    return minOfMaxValues;
}

const answer: number = calculateMinMax(values);
console.log(answer); // Output: 5

Q3

Explain the main difference of React and React Native during runtime.

Ans:

The main difference between React and React Native during runtime lies in how they render and interact with the user interface components.

1.Target Platform:

  *React: Primarily targets web browsers. It uses the DOM (Document Object Model) to render UI components in the browser.

  *React Native: Primarily targets mobile platforms (iOS and Android). It doesn't use the DOM; instead, it uses native components provided by the   platform (e.g., UIView on iOS, View on Android) to render UI components.

2.Rendering:

 *React: Renders components into the DOM using ReactDOM. It utilizes virtual DOM reconciliation to efficiently update the actual DOM based on changes in component state or props.

 *React Native: Renders components into native views using the React Native bridge. It translates React components into their native equivalents at runtime, allowing for a native look and feel on each platform.

3.Performance:

 *React: Performance can be affected by the size and complexity of the DOM, as well as the efficiency of virtual DOM reconciliation.

 *React Native: Generally offers good performance due to its use of native components, which are optimized for the target platform. However, performance can still be impacted by inefficient JavaScript code or complex UI interactions.


