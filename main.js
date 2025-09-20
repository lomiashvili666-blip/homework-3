
/*

function getAvrage(num) {
    let sum = 0


    for (let i = 0; i < num.length; i++) {

        sum += num[i]

    }
    let avrage = sum / num.length
    return avrage
}

console.log(getAvrage([2, 3, 4]))
*/



/*
function digitReverse(num) {
  let str = num.toString()
  let result = []

  for (let i = str.length - 1; i >= 0; i--) {

      result.push(Number(str[i]))
  }
  return result
}
console.log(digitReverse(2341))
*/


/*
function diffNums(a, b) {
    let result = []

    for (let i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) {
            result.push(a[i])
        }
    }
    return result
}

console.log(diffNums([1, 2, 2, 4, 4, 4, 5,], [2, 2, 4, 7, 3]))

*/
/*
function secondLargest(arr) {
    arr.sort(function (a, b) {
        return b - a
    })
    return arr[1]
}
console.log(secondLargest([10, 20, 30, 45, 234, 42]))

*/
/*
function isPalindroms(str) {
    let result = []
    for (i = 0; i < str.length; i++) {
        let word = str[i]
        let reversed = word.split("").reverse().join("")

        if (word === reversed) {
            result.push(word)
        }
    }

    return result
}

console.log(isPalindroms(["mom", "car", "level", "dog", "racecar"]))
*/


function mostRepeatedNum(arr) {
    let maxCount = 0
    let mostRepeated = null
    for (let i = 0; i < arr.length; i++) {
        let count = 0

        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++
            }
        }
        if (count > maxCount) {
            maxCount = count
            mostRepeated = arr[i]
        }

    }
    return mostRepeated
}


console.log(mostRepeatedNum([1, 2, 3, 45, 2, 4, 5, 6, 2, 2]))

//ჯპტ გამოვიყენე ამაზე მინიშნებებით რეალურად მარტივია მარა გამჭედა რატომღაც

