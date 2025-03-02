document.getElementById('1st').addEventListener('click', function (event) {
    event.preventDefault();

    const taskText = document.getElementById('task').innerText
    const IntTaskText = parseInt(taskText);

    if (IntTaskText !== 0) {
        alert('Board Updated Successfully');

        
        const newTaskText = IntTaskText - 1;
        document.getElementById('task').innerText = newTaskText;

        const navText = document.getElementById('nav').innerText
        const IntNavText = parseInt(navText);

        const newNavText = IntNavText + 1;

        document.getElementById('nav').innerText = newNavText;

        const firstCardBtn = document.getElementById('1st');
        firstCardBtn.disabled = true;
        firstCardBtn.style.backgroundColor = 'slategray';

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

document.getElementById('2nd').addEventListener('click', function (event) {
    event.preventDefault();

    const taskText = document.getElementById('task').innerText
    const IntTaskText = parseInt(taskText);

    if (IntTaskText !== 0) {
        alert('Board Updated Successfully');

       
        const newTaskText = IntTaskText - 1;
        document.getElementById('task').innerText = newTaskText;

        const navText = document.getElementById('nav').innerText
        const IntNavText = parseInt(navText);

        const newNavText = IntNavText + 1;

        document.getElementById('nav').innerText = newNavText;

        const firstCardBtn = document.getElementById('2nd');
        firstCardBtn.disabled = true;
        firstCardBtn.style.backgroundColor = 'slategray';

        const heading1 = document.getElementById('hd2')

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

document.getElementById('3rd').addEventListener('click', function (event) {
    event.preventDefault();

    const taskText = document.getElementById('task').innerText
    const IntTaskText = parseInt(taskText);

    if (IntTaskText !== 0) {
        alert('Board Updated Successfully');

        const newTaskText = IntTaskText - 1;
        document.getElementById('task').innerText = newTaskText;

        const navText = document.getElementById('nav').innerText
        const IntNavText = parseInt(navText);

        const newNavText = IntNavText + 1;

        document.getElementById('nav').innerText = newNavText;

        const firstCardBtn = document.getElementById('3rd');
        firstCardBtn.disabled = true;
        firstCardBtn.style.backgroundColor = 'slategray';

        const heading1 = document.getElementById('hd3')

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

document.getElementById('4th').addEventListener('click', function (event) {
    event.preventDefault();

    const taskText = document.getElementById('task').innerText
    const IntTaskText = parseInt(taskText);

    if (IntTaskText !== 0) {
        alert('Board Updated Successfully');

        // Adding Task Text
        const newTaskText = IntTaskText - 1;
        document.getElementById('task').innerText = newTaskText;

        const navText = document.getElementById('nav').innerText
        const IntNavText = parseInt(navText);

        const newNavText = IntNavText + 1;

        document.getElementById('nav').innerText = newNavText;

        const firstCardBtn = document.getElementById('4th');
        firstCardBtn.disabled = true;
        firstCardBtn.style.backgroundColor = 'slategray';

        const heading1 = document.getElementById('hd4')

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

document.getElementById('5th').addEventListener('click', function (event) {
    event.preventDefault();

    const taskText = document.getElementById('task').innerText
    const IntTaskText = parseInt(taskText);

    if (IntTaskText !== 0) {
        alert('Board Updated Successfully');

        // Adding Task Text
        const newTaskText = IntTaskText - 1;
        document.getElementById('task').innerText = newTaskText;

        const navText = document.getElementById('nav').innerText
        const IntNavText = parseInt(navText);

        const newNavText = IntNavText + 1;

        document.getElementById('nav').innerText = newNavText;

        const firstCardBtn = document.getElementById('5th');
        firstCardBtn.disabled = true;
        firstCardBtn.style.backgroundColor = 'slategray';

        const heading1 = document.getElementById('hd5')

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

document.getElementById('6th').addEventListener('click', function (event) {
    event.preventDefault();

    const taskText = document.getElementById('task').innerText
    const IntTaskText = parseInt(taskText);

    if (IntTaskText !== 0) {
        alert('Board Updated Successfully');

        // Adding Task Text
        const newTaskText = IntTaskText - 1;
        document.getElementById('task').innerText = newTaskText;

        const navText = document.getElementById('nav').innerText
        const IntNavText = parseInt(navText);

        const newNavText = IntNavText + 1;

        document.getElementById('nav').innerText = newNavText;

        const firstCardBtn = document.getElementById('6th');
        firstCardBtn.disabled = true;
        firstCardBtn.style.backgroundColor = 'slategray';

        const heading1 = document.getElementById('hd6')

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

