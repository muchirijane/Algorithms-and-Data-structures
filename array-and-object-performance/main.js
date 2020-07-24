let codeJob = {
    firstName: "Jane",
    isprogrammer: true,
    favoriteLanguages: ["Javascript", "Pthyon"]
}

const result = codeJob.favoriteLanguages;
console.log(result);

const methodResult = Object.values(codeJob);
console.log(methodResult);