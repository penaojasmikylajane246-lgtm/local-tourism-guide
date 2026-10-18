const searchInput = document.querySelector("#search-input");
const filters = [...document.querySelectorAll(".filter")];
const places = [...document.querySelectorAll(".place")];
const emptyState = document.querySelector("#empty-state");
const resultsCount = document.querySelector("#results-count");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#primary-links");
let activeFilter = "all";

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  navLinks.classList.toggle("is-open", !isExpanded);
});

navLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("is-open");
  }
});

function updatePlaces() {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  places.forEach((place) => {
    const matchesCategory = activeFilter === "all" || place.dataset.category === activeFilter;
    const searchableText = `${place.dataset.search} ${place.dataset.category} ${place.textContent}`.toLowerCase();
    const matchesSearch = !query || searchableText.includes(query);
    const visible = matchesCategory && matchesSearch;
    place.hidden = !visible;
    if (visible) visibleCount += 1;
  });

  emptyState.hidden = visibleCount > 0;
  resultsCount.textContent = `${visibleCount} ${visibleCount === 1 ? "place or experience" : "places and experiences"}`;
}

filters.forEach((button) => button.addEventListener("click", () => {
  activeFilter = button.dataset.filter;
  filters.forEach((filter) => filter.setAttribute("aria-pressed", String(filter === button)));
  updatePlaces();
}));
searchInput.addEventListener("input", updatePlaces);
