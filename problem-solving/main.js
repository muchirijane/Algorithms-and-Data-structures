const addup = (a, b) => {
    return a + b;
}
const results = addup(2,6);
console.log(results);

// question 
//write a function that takes a string and converts it into separate individual characters
// output: can take any numbers or any text whether uppercase or lowercase
function countStr (str){
    let result = {};

    for(let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        const regex = /[\w+]/;
        if(regex.test(char)) {
            if(result[char] > 0){
                result[char]++;
            }else{
                result[char] = 1;
            }
        }
        
    }
    
    return result;
}

let string = countStr('Hello heeeeyyy gooooood');
console.log(string);


