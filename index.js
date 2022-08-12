let mobileMenu = document.querySelector('.header-left')
let mobileMenuButton = document.querySelector('.mobile-menu-button')

function showMenu(){
    let check = mobileMenu.classList.contains('mobile-menu')

    if(check === true){
        mobileMenu.classList.remove('mobile-menu')
        
    } else {
        mobileMenu.classList.add('mobile-menu')
    }
}

mobileMenuButton.addEventListener('click', showMenu)