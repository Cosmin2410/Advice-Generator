let title = document.querySelector('.advice-number');
let adviceText = document.querySelector('.advice');
let button = document.querySelector('.change-advice');

const APILink = 'https://api.adviceslip.com/advice';

const getAPI = async () => {
  const advice = await fetch(APILink);
  const data = await advice.json();
  return data;
};

const renderAdvice = (adviceObject) => {
  const { id, advice } = adviceObject;
  title.innerHTML = `ADVICE #${id}`;
  adviceText.innerHTML = `"${advice}"`;
};

const randomAdvice = async () => {
  const data = await getAPI();
  const advice = data.slip;

  renderAdvice(advice);
};

button.addEventListener('click', randomAdvice);
