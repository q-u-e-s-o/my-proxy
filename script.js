let tabCounter = 1;
const tabsContainer = document.getElementById("tabs");
const newTabButton = document.getElementById("new-tab");
const iframe = document.getElementById("active-iframe");

// Keep track of each tab's URL
const tabStates = {};

// Function to create a new tab
function createTab(tabId) {
    // Create new tab button
    const tabButton = document.createElement("button");
    tabButton.className = "tab";
    tabButton.textContent = `Tab ${tabId}`;
    tabButton.dataset.id = tabId;

    // Add click event to switch tabs
    tabButton.addEventListener("click", () => switchTab(tabId));

    // Append tab button to the container
    tabsContainer.appendChild(tabButton);

    // Initialize tab state with a blank page
    tabStates[tabId] = "about:blank";

    // Switch to the new tab
    switchTab(tabId);
}

// Function to switch to a specific tab
function switchTab(tabId) {
    // Mark all tabs as inactive
    document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));

    // Activate the selected tab
    document.querySelector(`.tab[data-id="${tabId}"]`).classList.add("active");

    // Load the iframe with the tab's saved state
    iframe.src = tabStates[tabId];

    // Save the active tab's state when it changes
    iframe.onload = () => {
        tabStates[tabId] = iframe.src;
    };
}

// Add event listener to the new tab button
newTabButton.addEventListener("click", () => {
    tabCounter++;
    createTab(tabCounter);
});

// Initialize the first tab
createTab(1);
