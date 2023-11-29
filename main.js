// Button Event Listener

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
 
  // Define Variables
  let a1 = document.getElementById("answer1").value.toLowerCase();
  let a2 = document.getElementById("answer2").value.toLowerCase();
  let a3 = document.getElementById("answer3").value.toLowerCase();
  let a4 = document.getElementById("answer4").value.toLowerCase();
  let totalcorrect = 0;
  let totalquestions = 4;

  // Check Answers
  if (a1 === "false") {
    document.getElementById("result").innerHTML = "Correct";
    totalcorrect++;
  } else {
    document.getElementById("result").innerHTML = "False";
  }

  if (a2 === "22") {
    document.getElementById("result1").innerHTML = "Correct";
    totalcorrect++;
  } else {
    document.getElementById("result1").innerHTML = "False";
  }

  if (a3 === "yes") {
    document.getElementById("result2").innerHTML = "Correct";
    totalcorrect++;
  } else {
    document.getElementById("result2").innerHTML = "False";
  }

  if (a4 === "red card" || a4 === "red") {
    document.getElementById("result3").innerHTML = "Correct";
    totalcorrect++;
  } else {
    document.getElementById("result3").innerHTML = "False";
  }

  // Output Note on How Well You Did

  document.getElementById("output").innerHTML = totalcorrect;

  let percent1 = (totalcorrect / totalquestions) * 100;
  document.getElementById("output2").innerHTML = percent1;

  if (totalcorrect === 4) {
    document.getElementById("note").innerHTML = "Wonderful";
  }
  if (totalcorrect === 3) {
    document.getElementById("note").innerHTML = "Amazing";
  }
  if (totalcorrect === 2) {
    document.getElementById("note").innerHTML = "Good work";
  }
  if (totalcorrect <= 1) {
    document.getElementById("note").innerHTML = "Maybe next time...";
  }
}
