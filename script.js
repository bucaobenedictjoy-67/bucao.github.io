document.addEventListener('DOMContentLoaded', () => {
    const words = [
        { text: 'Otaku', color: 'rgba(190, 7, 84, 1)' },       
        { text: 'Gooner', color: 'rgba(22, 158, 236, 1)' },     
        { text: 'Looksmaxxer', color: 'rgba(147, 21, 219, 1)' }  
    ];

    const span = document.querySelector('.span1');
    const article = document.querySelector('.article');
    let index = 0;

    function showWord() {
        const { text, color } = words[index];
        span.style.opacity = 0;  

        setTimeout(() => {
            span.textContent = text;
            span.style.color = color;  

             
            article.textContent = ['a','e','i','o','u'].includes(text[0].toLowerCase()) ? 'an' : 'a';

            span.style.opacity = 1;  
        }, 300);

        index = (index + 1) % words.length;
    }

    showWord();  
    setInterval(showWord, 3000);  
});






 
  function toggleMode() {
    document.body.classList.toggle("dark");
    const icon = document.getElementById("modeIcon");

    if (document.body.classList.contains("dark")) {
        icon.src = "escanor.png";
        icon.alt = "Light Mode";
    } else {
        icon.src = "moon.png";
        icon.alt = "Dark Mode";
    }
}











 