const catalog = [
  {
    title: "Dope House",
    artist: "LB the Late Bloomer",

    writers: [
      {
        name: "LB the Late Bloomer",
        pro: "BMI",
        ipi: "",
        share: 100
      }
    ],

    publisher: {
      name: "Late Bloomer Recordings",
      pro: "BMI",
      ipi: "",
      share: 100
    },

    isrc: "",
    iswc: "",

    copyrightFiled: false,
    proRegistered: false,
    mlcRegistered: false,
    hfaRegistered: false,

    distributor: "DistroKid",
    contentId: false,
    syncReady: false
  }
];

document.getElementById("output").textContent =
  JSON.stringify(catalog, null, 2);
