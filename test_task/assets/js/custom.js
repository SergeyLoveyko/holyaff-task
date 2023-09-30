const questions = document.querySelectorAll('.survey_button'),
      btnModalTree = document.getElementById('p_modal_button3'),
      formComment = document.querySelector('.form-control'),
      btnComment = document.querySelector('.survey_button_comment');



//  output of user responses
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


//  create new comment
class NewComment {
  constructor(src, name, comment, parentSelector) {
    this.src = src;
    this.name = name;
    this.comment = comment;
    this.parent = document.querySelector(parentSelector);
  }

  render() {
    let element = document.createElement('div');
    element.classList.add('comments');
    element.style = "display:block";
    element.innerHTML = `
      <div class="profile">
        <img src=${this.src}></div>
      <div class="comment-content">
        <p class="name">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">${this.name}</font>
          </font>
        </p>
        <p>
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">${this.comment}</font>
          </font>
        </p>
      </div>
      <div class="clr"></div>
      <div class="comment-status">
        <span>
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">Curte·comente</font>
          </font>
          <img src="./assets/image/3.jpg" width="15px" height="15px">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">0</font>
          </font>
        </span>
        <font style="vertical-align: inherit;">
          <small>
            <font style="vertical-align: inherit;">·</font>
          </small>


          <small>
            <u>
              <font style="vertical-align: inherit;">0 minutos antes</font>
            </u>
          </small>
        </font>
        <small>
          <font style="vertical-align: inherit;"></font>
          <u>
            <font style="vertical-align: inherit;"></font>
          </u>
        </small>
      </div>
    `;
    this.parent.prepend(element);
  }
}

btnComment.addEventListener('click', () => {
  if (formComment.value !== '') {
    new NewComment(
      "../../assets/image/inkognito.png",
      "анонимный гость",
      formComment.value,
      ".comments_content"
      ).render();
    
    formComment.value = '';
  }
});