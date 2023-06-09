function toggler(togglerSelector = String, targetSelector = String, className = 'active', active = true) {

    const togglerElement = document.querySelector(togglerSelector),
        targetElement = document.querySelector(targetSelector);

        if (active == true) {
            togglerElement.classList.toggle(className);
            if (targetElement) {
                targetElement.classList.toggle(className);
            }
        }

    togglerElement.addEventListener('click', () => {
        togglerElement.classList.toggle(className);
        if (targetElement) {
            targetElement.classList.toggle(className);
        }
    });

}

function logo_field(inputSelector = String, viewSelector = String,) {

    const inputElement = document.querySelector(inputSelector),
        viewElement = document.querySelector(viewSelector);

    inputElement.addEventListener('change', () => {
        
        const [file] = inputElement.files;
        if (file) {
                const img = document.createElement('img');
                img.src = URL.createObjectURL(file);

                viewElement.innerHTML = '';
                viewElement.insertAdjacentElement('afterbegin', img);
            }    
    });

}

function menu(tabsSelector, canvasesSelector) {

    const tabs = document.querySelectorAll(tabsSelector),
        canvases = document.querySelectorAll(canvasesSelector),
        menu = document.querySelector('#page-menu');


    function clean() {
        tabs.forEach((tab, index) => {
            tab.classList.remove('active');
            if (canvases[index]) {
                canvases[index].classList.remove('active');
            }
        });
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {

            clean();

            tab.classList.add('active');
            if (canvases[index]) {
                canvases[index].classList.add('active');
                const rect = document.documentElement.getClientRects()
                console.log()
                if (rect[0].width <= 800 || rect.width <= 800 ) {
                    menu.classList.remove('active');
                }
                
            }
        });
    });

}

function valetSwitcher(selector) {

    const buttons = document.querySelectorAll(selector);

    const [up, down] = ['up', 'down'];

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains(up)) {
                button.classList.remove(up);
                button.classList.add(down);
            }
            else if (button.classList.contains(down)) {
                button.classList.remove(down);
            }
            else if (!button.classList.contains(up) && !button.classList.contains(down)) {
                button.classList.add(up);
            }
        });
    });

}

function buttonAnimate(selector, className) {

    const buttons = document.querySelectorAll(selector);

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.add(className);
            btn.addEventListener('animationend', () => {
                btn.classList.remove(className);
            });
        });
    });

}

function preview() {

    const item = document.querySelector('#preview');
    const wrapper = document.querySelector('#page-wrapper');

    setTimeout(() => {
        item.classList.remove('active');
        wrapper.classList.add('active');
    }, 1500);

}

document.addEventListener('DOMContentLoaded', () => {

    // @ burger toggler
    toggler('#menu-toggler', '#page-menu', 'active', false);

    // @ valet drop down 
    toggler('#valet-drop-trigger', '#valet-drop-menu', 'active', false);

    // @ check drop down 
    toggler('#check-drop-trigger', '#check-drop-menu', 'active', false);
    toggler('#internal-check-drop-trigger', '#internal-check-drop-menu', 'active', false);
    toggler('#card-check-drop-trigger', '#card-check-drop-menu', 'active', false);

    // @ vallet sort
    valetSwitcher('.check__card-sort-button');

    // @ logo field
    logo_field('#logo-select', '#logo-select-view');

    // @ section toggler
    menu('.menu-button', '.canvas');

    buttonAnimate('.btn-primary', 'click');
    buttonAnimate('.btn-secondary', 'click');
    
    preview();
});