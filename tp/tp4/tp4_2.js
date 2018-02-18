/*! TP4_2JS
 * @package Web Programming Preliminary Test #4
 * @author  Wisnu Adi Nurcahyo
 * @license MIT License
 * @warning Don't copy and paste my fuckin work. Feel free to use this as
 *          reference for your own work.
*/

let id = 0;

const add = record => {
  const body = $('table tbody')[0];
  const genderize = gender => gender === 'M'
    ? 'Laki-Laki'
    : gender === 'F'
      ? 'Perempuan'
      : '';

  let button = document.createElement('button');
  button.setAttribute('onclick', `javascript: remove(${id});`);
  button.innerText = 'Hapus';

  let row = body.insertRow();
  row.setAttribute('data-id', id);

  let cell = row.insertCell();
  cell.appendChild(document.createTextNode(record.name));

  cell = row.insertCell();
  cell.appendChild(document.createTextNode(record.nim));

  cell = row.insertCell();
  cell.appendChild(document.createTextNode(record.class));

  cell = row.insertCell();
  cell.appendChild(document.createTextNode(genderize(record.gender)));

  cell = row.insertCell();
  cell.appendChild(button);

  id++;
};

const remove = id => {
  const confirm = window.confirm('Apakah yakin akan menghapus baris ini?');

  if (confirm) {
    const table = $('table tbody')[0];
    const record = Array.from(table.children);
    const length = record.length;

    let index = 0;
    while (id !== Number(record[index].dataset.id) && index < length) index++;

    table.deleteRow(index);
  }
}

const message = msg => {
  const elm = $('.message_1301160479')[0];

  elm.style.display = 'block';
  elm.innerHTML = msg;

  setTimeout(() => elm.style.display = 'none', 3000);
};
