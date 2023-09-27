const buttonsContainer = document.querySelector(".post-buttons");
const postContents = document.querySelector(".post-content");
const postImg = document.querySelector(".post-img");
const postText = document.querySelector(".post-text");
const postId = document.querySelector(".post-id");

const postData = {
  imgLink: "./assets/img/ProgrammingIllustration.png",

  text: `
  باحال شده نه؟ هنر نزد ایرانیان است و بس . 
  من عرشیا جعفرنژادم 
  و اینا کل لینک های منن 
  از کانال تلگرامی بگیر تا سایت شخصی
  `,

  id: {
    name: "coderna_js@ 🎲",
    link: "https://t.me/coderna_js"
  },

  buttonsData:{
    button1: {
      name: "تلگرام شخصی 👤",
      link: "https://t.me/DevArshia",
    },
    button2: {
      name: "صفحه گیت هاب 🔅",
      link: "https://github.com/arshiajr-coder",
    },
    button3: {
      name: "پیج اینستا 📸",
      link: "https://t.me/https://instagram.com/im-arshiajr",
    },
    button4: {
      name: "سایت شخصی 🌐",
      link: "https://arshiajr-coder.github.io/arshiaweb/",
    },
    button5: {
      name: "کانال سورس ها و پروژه ها 📢",
      link: "https://t.me/coderna_js",
    }
  }
};

const keys = Object.keys(postData.buttonsData);

for (let i = 0; i < keys.length; i++) {
  const newButton = document.createElement("div");
  newButton.className = "btn";
  newButton.innerHTML = `<a href=${
    postData.buttonsData[keys[i]].link
  } target="_blank" class="center">
    <p>${postData.buttonsData[keys[i]].name}</p>
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

postImg.children[0].src = postData.imgLink
postText.innerHTML = postData.text;
postId.href = postData.id.link
postId.children[0].innerHTML = postData.id.name