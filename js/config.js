const buttonsContainer = document.querySelector(".post-buttons");

const buttonsData = {
  button1: {
    name: "دکمه تستی۱",
    link: "https://t.me/DevArshia",
  },
  button2: {
    name: "دکمه تستی۲",
    link: "https://github.com/arshiajr-coder",
  },
  button3: {
    name: "دکمه ی تستی۳",
    link: "https://t.me/DevArshia1",
  },
  button4: {
    name: "دکمه تستی۴",
    link: "https://t.me/DevArshia2",
  },
  button5: {
    name: "دکمه تستی۵",
    link: "https://t.me/DevArshia3",
  }
};

const keys = Object.keys(buttonsData);

for (let i = 0; i < keys.length; i++) {
  const newButton = document.createElement("div");
  newButton.className = "btn";
  newButton.innerHTML = `<a href=${
    buttonsData[keys[i]].link
  } target="_blank" class="center">
    <p>${buttonsData[keys[i]].name}</p>
    <div class="goto-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="currentColor"
        class="bi bi-arrow-right-short"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
        />
      </svg>
    </div>
    </a>`;
    buttonsContainer.appendChild(newButton)
}
