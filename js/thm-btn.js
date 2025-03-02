document.getElementById("thm-btn").addEventListener("click",
    function(){
        const body = document.getElementById("whole");

        const letters = "0123456789ABCDEF";
        let color = "#";

            for(let i=0;i<6;i++){
                color += letters[Math.floor(Math.random()*16)];
            }
        
        whole.style.backgroundColor = color;
    }
)