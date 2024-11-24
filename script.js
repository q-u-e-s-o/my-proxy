let tabCounter = 1;
const tabsContainer = document.getElementById("tabs");
const tabContent = document.getElementById("tab-content");
const newTabButton = document.getElementById("new-tab");

function createTab(tabId) {
    // Create new tab button
    const tabButton = document.createElement("button");
    tabButton.className = "tab";
    tabButton.textContent = `Tab ${tabId}`;
    tabButton.dataset.id = tabId;
    tabButton.addEventListener("click", () => switchTab(tabId));

    // Create new iframe for the tab
    const iframe = document.createElement("iframe");
    iframe.id = `iframe-${tabId}`;
    iframe.className = "tab-pane";
    iframe.src = "about:blank";

    tabsContainer.appendChild(tabButton);
    tabContent.appendChild(iframe);

    switchTab(tabId);
}

function switchTab(tabId) {
    // Deactivate all tabs and iframes
    document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
    document.querySelectorAll(".tab-pane").forEach(iframe => iframe.classList.remove("active"));

    // Activate selected tab and iframe
    document.querySelector(`.tab[data-id="${tabId}"]`).classList.add("active");
    document.getElementById(`iframe-${tabId}`).classList.add("active");
}

// Add initial tab
newTabButton.addEventListener("click", () => {
    tabCounter++;
    createTab(tabCounter);
});

// Initialize the first tab
switchTab(1);
