export const toggle = state => {
    const body = document.body;
    const navbar = document.getElementById('navbar');
    const container = document.getElementById('navbar-container');
    const opened = document.getElementById('opened');
    const closed = document.getElementById('closed');
    const hamburger = document.getElementById('hamburger');
    const label = document.getElementById('hamburger-label');
    const arrow = document.getElementById('arrow-close');


    if (!state) {
        body.style.overflow = 'hidden';
        navbar.style.height = '100vh';
        navbar.style.width = '100%';
        container.style.display = 'flex';
        opened.style.display = 'none';
        closed.style.display = 'flex';
        hamburger.style.display = 'none';
        label.style.display = 'none';
        arrow.style.display = 'flex';
    }
    else {
        body.style.overflow = 'revert';
        navbar.style.height = 'revert';
        navbar.style.width = 'revert';
        container.style.display = 'none';
        opened.style.display = 'flex';
        closed.style.display = 'none';
        hamburger.style.display = 'flex';
        label.style.display = 'flex';
        arrow.style.display = 'none';
    }
}


export const handleResize = (isOpened) => {
    const navbar = document.getElementById('navbar');
    const container = document.getElementById('navbar-container');
    const opened = document.getElementById('opened');
    const closed = document.getElementById('closed');
    const hamburger = document.getElementById('hamburger');
    const label = document.getElementById('hamburger-label');

    if (window.innerWidth > 768) {
        if (!isOpened) {
            opened.style.display = 'none';
            container.style.display = 'flex';
        }
        else {
            navbar.style.width = 'revert';
            navbar.style.height = 'revert';
            closed.style.display = 'none';

            return true;
        }
    }
    else {
        if (!isOpened) {
            opened.style.display = 'flex';
            hamburger.style.display = 'flex';
            label.style.display = 'flex';
            container.style.display = 'none';
        }
    }

    return false;
}
