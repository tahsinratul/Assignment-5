document.getElementById('1st').addEventListener('click', function (event) {
    event.preventDefault();

    const taskText = document.getElementById('task').innerText
    const IntTaskText = parseInt(taskText);

    if (IntTaskText !== 0) {
        alert('Board Updated Successfully');

        // Adding Task Text
        const newTaskText = IntTaskText - 1;
        document.getElementById('task').innerText = newTaskText;

        // Adding Nav Text
        const navText = document.getElementById('nav').innerText
        const IntNavText = parseInt(navText);

        const newNavText = IntNavText + 1;

        document.getElementById('nav').innerText = newNavText;

        const firstCardBtn = document.getElementById('1st');
        firstCardBtn.disabled = true;
        firstCardBtn.style.backgroundColor = 'slategray';

        // Push into Activity Div
        const heading1 = document.getElementById('hd1')

        const activity = document.getElementById('clear1');

        const div = document.createElement('div');
        div.innerHTML = `<p class = "mt-2">You have completed the task ${heading1.innerText} at ${
          new Date().toLocaleTimeString()
        }</p>`

        activity.appendChild(div)
    } else {
        alert('Congrats!!!You have completed all current tasks')
    }
})
