headshot = document.getElementById("matrixImg")
headerText = document.getElementById("headerText")
skills = ["The morning coder...", "The Express Makeover...", "The Reactive Redux...", "Toronto Web Developer...",
"Node Debugging in 3...", "Design, Code, Test", "MongoDB query searcher...", "Model-View-Controller...", "Agile Scrummin..."]
headerText.textContent = skills[3];
setInterval(function() {
    headerText.textContent = skills[Math.floor(Math.random() * skills.length)]
}, 4500)

arrow = document.getElementById("portfolioArrow")
arrow.onclick = function() {window.scrollTo({ top: 750, behavior: 'smooth' })}