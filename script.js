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
let awnserBtn = $.querySelector('.awnser-btn')
let finishBtn = $.querySelector('.finish-btn')

let remainingTime = 60; //seconds
const totalTime = remainingTime
////////////////////////

function showHomePage() {
    homePage.classList.remove("unvisible-page")
}
function hideHomePage() {
    homePage.classList.add("unvisible-page")
}


function aligudarz() {
    function timerProgress() {
        if (remainingTime > 0) {
            const progress = ((totalTime - remainingTime) / totalTime) * 100;
            timerBar.style.width = `${progress}%`;

            remainingTime--;
        } else {
            timerBar.style.width = "100%";
            clearInterval(countDown)
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

let game = aligudarz()

function showQuizPage() {
    quizPage.classList.remove("unvisible-page")
    loaderFun()
    game.start()
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



// function startTimerFun() {
//     if (remainingTime > 0) {
//         const progress = ((totalTime - remainingTime) / totalTime) * 100;
//         timerBar.style.width = `${progress}%`;

//         remainingTime--;
//         setTimeout(startTimerFun, 1000);
//     } else {
//         timerBar.style.width = "100%";
//     }
// }


playBtn.addEventListener('click', function () {
    hideHomePage()
    Loader.classList.remove("hidden");
    setTimeout(showQuizPage, 1000)
})
////////////////////////////////////////////quiz page section

backBtn.addEventListener('click', function () {
    hideQuizPage()
    showHomePage()
    game.stop()
})