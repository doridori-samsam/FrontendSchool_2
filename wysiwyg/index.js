document.querySelectorAll('.options button').forEach(item => item.addEventListener('click', function () {
    const command = item.dataset.command;
    if (command === 'h1' || command === 'h2' || command === 'h3' || command === 'p') {
        document.execCommand('formatBlock', false, command);
    } else {
        document.execCommand(command);
    }

}));