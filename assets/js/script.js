const toggleMenu = document.querySelector('.nav__toggler')
const menuLinks = [...document.getElementsByClassName('nav__list-item')]

const removeActiveClass = () => menuLinks.forEach((el) => el.classList.remove('active'))

// Handle show and hide collapse menu
toggleMenu.addEventListener('click', () => {
    document.getElementById('collapseMenu').classList.toggle('show')
    toggleMenu.classList.toggle('close')
})

// Handle remove and add active class in navigation links item
menuLinks.forEach((link, key) => {
    link.addEventListener('click', () => {
        removeActiveClass()
        menuLinks[key].classList.add('active')
    })
})