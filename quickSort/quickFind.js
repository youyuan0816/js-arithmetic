/*
 * @Description: 快速查找（按照快速排序的思路进行查找）
 * @version: 
 * @Author: youyuan
 * @Date: 2021-08-19 23:24:23
 * @LastEdited: 
 * @LastEditTime: 2021-08-22 15:44:34
 */
const arr = [3, 6, 1 ,9, 10, 2, 4, 0];
const target = 3;

function quickFind(arr, l, r, target) {
    if (l <= r) {
        let i = l;
        let j = r;
        let tem = arr[l];
        while (i < j) {
            while (i < j && arr[j] > tem) {
                j--;
            }
            if (i < j) {
               arr[ i++] = arr[ j ];
            }
            while (i < j && arr[i] < tem) {
                i++;
            }
            if (i < j) {
                arr[j--] = arr[i];
            }
        }
        if (i === target) {
            return tem;
        }
        if (i < target) {
            arr[i] = tem;
            return quickFind(arr, i + 1, r, target);
        }
        if (i > target) {
            arr[i] = tem;
            return quickFind(arr, l, i - 1, target);
        }
    }
}

const num = quickFind(arr, 0, arr.length - 1, 3);
console.log(num);