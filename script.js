// Save checkbox states using localStorage
document.querySelectorAll("input[type='checkbox']").forEach((checkbox, i) => {
    const key = `fbiCheckbox${i}`;
    checkbox.checked = localStorage.getItem(key) === "true";

    checkbox.addEventListener("change", () => {
        localStorage.setItem(key, checkbox.checked);
    });
});
