'use strict';


function check(ans) {
    if (ans === "yes" | ans ==="y") {
        // console.log ("Correct !!")
        alert ("Correct :)")

    } else if (ans == "no" | ans === "n") {
        // console.log ("Wrong")
        alert ("Wrong:(")
        

    } else {
        // console.log ("Do not put random inputs")
        alert ("Do not put random inputs")

    }
    
}

// x = 13 ; 
alert ("Read my Biography first, then answer y/n or yes/no, please, Thank you");
alert ("welcome ..You will be with Bayan Abu Hatab. I am 25 years old. I graduated from Al-Hussein Bin Talal University with a BA in Chemistry. I lived and studied in Aqaba and now live in Irbid. I worked as a teacher for mathematics and chemistry for a year, and I hope to get a master’s in applied chemistry I am currently learning programming and I hope to become a good software developer, and develop my skills to get a good job")
let Q1 = prompt ("1st question: Did I get a masters?  ? ").toLowerCase();
check (Q1)
let Q2 = prompt ("2nd question:Did I live in Irbid Now? ").toLowerCase();
check (Q2)
let Q3 = prompt ("3rd question: did i study in yarmok university? ").toLowerCase();
check (Q3)
let Q4 = prompt ("4th question: Iam I spcialized in chemistry ?").toLowerCase();
check (Q3)
let Q5 = prompt ("5th question: did i study in aqaba ?  ").toLowerCase();
check (Q5)
let Q6 = prompt ("6th question: is my old 25 years ?")


// 2nd Story 

let qNmae = prompt ("And you, What is your name? ");
alert ("Hi, " + qNmae + " It is nice to meet you ")
alert (qNmae + ", I wish you success , Thank you")
