
function reverse(str){
    let reverse = "";
    for(let i = str.length-1 ; i>=0;i--){
        reverse += str[i];
       }
               return reverse ;

}
console.log(reverse("javascript"))


function reverseWords(str) {
    // Split the string by spaces, reverse each word, then join back
    return str
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");
}

console.log(reverseWords("java script")); 
// Output: avaj tpircs


function reverseWords(str) {
    let words = str.split(" "); // Split into words
    let result = "";

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let reversedWord = "";

        // Reverse each word character by character
        for (let j = word.length - 1; j >= 0; j--) {
            reversedWord += word[j];
        }

        // Add the reversed word to the result
        result += reversedWord;

        // Add space if it's not the last word
        if (i < words.length - 1) {
            result += " ";
        }
    }

    return result;
}

console.log(reverseWords("type script")); 

if(true){
    var x = 10;
    let y = 20;
    const z = 30;
}
console.log(x);
console.log(y);
console.log(z);

