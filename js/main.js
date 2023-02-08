document.getElementById("button").addEventListener("click", function () {
  let imageOne = document.querySelector(".image-one");
  let imageTwo = document.querySelector(".image-two");

  var randomOne = Math.floor(Math.random() * 3);
  var randomTwo = Math.floor(Math.random() * 3);

  console.log(randomOne);
  console.log(randomTwo);

  if (randomOne === 0) {
    imageOne.style.backgroundImage = 'url(./assets/scissor.png)';
  } else if (randomOne === 1) {
    imageOne.style.backgroundImage = 'url(./assets/paper.png)';
  } else {
    imageOne.style.backgroundImage = 'url(./assets/rock.png)';
  }
  if (randomTwo === 0) {
    imageTwo.style.backgroundImage = 'url(./assets/scissor.png)';
  } else if (randomTwo === 1) {
    imageTwo.style.backgroundImage = 'url(./assets/paper.png)';
  } else {
    imageTwo.style.backgroundImage = 'url(./assets/rock.png)';
  }

});