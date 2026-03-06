function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser") || "null");
}
function getUsers() {
  return JSON.parse(localStorage.getItem("users") || "[]");
}
function saveUsers(u) {
  localStorage.setItem("users", JSON.stringify(u));
}
function getInvites() {
  return JSON.parse(localStorage.getItem("invites") || "[]");
}
function saveInvites(i) {
  localStorage.setItem("invites", JSON.stringify(i));
}
function getNews() {
  return JSON.parse(localStorage.getItem("news") || "[]");
}
function saveNews(n) {
  localStorage.setItem("news", JSON.stringify(n));
}
function genInviteCode() {
  return Math.random().toString(36).substring(2, 10).toUpperCase();
}
function checkLogin() {
  if (!getCurrentUser()) {
    alert("请先登录");
    location.href = "login.html";
  }
}
function checkAdmin() {
  var u = getCurrentUser();
  if (!u || u.role !== "admin") {
    alert("无管理员权限");
    history.back();
  }
}
