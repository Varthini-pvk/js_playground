// Write a function that returns:
// "A" if score >= 90, "B" if 80–89, "C" if 70–79, else "F"
grade(85); // Expected: "B"

function grade(score) {
    if(score >=90)
    {
        return "A"
    }
    else if (score>=80 && score <= 89)

    {
        return "B"
    }
    else if (score>=70 && score <= 79)
    {
        return "C"
    }
    else
    {
        return "F"
    }
}

console.log("Result:"+ grade(80))
