//checkinf for student consern
let student = confirm("check your grades here");

if (student) {
    // user name
    let username = prompt("Enter your name please");
    if (username) {

        //enter the score



        let studentScore = parseInt(prompt("Enter your exam scores from (0-100): "));

        // the grader code
        let result = studentScore > 79 ? `username : ${username}\n student score: ${studentScore}\n Excellent: A` :
            studentScore >= 60 && studentScore <= 79 ? `username : ${username}\n student score: ${studentScore}\n congratulation : B` :
                studentScore >= 49 && studentScore <= 59 ? `username : ${username}\n student score: ${studentScore}\n fair : C` :
                    studentScore >= 40 && studentScore <= 49 ? `username : ${username}\n student score: ${studentScore}\n Work hard : D` :
                        `username : ${username}\n student score: ${studentScore}\n You failed : E`;
        alert(result);

    // alert boxes
    }
    else {
        alert("Guess you changed your mind :)");
    }

}
else {
    alert("Thanks for visiting!")
}
//just a simple code thank you