function login()
{
    user_name = document.getElementById("UserName").value;
    localStorage.setItem("user_name",user_name);

    window.location = "chat_app.html";
}