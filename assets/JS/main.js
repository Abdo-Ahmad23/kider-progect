
AOS.init();
    // Spinner
    let spinner = ()=> {
        setTimeout(function () {
            if (document.querySelector('#spinner').classList.length > 0) {
                document.querySelector('#spinner').classList.remove('show');
            }
        }, 50);
    };
    spinner();


