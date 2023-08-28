//variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
  quote: 'Bella! Where the hell have you been ,louca?', person: 'Jacob'
}, {
  quote: 'dont let your happiness depend on something you may lose', person: 'C. S. Lewis'
}, {
  quote: 'you miss all the shots you dont take', person: 'wayne gretzy \n MICHAEL SCOTT'
}, {
  quote: 'what goes to long unchanged destoys it self', person: 'Ursula K. Le Guin'
}, {
  quote: 'jesse, we need to cook', person: 'Walter White'
}, {
  quote: 'and if the devil loves details, then godliness floats in the vague', person: 'Rob Taylor'
}, {
  quote: 'live or die, but dont poison everything', person: 'Saul Bellow'
}, {
  quote: 'every saint has a past ,and every sinner has a future', person: 'Oscar Wilde'
}, {
  quote: 'but im a creep, im a weirdo', person: 'Radiohead'
}, {
  quote: 'no bitches?', person: 'Megamind'
}, {
  quote: 'cant stop the A train, baby', person: 'A train'
}, {
  quote: 'let us forget with generosity those who cannot love us', person: 'Pablo Neruda'
}, {
  quote: 'i need a room full of mirrors so i can be surrounded by winners', person: 'Kanye West'
}, {
  quote: 'i indecisive therefore i maybe', person: 'max'
}, {
  quote: 'L to the OG', person: 'Kendall Roy'
},

];

btn.addEventListener('click', function () {

  let random = Math.floor(Math.random() * quotes.length);
console.log(random);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;

})

