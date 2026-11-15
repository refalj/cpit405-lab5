const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = "Dark Mode";
    }

});
const readMoreButton = document.getElementById("read-more");
const moreAbout = document.getElementById("more-about");

readMoreButton.addEventListener("click", function () {

    if (moreAbout.hidden) {
        moreAbout.hidden = false;
        readMoreButton.textContent = "Show Less";
    } else {
        moreAbout.hidden = true;
        readMoreButton.textContent = "Show More";
    }

});
// Task 3: Dynamic Projects

const projects = [
    {
        title: "Oracle Club Website",
        description: "A university club website showcasing members, projects, achievements, events, and sponsors.",
        category: "Web",
        technologies: ["Next.js", "Tailwind CSS", "Sanity CMS"]
    },
    {
        title: "Smart Parking System",
        description: "A Java-based system for managing parking reservations, student accounts, and available parking slots.",
        category: "Programming",
        technologies: ["Java", "MySQL", "JUnit"]
    }
];

const projectsContainer = document.getElementById("projects-container");

function renderProjects(category = "All") {

    projectsContainer.innerHTML = "";

    const filteredProjects = projects.filter(function(project) {
        return category === "All" || project.category === category;
    });

    for (let project of filteredProjects) {

        const card = document.createElement("article");
        card.classList.add("project-card");

        const title = document.createElement("h3");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        const projectCategory = document.createElement("p");
        projectCategory.textContent = "Category: " + project.category;

        const technologies = document.createElement("p");
        technologies.textContent = "Technologies: " + project.technologies.join(", ");

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(projectCategory);
        card.appendChild(technologies);

        projectsContainer.appendChild(card);
    }
}

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const category = button.dataset.category;

        renderProjects(category);

    });

});
renderProjects();

const printButton = document.getElementById("print-button");

printButton.addEventListener("click", function() {
    window.print();
});