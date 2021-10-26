function openMenu() {
    const mobileMenu = document.querySelector('#mobile-menu');
    mobileMenu.classList.add('active');
}

function closeMenu() {
    const mobileMenu = document.querySelector('#mobile-menu');
    mobileMenu.classList.remove('active');
}



function isLogedIn() {
    return sessionStorage.getItem('isLogedIn')
}

const userID = sessionStorage.getItem('userID')
const userName = sessionStorage.getItem('name')
const userEmail = sessionStorage.getItem('email')

function logIn(email, password) {
    userIndex = USERS.findIndex(x => x.email === email);
    console.log(userIndex)
    if (!userIndex) {return alert('Username or password is not correct')}
    if (USERS[userIndex].password === password) {
        sessionStorage.setItem('userID', USERS[userIndex].id)
        sessionStorage.setItem('name', USERS[userIndex].name)
        sessionStorage.setItem('email', USERS[userIndex].email)
        sessionStorage.setItem('isLogedIn', true)
    } else {
        return alert('Username or password is not correct');
    }
}

function logOut() {
        sessionStorage.removeItem('userID')
        sessionStorage.removeItem('name')
        sessionStorage.removeItem('email')
        sessionStorage.removeItem('isLogedIn')
        console.log('Loged out!')
}

function addToBasket(e) {
    console.log(e)
    // let currentItem = e.target.id;
    // let currentBasket = sessionStorage.getItem('basket')
    // let newBasket = currentBasket.push(currentItem)
}