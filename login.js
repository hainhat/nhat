var attempt = 3;
function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "QuanNhat123" && password == "quannhat123") {
    alert("Đăng nhập thành công");
    window.location = "index.html";
    return false;
  } else {
    if (username === "" && password === "") {
      alert("Vui lòng nhập tên tài khoản và mật khẩu.");
      return false;
    }
    if (username === "") {
      alert("Vui lòng nhập tên tài khoản.");
      return false;
    }
    if (password === "") {
      alert("Vui lòng nhập mật khẩu.");
      return false;
    }

    attempt--;
    if (password !== "quannhat123") {
      alert("Mật khẩu không đúng. Bạn còn " + attempt + " lần thử nữa;");
    }
    if (attempt == 0) {
      alert("Bạn đã hết lượt nhập. Trang sẽ tự động tải lại.");
      location.reload();
      return false;
    }
  }
}
