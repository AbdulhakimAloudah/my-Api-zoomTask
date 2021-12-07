const api = "https://quiz-app-safcsp.herokuapp.com/api/v1/questions";
const qush = document.getElementById("qush");
const ans = document.getElementById("ans");

let questionN = 0;

const getData = async (e) => {
  const response = await fetch(api);
  const data = await response.json();

  const question = data.map((params) => {
    return `<h1>${params.question}</h1>`;
  });

  const answers = data[questionN].answers.map((e) => {
    return `<input type="button" value="${e.text}" id="myButton1"  onclick="putt(${e.correct})"></input>`;
  });

  qush.innerHTML = question[questionN];
  ans.innerHTML = answers;
};
getData();

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
    getData();
    console.log(questionN);
  }
};
