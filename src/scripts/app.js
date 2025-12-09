// selects the main container
const $ratingContainer = document.querySelector('.rating')

// listens for clicks inside the container
$ratingContainer.addEventListener("click", (e) => {
    const el = e.target

    // checks if the clicked element is the submit button
    if(el.matches('.rating__submit')) {
        e.preventDefault()

        // selects the form
        const $form = document.querySelector('.rating__form')
        
        // selects the result section
        const $resultContainer = document.querySelector('.rating__result')
        
        // selects all radio inputs
        const $rating = document.querySelectorAll('.rating__scale-input')

        $rating.forEach(rate => {    
            // checks which radio is selected
            if(rate.checked) {
                // inserts the chosen value
                const resultValue = document.querySelector('.rating__result-value')
                resultValue.textContent = rate.value

                // hides the form
                $form.classList.add("rating__form--hide")
                $form.setAttribute("aria-hidden", "true")
                $form.hidden = true

                // shows the result section
                $resultContainer.classList.add("rating__result--show")
                $resultContainer.removeAttribute("aria-hidden")
                $resultContainer.hidden = false
                
                // after 5 seconds, restores the initial state
                setTimeout(() => {
                    // clears the selected radio
                    rate.checked = false

                    // shows the form again
                    $form.classList.remove("rating__form--hide")
                    $form.removeAttribute("aria-hidden")
                    $form.hidden = false
    
                    // hides the result section
                    $resultContainer.classList.remove("rating__result--show")
                    $resultContainer.setAttribute("aria-hidden", "true")
                    $resultContainer.hidden = true
                }, 5000)
            }
        })
    }
})