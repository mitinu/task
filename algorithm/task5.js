class Item{
    childLeft
    childRight
    constructor(value){
        this.value = value
    }
}
class Tree{
    head
    length = 0
    constructor(){}
    push(value){
        const newItem = new Item(value)
        this.length++
        if(this.length == 1)
           this.head = newItem
        else{
            const paths = this.length.toString(2).split("") // разбиваем число на двоиченую систему чтоб найти место для обекта
            let item = this.head
            for (let i = 1; i < paths.length-1; i++) {
                if (paths[i]==0) {
                    item = item.childLeft
                } 
                else{
                    item = item.childRight
                }
            }
            if (paths[paths.length-1]==0) {
                item.childLeft = newItem
            }
            else{
                item.childRight = newItem
            }
        }
    }
    sort(){
        for (let lengthUnsortedTreen = this.length>>1; lengthUnsortedTreen > 0; lengthUnsortedTreen--) {//сдигаем байты числа в право чтобы получить число на уровень выше в дереве 
            let item = this.head
            const paths = lengthUnsortedTreen.toString(2).split("") 
            for (let j = 1; j < paths.length; j++) {
                if (paths[j]==0) {
                    item = item.childLeft
                } 
                else{
                    item = item.childRight
                }
            }
            this.sortChild(item)
        }
        const arrSort = new Array(this.length)
        while(this.length>0){
            let item = this.head
            let buffer
            const paths = this.length.toString(2).split("")
            for (let i = 1; i < paths.length-1; i++) {
                if (paths[i]==0) {
                    item = item.childLeft
                } 
                else{
                    item = item.childRight
                }
            }
            arrSort[this.length-1] = this.head.value;
            if(this.length>1){
                if (paths[paths.length-1]==0) {
                    buffer = item.childLeft.value
                    item.childLeft = null
                } 
                else{
                    buffer = item.childRight.value
                    item.childRight = null
                }
                this.head.value = buffer
            }
            else{
                this.head = null
            }
            this.length--
            if (this.length>1) {
                this.sortChild(this.head)
            }

        }
        return arrSort
    }
    sortChild(item){
        if (item.value<item.childRight?.value) {
            this.swap(item, item.childRight)
        }
        if (item.value<item.childLeft.value) {
            this.swap(item, item.childLeft)
        }
    }
    swap(item, child){
        const buffer = item.value
        item.value = child.value
        child.value = buffer
        if (child.childLeft) {
            this.sortChild(child)
        }
    }
}



/**
 *      нашел формулу слишком поздно да и сам не додумался 
 *      левый ребенок = 2*i + 1
 *      правый ребенок = 2*i + 2
 *      можно обойтись без создание дерева и работать в исхдном массиве 
 */




function heapSort(arr){
for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapify(arr, arr.length, i)
  }
  for (let i = arr.length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    
    heapify(arr, i, 0)
  }
  return arr
}
function heapify(arr, n, i) {
  let largest = i
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (right < n && arr[right] > arr[largest]) {
    [arr[largest], arr[right]] = [arr[right], arr[largest]];
    heapify(arr, n, right)
  }

  if (left < n && arr[left] > arr[largest]) {
    [arr[largest], arr[left]] = [arr[left], arr[largest]];
    heapify(arr, n, left)
  }
}




const arr = [10, 19, 109, 1, 45, 7, 1, 123]

const tree = new Tree()
for (let i = 0; i < arr.length; i++) {
    tree.push(arr[i])
}
const arrSort = tree.sort()
console.log(arrSort)

const arrHeapSort = heapSort(arr)
console.log(arrHeapSort)


