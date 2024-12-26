const burger = document.getElementById('burger');
const container = document.querySelector('.container');
const narrowSidebar = document.querySelector('.narrow-sidebar');
const expandedSidebar = document.querySelector('.expanded-sidebar');

burger.addEventListener('click', () => {
    container.classList.toggle('expanded');
    narrowSidebar.classList.toggle('expanded');
    expandedSidebar.classList.toggle('expanded');
});
