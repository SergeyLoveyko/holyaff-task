const questions = document.querySelectorAll('.survey_button'),
      btnModalTree = document.getElementById('p_modal_button3');


function questionsUser() {
  let item = 1;

  questions.forEach(elem => {
    elem.addEventListener('click', function() {
      localStorage.setItem(`answer: ${item}`, elem.textContent.replace(/\s/g, ""));
      item++;
    });
  });
}

questionsUser();


btnModalTree.addEventListener('click', function() {
  console.log( localStorage );
  localStorage.clear();
});