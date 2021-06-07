function checkInput() {
    let $form = document.querySelectorAll('.form-default');
    let $checkInput = document.querySelectorAll('.check-input');
    let $submit = "";

    $form.forEach(item => {
        let currentForm = item;
        $submit = item.querySelector('.submit')
        item.addEventListener('submit', (e)=>{
            e.preventDefault()
        })

        $submit.addEventListener('click', function() {
            currentForm.querySelectorAll('.check-input').forEach(function (item) {
                if(item.value === '' || item.value === undefined) {
                    item.classList.add('check-input--error')
                } else {
                    item.classList.remove('check-input--error')
                    setTimeout(() => {
                        $.magnificPopup.open({
                            items: {
                                src: '#successful',
                            },
                            type: 'inline',
                            removalDelay: 300,
                            mainClass: 'mfp-zoom-in',
                            fixedContentPos: false,
                        })
                    }, 500)
                }
            })
        })

    })

    $checkInput.forEach(item => {
        item.addEventListener('input',function (item) {
            if(this.value && this.value.length > 3) {
                this.classList.remove('check-input--error')
            } else if(this.value && this.value.length < 3) {
                this.classList.add('check-input--error')
            }
        })
    });
}
checkInput();