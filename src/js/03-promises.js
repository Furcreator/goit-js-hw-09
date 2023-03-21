import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputForm = document.querySelector('.form');
inputForm.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  const stepInp = inputForm.step.value;
  const delayInp = inputForm.delay.value;
  const amountInp = inputForm.amount.value;
  e.preventDefault();
  let delayTime = Number(delayInp);
  console.log(delayTime);
  for (let i = 1; i <= amountInp; i++) {
    createPromise(i, delayTime).then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayTime += Number(stepInp)
    // console.log(delayTime);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });

      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
