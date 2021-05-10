
function count2(count_string) {

    let characters = 0;
    let words = 0;
    let vowels = ["a", "e", "i", "u", "o", "A", "E", "I", "U", "O"];
    let vowelsCounter = 0;

    for (let char_index in count_string) {
        characters = characters + 1;
        if (vowels.includes(count_string[char_index])){
        vowelsCounter= vowelsCounter + 1
        }
        if (count_string[char_index] != " " && count_string[ char_index - 1]=== " "){
        words = words + 1
        } 
    }
    console.log("Characters: " + characters)
    console.log("Vowels: " + vowelsCounter)
    console.log("Words: " + words)
}




