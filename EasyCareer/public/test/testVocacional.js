function startTest() {
  const form = document.getElementById('testForm');
  const submitBtn = document.getElementById('submitBtn');
  const popUp1 = document.getElementById('popup1');
  const popUp2 = document.getElementById('popup2');
  const popUp3 = document.getElementById('popup3');
  const popUp4 = document.getElementById('popup4');
  const body = document.body;
  const popup = document.querySelector('.popup');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const selectedOptions = document.querySelectorAll('input[type="radio"]:checked');
    if (selectedOptions.length !== 6) {
      alert('Por favor, selecciona una opción para cada pregunta.');
      return;
    }

    let totalScore = 0;
    selectedOptions.forEach(function(option) {
      totalScore += parseInt(option.value);
    });

    if (totalScore >= 1 && totalScore <= 6) {
      showPopUp(popUp1);
    } else if (totalScore >= 7 && totalScore <= 12) {
      showPopUp(popUp2);
    } else if (totalScore >= 13 && totalScore <= 18) {
      showPopUp(popUp3);
    } else if (totalScore >= 19 && totalScore <= 24) {
      showPopUp(popUp4);
    }
  });

  function showPopUp(popUp) {
    body.classList.add('popup-active');
    popUp.style.display = 'block';

    popUp.style.display = 'flex';
    submitBtn.disabled = true;
    document.body.style.overflow = 'hidden';
    
  }

  popup.querySelector('button').addEventListener('click', function() {
    showPopUp();
  });

  popUp1.querySelector('button').addEventListener('click', function() {
    window.location.href = '../test.html';
  });
  popUp2.querySelector('button').addEventListener('click', function() {
    window.location.href = '../test.html';
  });
  popUp3.querySelector('button').addEventListener('click', function() {
    window.location.href = '../test.html';
  });
  popUp4.querySelector('button').addEventListener('click', function() {
    window.location.href = '../test.html';
  });
}
