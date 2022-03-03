

    let count = 0;
    function increment(){
        var get =document.getElementById("count");
        count = count+1;
        get.innerHTML = count;
    };


    function save(){
        var sav = document.getElementById("counter");
        let saver  = count + " - ";
        sav.innerHTML += saver;
    }

    function clean(){
        var get =document.getElementById("count");
        var sav = document.getElementById("counter");
        sav.textContent = "";
        count = 0;
        get.textContent = count;
    }