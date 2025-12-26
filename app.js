// Late Bloomer Recordings – Internal Catalog System

const catalog = [
  {
    title: "Dope House",
    artist: "LB the Late Bloomer",

    writers: [
      {
        name: "LB the Late Bloomer",
        pro: "BMI",
        share: 100
      }
    ],

    publisher: {
      name: "Late Bloomer Recordings",
      pro: "BMI",
      share: 100
    },

    isrc: "",
    iswc: "",

    distributor: "DistroKid",

    copyrightFiled: false,
    proRegistered: false,
    mlcRegistered: false,
    hfaRegistered: false
  }
];

// Display catalog JSON
document.getElementById("output").textContent =
  JSON.stringify(catalog, null, 2);

document.getElementById("statusDisplay").textContent =
  getStatus(catalog[0]);

// Export CSV
function exportCSV() {
  let csv =
    "Title,Artist,Writer,Writer PRO,Writer %,Publisher,Publisher PRO,ISRC,ISWC,Distributor\n";

  catalog.forEach(song => {
    const writer = song.writers[0];
    csv +=
      `"${song.title}","${song.artist}","${writer.name}","${writer.pro}","${writer.share}","${song.publisher.name}","${song.publisher.pro}","${song.isrc}","${song.iswc}","${song.distributor}"\n`;
  });

  // Show CSV preview
  document.getElementById("csvPreview").textContent = csv;
  document.getElementById("status").textContent =
    "CSV generated. Download should begin automatically.";

  // Trigger download
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "late-bloomer-catalog.csv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
function getStatus(song) {
  if (!song.copyrightFiled) return "🔴 Copyright Not Filed";
  if (!song.proRegistered) return "🟡 PRO Registration Pending";
  if (!song.mlcRegistered) return "🟡 MLC Registration Pending";
  if (!song.hfaRegistered) return "🟡 HFA Registration Pending";
  return "🟢 Fully Registered";
}
