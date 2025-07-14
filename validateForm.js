
    function validateForm() {
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const check = document.querySelector('.check_box input[type="checkbox"]');
        document.getElementById('username').classList.remove('is-invalid');
        document.getElementById('email').classList.remove('is-invalid');
        document.getElementById('password').classList.remove('is-invalid');

        if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
            if(username.trim() === ""){
                document.getElementById('username').classList.add('is-invalid');
            }
            if(email.trim() === ""){
                document.getElementById('email').classList.add('is-invalid');
            }
            if(password.trim() === ""){
                document.getElementById('password').classList.add('is-invalid');
            }
            alert("các trường dữ liệu là bắt buộc");
            return false;
        }
        
        if (!emailPattern.test(email)) {
            alert("Email không hợp lệ!");
            return false;
        }

        if (password.trim().length <= 6){
            alert("Mật khẩu phải dài hơn 6 kí tự");
            return false;
        }
        if (!check.checked){
            alert("Bạn cần đồng ý với các điều khoản chính sách");
            return false;
        }


        return true;
    }