let btnElem = document.querySelector('.button')
let result = document.querySelector('#result')
let shir = document.querySelector('.firstButton')
let khat = document.querySelector('.secondtButton')
let span = document.querySelector('#result')
let userChoice = document.querySelector('.user_choice')
let message = document.querySelector('.result_throw_coin')
let resultClick;
let coinAndflip = ['شیر', 'خط']

/// فانکشن انتخاب گزینه کاربر 

function flipOrcoin(element) {

    resultClick = element.innerHTML
    userChoice.innerHTML = resultClick


}


function throwCoin() {
    let randomThrow = Math.floor(Math.random() * coinAndflip.length)


    
    if (resultClick == null || resultClick == undefined) {
        
        alert('شیر یا خط ؟ یکیشو امتحان کن')
        
    }
    else {
        result.innerHTML = 'سکه داره میچرخه کمی صبر کن'

        setTimeout(function () {
            if (coinAndflip[randomThrow] == resultClick) {
                message.innerHTML = 'بردی آفرین :))'
                message.classList.add('result_throw_coin')
                message.classList.remove('result_throw_coin_lost')
                result.innerHTML = 'نتیجه را اینجا مشاده کنید'
            }
            else {
                message.innerHTML = 'باختی که :(('
                message.classList.remove('result_throw_coin')
                message.classList.add('result_throw_coin_lost')
                result.innerHTML = 'نتیجه را اینجا مشاده کنید'

            }
        }, 2200)
    }




}




btnElem.addEventListener('click', throwCoin)
