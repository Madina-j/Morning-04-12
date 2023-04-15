const getAndReturnPeople = async () => {
  let response = await fetch("https://swapi.dev/api/people");
  let parsedResponse = await response.json();
  let peopleArray = parsedResponse.results;

  return peopleArray;
};

const doProblem = async () => {
  let peopleArray = await getAndReturnPeople();
  // "Easy" - Loop through this array of objects and and log the name of each person

  for (let i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].name);
  }
  // Medium - Loop through this array and make a new array that only contains people that are shorter than 165cm
  const newArrayLess165 = [];
  for (let i = 0; i < peopleArray.length; i++) {
    parseInt(peopleArray[i].height) < 165
      ? newArrayLess165.push(peopleArray[i].name)
      : null;
  }
  console.log(newArrayLess165);
  // Hard - loop thorugh and find the tallest and shortest males and females.

  // do your work here inside this function
};
doProblem();
