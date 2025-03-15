function highlight() {
    //Write your code here
 const boldWords = document.querySelectorAll('strong');

    // Loop through each <strong> element and change the color to green
    boldWords.forEach(function(boldWord) {
        boldWord.style.color = 'rgb(0, 128, 0)';
    });

}


function return_normal() {
    //Write your code here

     const boldWords = document.querySelectorAll('strong');

    // Loop through each <strong> element and change the color to black
    boldWords.forEach(function(boldWord) {
        boldWord.style.color = 'rgb(0, 0, 0)';
    });
}
