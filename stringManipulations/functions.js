$(document).ready(function() {
    console.log(stringReverse('reverse this string'));
});


function isPalindrome(string) {
    // determine if a string is a palindrome

    string = string.replace(/\W/g, '').toLowerCase();
    return (string == string.split('').reverse().join(''));
}


function firstUnique(string) {
    //find the first occurring unique letter in a string of characters

    var searchChar;

    for (var i = 0; i < string.length; i++) {
        searchChar = string.charAt(i);

        // look for any incidents of the searchChar in the string *after* the first occurrence
        // indexOf returns -1 if it didn't find another occurrence
        if (string.indexOf(searchChar) == i && string.indexOf(searchChar, i+1) == -1) {
            return searchChar;
        }
    }
    return null;
}


function stringReverse(string) {
    //reverse the words in a string
    // but do not reverse the string itself
    // 'reverse this string' == 'esrever siht gnirts'

    var temp = [];
    var finalString = [];

    var arrayString = string.split(' ');
    for (var i = 0; i < arrayString.length; i++) {
        temp = arrayString[i].split('').reverse().join('');
        finalString.push(temp);
    }
    return (finalString.join(' '));
}


function duplicates(string) {
    //find the duplicate letters in a string

    var charCount = {};
    var arrayString = string.split('');

    arrayString.forEach(function(element){
        element = element.toLowerCase();

        if (element != ' ') {
            if (element in charCount) {
                charCount[element]++;
            } else {
                charCount[element] = 1;
            }
        }
    });

    for (var key in charCount) {
        if (charCount[key] == 1) {
            delete charCount[key];
        }
    }

    return charCount;
}


function testReduceAvg() {
    // using reduce function, calculate the average of an array

    var array = [123, 1235, 231, 5473, 1200];

    var average = array.reduce((total, amount, index, array) => {
        total += amount;
        if (index === array.length-1)
            return total/array.length;  // this happens when the reduce loop hits the end (index == array.length-1) so we need to calculate average
        else
            return total;   // need to return total in this reduce loop to keep adding
    });
    return average;
}

function testReduceAvg2() {
    // using reduce function, calculate the average of an array in a different method
    // this uses the optional value of an empty array passed as the initial value

    var array = [123, 1235, 231, 5473, 1200];

    var average = array.reduce((total, amount) => {
        total.push(amount * 2);
        return total;
    }, []);
    return average;
}