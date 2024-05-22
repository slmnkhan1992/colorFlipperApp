function abc () {
    const randomNumber = Math.floor(Math.random()*16777225)
    const randonCode = "#" + randomNumber.toString(16) 
    document.body.style.backgroundColor = randonCode 
    document.getElementById('code').innerText = randonCode


    // if (document.body.style.backgroundColor === 'black') {
    //     document.body.style.backgroundColor = 'white'
    //     document.body.style.color = 'black'
    // } else {
    //     document.body.style.backgroundColor = 'black'
    //     document.body.style.color = 'white'
    // }
 
}


