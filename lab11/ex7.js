let array = [110, 11, 101];

document.write("Contents of array: " + array + "<br>");


function compareNumbers(a, b) {
    return a - b;
}

document.write("Contents of sorted array: " + array.sort(compareNumbers) + "<br>");
