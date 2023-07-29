let title = document.querySelector("title");

let title_list = ["lol", "lmao", "lmfao", "ok", "okk", "okktop.lol", "hello", "candy"];

onload = (event) => {
    title.innerText = title_list[Math.floor(Math.random() * title_list.length)];
};