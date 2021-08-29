/*
 * @Description: 中间值优化的快速排序
 * @version: 
 * @Author: youyuan
 * @Date: 2021-08-22 15:42:12
 * @LastEdited: 
 * @LastEditTime: 2021-08-22 17:02:35
 */

const arr = [10, 9, 23, 10, 2, 8, 34, 0, 1, 7, 4, 89];



function partitionQuickSort(arr, l, r) {
    while(l < r) {
        let index = quickSort(arr, l, r);
        quickSort(arr, index + 1, r);
        r = index - 1;
    }
}

function template(arr, l, r) {
    const first = arr[l];
    const last = arr[r];
    const mid = arr[l + Math.floor((r - l) / 2)];
    if (first > last) {
        if (first < mid) {
            return first;
        } else {
            return mid;
        }
    } else {
        if (last < mid) {
            return last;
        } else {
            return mid;
        }
    }
}

function quickSort(arr, l, r) {
    let tem = template(arr, l, r);
    let index = arr.indexOf(tem);
    let first = false;
    while(l < r) {
        
        while(l < r && tem < arr[r]) {
            r--;
        }
        if (l < r) {
            if (!first) {
                first = true;
                arr[index] = arr[l];
            }
            arr[l++] = arr[r];
            
        }
        while(l < r && tem > arr[l]) {
            l++;
        }
        if (l < r) {
            if (!first) {
                first = true;
                arr[index] = arr[l];
            }
            arr[r--] = arr[l];
            
        }
    }
    arr[l] = tem;
    return l;
}


partitionQuickSort(arr, 0, arr.length - 1);

console.log(arr);
