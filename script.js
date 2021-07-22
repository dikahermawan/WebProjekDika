
function simpandata() {

  var nama = document.getElementById("nama").value;
  var nomor = document.getElementById("nomor").value;

  document.getElementById("dataDiri").innerHTML = "<i> Selamat datang, " + nama + " Anda adalah pengunjung ke- " + (nomor * 2 + 1) + " pada situs kami </i>";

}
