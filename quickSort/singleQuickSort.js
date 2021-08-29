/*
 * @Description: 单边快速排序优化
 * @version: 
 * @Author: youyuan
 * @Date: 2021-08-21 20:46:00
 * @LastEdited: 
 * @LastEditTime: 2021-08-22 15:59:49
 */
const exampleArr = [0, 8, 4, 6, 10, 15, 7, 2, 1, 3];

function singleQuickSort(arr, l, r) {
    while(l < r) {
        const index = partition(arr, l, r);
        singleQuickSort(arr, index + 1, r);
        r = index - 1;
    }
}

function partition(arr, l, r) {
    const tem = arr[l];
    while(l < r) {
        while(l < r && tem < arr[r]) {
            r--;
        }
        if (l < r) {
            arr[l++] = arr[r];
        }
        while(l < r && tem > arr[l]) {
            l++;
        }
        if (l < r) {
            arr[r--] = arr[l]
        }
    }
    arr[l] = tem;
    return l;
}


singleQuickSort(exampleArr, 0, exampleArr.length - 1);

console.log(exampleArr);
