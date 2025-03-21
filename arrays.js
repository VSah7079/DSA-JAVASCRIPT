// let arr = new Array(3);
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;

// arr[10] = 10;
// console.log(arr);

// let arr1 = [10, 20, 30, 40, 50];
// let sum = 0;
// for (let i = 0; i < arr1.length; i++) {
//   sum = sum + arr1[i];
// }
// console.log(sum);

// let arr2 = [101, 20, 3, 4, 2, 5, 6, 100];
// let max = arr2[0];
// for (let i = 1; i < arr2.length; i++) {
//   if (max < arr2[i]) {
//     max = arr2[i];
//   }
// }
// console.log(max);

// let arr3 = [101, 20, 3, 4, 0, 5, 6, 100];
// let min = arr3[0];
// for (let i = 1; i < arr3.length; i++) {
//   if (min > arr3[i]) {
//     min = arr3[i];
//   }
// }
// console.log(min);

// let arr4 = [100, 20, 3, 4, 0, 5, 6, 100];
// let fmax = Math.max(arr4[0], arr4[1]);
// let smax = Math.min(arr4[0], arr4[1]);
// for (let i = 2; i < arr4.length; i++) {
//   if (arr4[i] > fmax) {
//     smax = fmax;
//     fmax = arr4[i];
//   } else if (arr4[i] > smax && fmax != arr4[i]) {
//     smax = arr4[i];
//   }
// }
// console.log(smax);

// let arr5 = [100, 20, 3, 4, 0, 5, 6, 100];
// let temp = new Array(arr5.length);
// let j = 0;
// for (let i = 0; arr5.length - 1; i++) {
//   temp[j] = arr5[i];
//   j++;
// }
// console.log(temp);

// let arr6 = [10, 20, 30, 40, 50];
// let i = 0,
//   j = arr6.length - 1;

// while (i != j) {
//   let temp = arr6[i];
//   arr6[i] = arr6[j];
//   arr6[j] = temp;
//   i++;
//   j--;
// }
// console.log(arr6);

let arr7 = [1, 1, 0, 1, 0, 1, 1, 0, 0];

let i = 0,
  j = 0;

while (i < arr7.length) {
  if (arr7[i] == 0) {
    let temp = arr7[i];
    arr7[i] = arr7[j];
    arr7[j] = temp;
    j++;
  }
  i++;
}
console.log(arr7);
