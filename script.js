let friendRequestIcon = document.querySelector('#friend-request-icon')
let friendRequest = document.querySelector('.friend-request-wrap')

let notificatioIcon = document.querySelector('#notification-icon')
let notificationBar = document.querySelector('.notification-wrap')

let profile = document.querySelector('.user-profile')
let subMenu = document.querySelector('.sub-menu-wrap')

let nextButton = document.querySelector('#next')
let backButton = document.querySelector('#back')
let scrollContainer = document.querySelector('.scroll-for-online')


// Friends Request Drop Down
friendRequestIcon.addEventListener('click',(event)=>{
    friendRequest.classList.toggle('open-request');
    notificationBar.classList.remove('open-bar');
    subMenu.classList.remove('open-menu');
    event.stopPropagation()
})
friendRequest.addEventListener('click', (event) => {
    event.stopPropagation();
});
document.addEventListener('click', () => {
    friendRequest.classList.remove('open-request');
});

// Notification Drop Down
notificatioIcon.addEventListener('click',(event)=>{
    notificationBar.classList.toggle('open-bar')
    friendRequest.classList.remove('open-request');
    subMenu.classList.remove('open-menu');
    event.stopPropagation()
})
notificationBar.addEventListener('click', (event) => {
    event.stopPropagation();
});
document.addEventListener('click', () => {
    notificationBar.classList.remove('open-bar');
});

// Profile Drop Down
profile.addEventListener('click', (event)=>{
    subMenu.classList.toggle('open-menu');
    notificationBar.classList.remove('open-bar');
    friendRequest.classList.remove('open-request');
    event.stopPropagation();
})
subMenu.addEventListener('click', (event) => {
    event.stopPropagation();
});
document.addEventListener('click', () => {
    subMenu.classList.remove('open-menu');
});


// Next Button
nextButton.addEventListener('click', ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 100;
    backButton.style.display = 'block'
})

// Back Button
backButton.addEventListener('click', ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 100;
    backButton.style.display = scrollContainer.scrollLeft > 0 ? 'block' : 'none';
})




// let profile = document.querySelector('.user-profile');
// let subMenu = document.querySelector('.sub-menu-wrap');
// let notificatioIcon = document.querySelector('#notification-icon');
// let notificationBar = document.querySelector('.notification-wrap');

// profile.addEventListener('click', (event) => {
//     subMenu.classList.toggle('open-menu');
//     if (notificationBar.classList.contains('open-bar')) {
//         setTimeout(() => {
//             notificationBar.classList.remove('open-bar');
//         }, 200); // Adjust the delay time (in milliseconds) as needed
//     }
//     event.stopPropagation();
// });

// notificatioIcon.addEventListener('click', (event) => {
//     notificationBar.classList.toggle('open-bar');
//     if (subMenu.classList.contains('open-menu')) {
//         setTimeout(() => {
//             subMenu.classList.remove('open-menu');
//         }, 200); // Adjust the delay time (in milliseconds) as needed
//     }
//     event.stopPropagation();
// });

// document.addEventListener('click', () => {
//     subMenu.classList.remove('open-menu');
//     notificationBar.classList.remove('open-bar');
// });



let users = document.querySelectorAll('.users');
let leftpart = document.getElementById('left-part');
let rightpart = document.getElementById('right-part');

console.log(users);
for  (let user of users){
    user.addEventListener('click',()=>{
        if (document.body.clientWidth <= 567 ) {
        leftpart.style.display = 'none';
        rightpart.style.display = 'block';
        rightpart.style.width = '100%';
        }
    })
}