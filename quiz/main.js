function quiz(question, answer) {
    this.question = question;
    this.answer = answer;
}

var q1 = new quiz("What is the capital of Ghana", "Accra")
var q2 = new quiz("What is the capital of Nigeria", "Abuja")
var q3 = new quiz("What is the capital of USA", "Washington DC")
var q4 = new quiz("What is the capital of Turkey", "Istanbul")
var q5 = new quiz("What is the capital of Iran", "Tehran")
var quizInfo = [];
quizInfo.push(q1)
quizInfo.push(q2)
quizInfo.push(q3)
quizInfo.push(q4)
quizInfo.push(q5)


console.log(quizInfo)
for (var i = 0; i < quizInfo.length; i++) {
    console.log(quizInfo)

    var qboxNode = document.createElement("div");
    qboxNode.setAttribute("id", "qbox" + i)
    qboxNode.setAttribute("class", "qn")
    var textnode =
    document.getElementById("quiz").appendChild(qboxNode);

    var qNode = document.createElement("div");
    qNode.setAttribute("id", "q" + i)
    var textnode = document.createTextNode(quizInfo[i].question);
    qNode.appendChild(textnode);
    document.getElementById("qbox" +i).appendChild(qNode);

    document.getElementById("qbox" +i).innerHTML += "<br>"

    var aNode = document.createElement("input");
    aNode.setAttribute("id", "a" + i)
    document.getElementById("qbox" +i).appendChild(aNode);

    var rNode = document.createElement("div");
    rNode.setAttribute("id", "r" + i)
    document.getElementById("qbox" +i).appendChild(rNode);
}
  var scoreNode = document.createElement("div");
    scoreNode.setAttribute("id", "Score")
document.getElementById("quiz").appendChild(scoreNode)

eventListener = document.getElementById("submit").addEventListener('click', submit)

function submit() {
var counter = 0
    for (var i = 0; i < quizInfo.length; i++) {
        console.log(document.getElementById("a0"), quizInfo[0].answer)
        if (document.getElementById("a" + i).value == quizInfo[i].answer) {

            counter +=1
            console.log(document.getElementById("r" + i).innerHTML)
            document.getElementById("r" + i).innerHTML = quizInfo[i].answer + " is the correct answer"
        } else {
            document.getElementById("r" + i).innerHTML = "You got it wrong"
        }
    }

   var score = (counter/quizInfo.length)*100 + "%"
   document.getElementById("Score").innerHTML = score
}


