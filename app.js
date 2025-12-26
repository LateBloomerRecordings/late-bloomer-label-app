function exportCSV() {
  let csv = "Title,Artist,Writer,Writer PRO,Writer %,Publisher,Publisher PRO,ISRC,ISWC,Distributor\n";

  catalog.forEach(song => {
    const writer = song.writers[0];
    csv += `"${song.title}","${song.artist}","${writer.name}","${writer.pro}","${writer.share}","${song.publisher.name}","${song.publisher.pro}","${song.isrc}","${song.iswc}","${song.distributor}"\n`;
  });

  // Show CSV on screen (fallback)
  document.getElementById("csvPreview").textContent = csv;
  document.getElementById("status").textContent =
    "CSV generated. Download should start automatically. If not, copy from below.";

  // Attempt download
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "late-bloomer-catalog.csv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
