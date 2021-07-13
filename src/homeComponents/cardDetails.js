import primes from "./images/primes.jpg";
import sort from "./images/sort.jpg";
import sort1 from "./images/sort1.png";
import binSearch from "./images/binaryTree.png";

export function getDetails() {
    return [
        {
            id: 1,
            title: "Sorting Algorithm",
            description: "A Sorting Algorithm is used to rearrange a given array or list elements according to a comparison operator on the elements. The comparison operator is used to decide the new order of element in the respective data structure.",
            route: "/sort",
            img: sort
        },
        {
            id: 2,
            title: "Binary Search",
            description: " Search a sorted array by repeatedly dividing the search interval in half. Begin with an interval covering the whole array. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half.",
            route: "/binarysearch",
            img: binSearch
        },
        {
            id: 3,
            title: "Recursive Sorting",
            description: "Recursive techniques can be utilized in sorting algorithms, allowing for the sorting of n elements in O(nlogn) time (compared with the O(n2) efficiency of bubble sort. Two such algorithms which will be examined here are Mergesort and Quicksort.",
            route: "/recursivesort",
            img: sort1
        },
        {
            id: 4,
            title: "Prime Numbers",
            description: "Visualize how Seive is better than brute force",
            route: "/prime",
            img: primes
        }
    ]
}