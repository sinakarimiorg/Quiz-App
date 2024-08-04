const $ = document
////////// Home page
let Loader = $.querySelector('.Loader')
let homePage = $.querySelector('.home-page')
let settingBtn = $.querySelector('.setting-btn')
let settingBox = $.querySelector('.setting-list')
let menuBtn = $.querySelector('.menu-btn')
let menuBox = $.querySelector('.menu-list')
let playBtn = $.querySelector('.play-btn')
/////////////Quiz page
let quizPage = $.querySelector('.quiz-page')
let backBtn = $.querySelector('.back-btn')
let timerBar = $.querySelector('#timer-bar')
let questionsContainer = $.querySelector('.questions-container')
let swiper = $.querySelector('.mySwiper')
let awnserBtns = Array.from($.getElementsByClassName('awnser-btn'))
let finishBtn = $.querySelector('.finish-btn')
let scoreModal = $.querySelector('#result-modal')
let scoreNumber = $.querySelector('#final-score')
let scoreCloseBtn = $.querySelector('.close-btn')
let tryAgainBtn = $.querySelector('.try-again-btn')


let remainingTime = 60; //seconds
const totalTime = remainingTime

function countDown() {
    function timerProgress() {
        if (remainingTime > 0) {
            const progress = ((totalTime - remainingTime) / totalTime) * 100;
            timerBar.style.width = `${progress}%`;

            remainingTime--;
        } else {
            timerBar.style.width = "100%";
            clearInterval(countDown)
            scoreModal.className = 'show'
        }
    }
    let countDown;
    return {
        start() {
            countDown = setInterval(timerProgress, 1000)
        },
        stop() {
            clearInterval(countDown)
        }
    }
}
let timer = countDown()


function showHomePage() {
    homePage.classList.remove("unvisible-page")
}
function hideHomePage() {
    homePage.classList.add("unvisible-page")
}


function showQuizPage() {
    quizPage.classList.remove("unvisible-page")
    loaderFun()
    timer.start()
}
function hideQuizPage() {
    quizPage.classList.add("unvisible-page")
}


function loaderFun() {
    Loader.classList.add("hidden");
}
window.onload = loaderFun()


settingBtn.addEventListener('click', function () {
    settingBox.classList.toggle("visible")
})

menuBtn.addEventListener('click', function () {
    menuBox.classList.toggle("visible")
})


playBtn.addEventListener('click', function () {
    hideHomePage()
    Loader.classList.remove("hidden");
    setTimeout(showQuizPage, 1000)
})

backBtn.addEventListener('click', function () {
    hideQuizPage()
    showHomePage()
    timer.stop()
})

finishBtn.addEventListener('click', function () {
    scoreModal.className = 'show'
})

let score = 0
awnserBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        let otherButtons = btn.parentElement.children
        for (let i = 0; i < otherButtons.length; i++) {
            otherButtons[i].disabled = true
        }

        if (btn.value === "true") {
            btn.classList.add('right')
            score++
        } else { btn.classList.add('wrong') }
        scoreNumber.innerHTML = score
        console.log(score, scoreNumber);
    })
})

scoreCloseBtn.addEventListener('click', function () {
    location.reload()
})
tryAgainBtn.addEventListener('click', function () {
    location.reload()
})


if (window.matchMedia("(min-width: 1800px)").matches) {
    swiper.setAttribute("space-between", "300")
}