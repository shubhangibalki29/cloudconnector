function register() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;
 
    const user = {name,email, password};
    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful!");
    window.location.href = ("index.html");

}
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
        alert("Login Successful!");
        window.location.href = "dashboard.html";
    }else {
        alert("Invalid Credential!");
    }
    function createPost() {
        const content = document.getElementById("postContent").value;

        let posts = JSON.parse(localStorage.getItem("posts")) || [];
        posts.push(content);

        localStorage.setItem("posts", JSON.stringify(posts));
        alert("Post Created!");
        window.location.href = ("dashboard.html");

        
    }
  if(window.location.pathname.includes("dashboard")){
    const posts = JSON.parse(localStorage.getItem("posts"));
    const postDiv = document.getElementById("posts");

    posts.forEach(post =>
     {
        const p = document.createElement("p");
        p.textContent = post;
        postDiv.appendChild(p);
    });
} 
}
