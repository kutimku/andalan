document.getElementById('p2hForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const data = {
    tanggal: document.getElementById('tanggal').value,
    nopol: document.getElementById('nopol').value,
    jenis: document.getElementById('jenis').value,
    kondisi: document.getElementById('kondisi').value
  };

  // Simpan ke localStorage (sementara)
  let existingData = JSON.parse(localStorage.getItem('p2hData')) || [];
  existingData.push(data);
  localStorage.setItem('p2hData', JSON.stringify(existingData));

  alert('Data berhasil disimpan!');
  this.reset();
});
