/* Helper functions for immutability  */

// Returns a new array with newObj replacing the element with the same id
export function immutReplaceById(arr, nowOjb, idPropName) {
  console.log('updateArrayById NOT WRITTEN YET')
}

export function immutRemoveElement(arr, elementValue) {
    let newArr = arr.slice()
    let i = arr.indexOf(elementValue)
    newArr.splice(i, 1);
    return newArr
}