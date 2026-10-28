const projectCards = document.querySelectorAll(".project-card");
const contentSections = document.querySelectorAll(".content-section");
const contentPanel = document.querySelector(".content-panel");
const returnButtons = document.querySelectorAll(".return-button");

const FADE_DURATION = 220;

let currentSection = document.querySelector(".content-section.active");
let isTransitioning = false;


//switch between pages
function showSection(sectionId) {
    const nextSection = document.getElementById(sectionId);
    if (
        !nextSection ||
        nextSection === currentSection ||
        isTransitioning
    ) {
        return;
    }

    isTransitioning = true;
    currentSection.classList.remove("active");

    window.setTimeout(() => {

        currentSection.hidden = true;
        nextSection.hidden = false;

        //reset scroll
        contentPanel.scrollTop = 0;

        void nextSection.offsetWidth;
        nextSection.classList.add("active");
        currentSection = nextSection;

        window.setTimeout(() => {
            isTransitioning = false;
        }, FADE_DURATION);

    }, FADE_DURATION);
}


projectCards.forEach((card) => {
    card.addEventListener("click", () => {
        const projectId = card.dataset.project;
        showSection(projectId);
    });
});


returnButtons.forEach((button) => {
    button.addEventListener("click", () => { 
        showSection("about"); 
    });
});