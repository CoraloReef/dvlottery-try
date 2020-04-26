const countryList = [
  { country: 'russia', applications: 450000, successful: 4500 },
  { country: 'ukraine', applications: 1450000, successful: 4500 },
  { country: 'uzbekistan', applications: 2150000, successful: 4500 },
  { country: 'belarus', applications: 180000, successful: 1500 },
];

const dvlotteryCountAttempts = (country, persons) => {
  const { applications, successful } = countryList.find((elem) => elem.country === country);

  let attempts = 0;
  let unSuccess = true;

  while (unSuccess) {
    attempts += 1;
    const count = Math.floor(Math.random() * (applications / persons)) + 1;

    if (count <= successful) {
      unSuccess = false;
    }
  }

  return attempts;
};

export default () => {
  const formElement = document.querySelector('#dvlottery-form');
  const resultElement = document.querySelector('#dvlottery-result');

  formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    const country = formElement.country.value;
    const persons = Number(formElement.persons.value);

    const attempts = dvlotteryCountAttempts(country, persons);
    resultElement.innerHTML = `Number of attepmts: ${attempts}`;
  });
};
