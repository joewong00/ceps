function changeBg(){

    let image = document.getElementById('image');
    let images = ['./images/banner1.jpeg', './images/banner2.jpeg','./images/banner3.jpg']
    
    setInterval(function(){
        let random = Math.floor(Math.random()* 3);
        image.src = images[random];
    }, 1000)

}