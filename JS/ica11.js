const btn =document.querySelector('#js-new-quote');
btn.addEventListener('click',getQuote);

const endpoint ='https://cat-fact.herokuapp.com/facts';

const answerBtn = document.querySelector('#js-tweet'); 
answerBtn.addEventListener('click',getAnswer);


const answerText=document.querySelector('#js-answer-text');

let answer = '';

async function getQuote(){
    try{
        const response= await fetch(endpoint);
        if (!response.ok){
            throw Error(response.statusText)
        }
        
        const json= await response.json();
        //console.log(json['question']);
        //displayQuote(json['question']);
        //console.log(json['answer']);
        //answer=json['answer'];
        console.log(json[0]["updatedAt"])
        displayQuote(json[0]['text']);
        console.log(json[2]['text']);

    }catch(err){
        console.log(err);
        alert('failed to fetch new quote');
    }
}

    function displayQuote(quote){
        const quoteText=document.querySelector('#js-quote-text');
        quoteText.textContent = quote;
    }
    function getAnswer(){
        answerText.textContent=answer;
    }
getQuote();