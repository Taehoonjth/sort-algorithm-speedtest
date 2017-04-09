//Make an array which is unsorted with a given length
const unSortedArrayMaker = function(length) {
  let arr = [];
  let m = 0;
  for (let i = 0; i < length; i++) {
    arr.push(i);
  }
  while(m < length) {
    let randomIndex = Math.floor(Math.random() * (length - m) + m);
    let temp = arr[randomIndex];
    arr[randomIndex] = arr[m];
    arr[m] = temp;
    m++;
  }
  return arr;
}

const bubbleSort = function(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('bubbleSort accepts only arrays');
  }
  if (array.length < 2) {
    return array.slice();
  }
  let result = array.slice();
  let end = result.length;
  while (end !== 1) {
    let swaped = false;
    for (var i = 0; i < end - 1; i++) {
      let a = result[i];
      let b = result[i + 1];
      if (a > b) {
        result[i] = b;
        result[i + 1] = a;
        swaped = true
      }
    }
    if (!swaped) {
      break;
    }
    end--;
  }
  return result;
}

var bubbleSort_2 = function(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('bubbleSort accepts only arrays');
  }
  var len = array.length;
  for (var i = 0; i < len; i++) {
    var swaps = 0;
    for (var j = 0; j < len - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swaps++;
        swap(j, j + 1, array);
      }
    }
    if (!swaps) { break; }
  }
  return array;
  };

const selectionSort = function(array) {
  if (array.length < 2) {
    return array.slice();
  }
  let result = array.slice();
  for (let i = 0; i < result.length; i++) {
    let min = result[i];
    for (let j = i; j < result.length; j++) {
      if (min > result[j]) {
        min = result[j];
        var minIndex = j;
      }
      if (j === result.length - 1) {
        if (min !== result[i]) {
          let t = result[i];
          result[i] = min;
          result[minIndex] = t;
        }
      }
    }
  }
  return result;
}

const swap = function(index1, index2, array) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
};

const merge = function(left, right) {
  let merged = [];
  let iLeft = 0;
  let iRight = 0;
  while (merged.length !== left.length + right.length) {
    if (iRight === right.length || left[iLeft] <= right[iRight]) {
      merged.push(left[iLeft]);
      iLeft++
    } else {
      merged.push(right[iRight]);
      iRight++
    }
  }
  return merged;
};

const recursiveMergeSort = function() {
  if (array.length < 2) {
    return array.slice();
  }
}

const iterativeMergeSort = function(array) {
  if (array.length < 2) {
    return array.slice();
  }
  var result = [];
  for (var i = 0; i < array.length; i++) {
    result.push([array[i]]);
  }
  while(result.length !== 1) {
    var temp = [];
    for (var i = 0; i < result.length; i += 2) {
      if (result[i + 1]) {
        temp.push(merge(result[i], result[i + 1]));
      } else {
        temp.push(result[i])
      }
    }
    result = temp;
  }
  return result[0];
}

const quickSort = function(array) {
  // console.log(array);
  if (array.length <= 1) {
    return array;
  } 
  var less = [];
  var greater = [];
  var pivot = array[array.length - 1];
  for (var i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }
  // console.log(`pivot is ${pivot}`);
  return quickSort(less).concat([pivot], quickSort(greater));
}


const heapSort = function(array) {
  const parentIndex = function(index) {
    return Math.floor((i - 1) / 2);
  }
  const childrenIndices = function(index) {
    return [index * 2 + 1, index * 2 + 2];
  }
  const buildMaxHeap = function(array) {
    const parentIndex = function(index) {
      return Math.floor((i - 1) / 2);
    }
    const childrenIndices = function(index) {
      return [index * 2 + 1, index * 2 + 2];
    }
    for (var i = array.length - 1; i > 0; i--) {
      if (array[parentIndex(i)] < array[i]) {
        swap(parentIndex(i), i, array);
        var childrenIndicesArray = childrenIndices(i);
        var currentIndex = i;
        while(array[childrenIndicesArray[0]] > array[currentIndex] || array[childrenIndicesArray[1]] > array[currentIndex]) {
          if (array[childrenIndicesArray[0]] > array[currentIndex]) {
            swap(childrenIndicesArray[0], currentIndex, array);
            currentIndex = childrenIndicesArray[0];
            childrenIndicesArray = childrenIndices(currentIndex);
          } else { 
            swap(childrenIndicesArray[1], currentIndex, array);
            currentIndex = childrenIndicesArray[1];
            childrenIndicesArray = childrenIndices(currentIndex);
          }
        }
      }
    }
    return array;
  }
  
}

const sortAlgorithmTester = function(n, algorithm1, algorithm2) {
  var algorithms = [...arguments].slice(1); 
  var unSortedArray = unSortedArrayMaker(n);
  console.log(`\nStart sorting the ${n} elements of an array\n`);
  for (var i = 0; i < algorithms.length; i++) {
    var unSortedArrayCopy = unSortedArray.slice();
    const start = new Date();
    var sortedArray = algorithms[i](unSortedArrayCopy);
    const end = new Date();
    var sorted = true;
    for (var j = 0; j < sortedArray.length - 2; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        sorted = false;
        break;
      }
    }
    if(sorted) {
      console.log(`${algorithms[i].name} took ${end - start} millisecond`);
    } else {
      console.log(`${algorithms[i].name} failed!`);
    }
  }
  console.log(`\nTest is over.`);
}


buildMaxHeap([ 6, 4, 3, 5, 1, 9, 0, 7, 8, 2, 1, 1, 1, 1 ]);
//sortAlgorithmTester(30000, bubbleSort, bubbleSort_2, selectionSort, iterativeMergeSort, quickSort);





