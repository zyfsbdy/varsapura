// 全局核心：用户、邀请码、权限、登录状态
function genInviteCode() {
  return Math.random().toString(36).substring(2, 10).toUpperCase();
}

function getInvites() {
  return JSON.parse(localStorage.getItem('invites') || '[]');
}

function saveInvites(list) {
  localStorage.setItem('invites', JSON.stringify(list));
}

function getUsers() {
  return JSON.parse(localStorage.getItem('users') || '[]');
}

function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem('currentUser') || null);
}

// 全站最强制锁：未登录 → 直接踢去登录页
function checkLogin() {
  const u = getCurrentUser();
  if (!u) {
    alert("请登录后访问！");
    location.href = "login.html";
  }
}

// 仅管理员可访问
function checkAdmin() {
  checkLogin();
  const u = getCurrentUser();
  if (!u || u.role !== 'admin') {
    alert("无管理员权限");
    history.back();
  }
}
