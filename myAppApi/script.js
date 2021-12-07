const api = "https://quiz-app-safcsp.herokuapp.com/api/v1/questions";
const qush = document.getElementById("qush");
const ans = document.getElementById("ans");
const score = document.getElementById("score");

let questionN = 0;

//fetch API
const getData = async (e) => {
  const response = await fetch(api);
  const data = await response.json();

  // question render
  const question = data.map((params) => {
    return `<h1>${params.question}</h1>`;
  });

  // answers render
  const answers = data[questionN].answers.map((e) => {
    return `<input type="button" value="${e.text}" id="myButton1"  onclick="putt(${e.correct})"></input>`;
  });

  //innerHTM question & answers
  qush.innerHTML = question[questionN];
  ans.innerHTML = answers;
};
getData();

//Score
let scoreN = 0;
const qushScore = (e) => {
  score.innerHTML = "your score" + `<h3 id="yScore">${scoreN}</h3>`;
};
qushScore();

//color & score
const putt = (ansu) => {
  if (ansu == false) {
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
      document.body.style.backgroundColor = "white";
    }, 1000);
  } else {
    document.body.style.backgroundColor = "green";
    setTimeout(() => {
      document.body.style.backgroundColor = "white";
    }, 500);
    questionN += 1;
    scoreN += 1;

    qushScore();
    getData();
  }
};
