let btnTambah = document.getElementById("btn-tambah");
let output = document.getElementById("output");

btnTambah.onclick = (e) => {
  let input = document.getElementById("assignment");
  let title = input.value.trim();

  if (title == "") {
    alert("Inputan masih kosong");
    return;
  }

  let task = document.createElement("div");
  task.id = "${Date.now()}";
  task.className =
    "flex justify-between items-center bg-gray-100 p-2 rounded shadow";

  task.innerHTML = `
      <p class="flex-grow text-gray-800">${title}</p>
      <input type="button" id="btn-selesai" value="SELESAI" data-task="${task.id}"
             class="bg-green-700 text-white px-3 py-1 rounded hover:bg-green-400 mr-2">
      <input type="button" id="btn-hapus" value="HAPUS" data-task="${task.id}"
             class="bg-red-700 text-white px-3 py-1 rounded hover:bg-red-400">
   `;

  output.appendChild(task);

  input.value = "";

  const doneButtons = document.querySelectorAll("#btn-selesai");
  doneButtons.forEach((button) => {
    const listItem = button.parentElement;
    listItem.addEventListener("click", () => {
      listItem.classList.add("bg-yellow-100");
    });
  });

  const deleteButtons = document.querySelectorAll("#btn-hapus");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const listItem = button.parentElement;
      listItem.remove();
    });
  });

  e.preventDefault();
};
