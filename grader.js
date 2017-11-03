console.log(grader(50));
function grader(score){
    if(score >= 0 && score <= 100){
        if(score >= 91 && score <= 100){
            console.log("Grade A")
        }
        else if(score >= 81 && score <= 90){
            console.log("Grade B")
        }
        else if(score >= 71 && score <= 80){
            console.log("Grade C")
        }
        else if(score >= 61 && score <= 70){
            console.log("Grade D")
        }
        else if(score >= 51 && score <= 60){
            console.log("Grade E")
        }
        else{
            console.log("Grade F")
        }
    }else{
        console.log("bad input");
    }
}
