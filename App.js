function login() {
    // Mendapatkan nilai input
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    // Reset pesan error
    document.getElementById('email-error').innerHTML = "";
    document.getElementById('password-error').innerHTML = "";
    
    // Validasi input
    if ( email === "") {
      document.getElementById('email-error').innerHTML = "Email harus diisi";
      return;
    }
    if (password === "") {
      document.getElementById('password-error').innerHTML = "Password harus diisi";
      return;
    }
    
    // Proses login (disini bisa diteruskan ke backend untuk validasi)
    // Contoh sederhana: cek apakah username dan password adalah "admin"
    if (email === "hesitagesta078@gmail.com" && password === "hesitacantik") {
      alert("Login berhasil!");
      // Redirect ke halaman setelah login sukses
      window.location.href = "order.html";
    } else {
      alert("Email atau password salah. Silakan coba lagi.");
    }
  };
