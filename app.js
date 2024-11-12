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
    userChoice.style.opacity = 1
    userChoice.style.visibility = 'visible'

}


function throwCoin() {
    let randomThrow = Math.floor(Math.random() * coinAndflip.length)
    message.innerHTML = ''


    if (resultClick == null || resultClick == undefined) {
        alert('شیر یا خط ؟ یکیشو امتحان کن')
    }




    else {
        result.innerHTML = 'سکه داره میچرخه کمی صبر کن'

        setTimeout(function () {

            if (resultClick == 'شیر') {
                if (coinAndflip[randomThrow] == resultClick) {
                    message.innerHTML = 'آفرین بردی. شیر اومد :)'
                    message.classList.add('result_throw_coin')
                    message.classList.remove('result_throw_coin_lost')
                    result.innerHTML = 'نتیجه را اینجا مشاده کنید'
                }
                else {
                    message.innerHTML = 'خط اومد. باختی :('
                    message.classList.remove('result_throw_coin')
                    message.classList.add('result_throw_coin_lost')
                    result.innerHTML = 'نتیجه را اینجا مشاده کنید'
                }
            }


            if (resultClick == 'خط') {
                if (coinAndflip[randomThrow] == resultClick) {
                    message.innerHTML = 'آفرین بردی. خط اومد :)'
                    message.classList.add('result_throw_coin')
                    message.classList.remove('result_throw_coin_lost')
                    result.innerHTML = 'نتیجه را اینجا مشاده کنید'
                }
                else {
                    message.innerHTML = 'شیر اومد. باختی :('
                    message.classList.remove('result_throw_coin')
                    message.classList.add('result_throw_coin_lost')
                    result.innerHTML = 'نتیجه را اینجا مشاده کنید'
                }
            }

        }, 2200)
    }




}




btnElem.addEventListener('click', throwCoin)
