
// Variable

const shareBtn = document.getElementById('share-btn')
const shareIcon = document.querySelector('.share-icon')
const shareBar = document.querySelector('.share-bar')
const shareToolTip = document.querySelector('.share-tooltip')
const profileContainer = document.querySelector('.profile-container')
const cardFooter = document.querySelector('.card__footer')
const shareContainer = document.querySelector('.share-container')

/* ======================== */
/* IMPROVE CODE TO STATE    */
/* ========================= */

let isShareActive = false;

const isMobile = () => window.innerWidth < 768

const isShareToolTip = () => shareToolTip.classList.contains('active')

const isShareBar = () => shareBar.classList.contains('active')

const resetView = () => {
    cardFooter.classList.add('flex')
    profileContainer.classList.add('active')
    shareToolTip.classList.remove('active');
    shareBar.classList.remove('active')
    shareContainer.classList.remove('active')
}

const removeAllShare = () => {
    shareBar.classList.remove('active')
    shareToolTip.classList.remove('active')
}

const setShareBar = () => {
    shareBar.classList.add('active')
    shareToolTip.classList.remove('active')
    cardFooter.classList.remove('flex')
    profileContainer.classList.remove('active')
    shareContainer.classList.add('active')
}

const setShareToolTip = () => {
    shareToolTip.classList.add('active')
    shareBar.classList.remove('active')
    cardFooter.classList.add('flex')
    profileContainer.classList.add('active')
    shareContainer.classList.remove('active')
}

const updateShareBtnColor = () => {
    if (isShareActive) {
        if (isMobile()) {
            shareIcon.classList.add('active')
        }
        else {
            console.log('isnt mobile')
            shareIcon.classList.remove('active')
        }
    } else {
        shareIcon.classList.remove('active')
    }
}

const updateView = () => {
    updateShareBtnColor()
    if (isShareActive) {
        if (isMobile()) {
            setShareBar()
        }
        else {
            setShareToolTip()
        }
    } else {
        resetView()
    }
}

shareBtn.addEventListener('click', function () {
    isShareActive = !isShareActive
    updateView()
})


window.addEventListener('resize', function () {
    updateView()
})

/* ======================== */
/* OLD LOGIC CODE           */
/* ======================== */

// shareBtn.addEventListener('click', function (e) {
//     if (window.innerWidth < 768) {
//         shareBar.classList.toggle('active')
//         profileContainer.classList.toggle('active')
//         cardFooter.classList.toggle('flex')
//         shareContainer.classList.toggle('active')
//     } else {
//         shareToolTip.classList.toggle('active')
//     }
// })

// window.addEventListener('resize', function () {
//     let screenWidth = this.innerWidth

//     if (screenWidth < 768) {
//         if (shareToolTip.classList.contains('active'))
//             shareToolTip.classList.remove('active')
//     }

//     if (screenWidth > 768) {
//         if (shareBar.classList.contains('active')) {
//             cardFooter.classList.add('flex')
//             profileContainer.classList.add('active')
//             shareBar.classList.remove('active')
//             shareContainer.classList.remove('active')
//         }
//     }

// })