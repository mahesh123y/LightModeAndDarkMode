const bg = document.querySelector('#bgMode')
        const text = document.getElementsByTagName('h1')
        const btn = document.querySelector('.btn')
        let f = 0

        btn.addEventListener('click', () =>{
            if(f == 0){
                bg.style.background = 'black'
                bg.style.color = 'white'
                text[1].innerHTML = 'Dark Mode'
                text[0].innerHTML = 'Dark Mode'
                text[0].style.color = 'yellow'
                btn.style.color = 'white'
                btn.style.background = 'black'
                btn.innerHTML = 'Light Mode'
                f = 1
            }
            else{
                bg.style.background = 'white'
                bg.style.color = 'black'
                text[1].innerHTML = 'Light Mode'
                text[0].innerHTML = 'Light Mode'
                text[0].style.color = 'red'
                btn.style.color = 'black'
                btn.style.background = 'white'
                btn.innerHTML = 'Dark Mode'
                f = 0
            }
            
            console.log(btn)
        })