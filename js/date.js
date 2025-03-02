const p = document.createElement("p");

p.innerHTML = `<p id="day" class="font-medium text-[1rem]">
                ${new Date().toLocaleDateString("en-US", { weekday: "long" })} <br />
                <span id="date" class="font-bold"> ${new Date().toLocaleDateString()} </span>
              </p>`


document.getElementById("date").appendChild(p);