$(function() {
  $("#table_id").dataTable({
  aaData: [
  ["Bodri", "10", "puli", ""],
  ["Daci", "7", "Keverék", ""],
  ["Dézi", "14", "keverék", ""],
  ["Fruzsina", "12", "Foxterrier", ""],
  
  ],
  aoColumnDefs: [
  {
  sTitle: "Subject Name",
  aTargets: ["subj_name"]
  },
  {
  aTargets: [3],
  sType: "date",
  mRender: function(date, type, full) {
  return full[1] == "70" ? new Date(date).toDateString() : "N/A";
  }
  }
  ]
  });
  });