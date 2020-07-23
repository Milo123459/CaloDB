import Parser from "../lib/functions/Parse";
console.log(Parser({
    hi: 'how are u'
}));
console.log(Parser(`{"hi": "how are you"}`));