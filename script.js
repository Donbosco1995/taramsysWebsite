const massmark = 78;
const heightmark = 1.65;
const massjohn = 92;
const heightjohn = 1.95;
const BMImark = massmark / (heightmark * heightmark);
const BMIjohn = massjohn / (heightjohn * heightjohn);
console.log(BMImark,BMIjohn);

if (BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than John's!")
}
else {
    console.log("John's BMI is higher than Mark's!")
}

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas)  {
    console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas){
    console.log("Both win the trophy");
}