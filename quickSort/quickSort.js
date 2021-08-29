/*
 * @Description: 快速排序
 * @version: 
 * @Author: youyuan
 * @Date: 2021-08-15 16:53:36
 * @LastEdited: 
 * @LastEditTime: 2021-08-22 15:43:03
 */
const arr = [10, 9, 7, 3, 1, 0, 14];

function quickSort(arr, l, r) {
    if (l < r) {
        let i = l;
        let j = r;
        let tem = arr[l];
        while (i < j) {
            while ( i < j && arr[j] > tem) {
                j--;
            }
            if (i < j) {
                arr[i++] = arr[j];
            }
            while( i< j && arr[i] < tem) {
                i++;
            }
            if (i < j) {
                arr[j--] = arr[i];
            }
        }
        arr[i] = tem;
        quickSort(arr, l, i - 1);
        quickSort(arr, i + 1, r);
    }
    
}

quickSort(arr, 0, arr.length - 1);
console.log(arr)