function showContent(tab) {
    const contents = document.querySelectorAll('.content');
    const buttons = document.querySelectorAll('.tab-button');

    contents.forEach(content => {
        content.classList.remove('active');
    });

    buttons.forEach(button => {
        button.classList.remove('active');
    });

    document.getElementById(tab).classList.add('active');
    document.querySelector(`[onclick="showContent('${tab}')"]`).classList.add('active');
}
