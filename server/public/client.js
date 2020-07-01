$(document).ready(onReady);

function onReady() {
  $.ajax({
    type: 'GET',
    url: '/artist',
  }).then(function (response) {
    for (let i = 0; i < response.length; i++) {
      let artist = response[i];
      $('#artistTableBody').append(`
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `);
    }
  });

  // TODO Add ajax request for /songs and display on DOM
  $.ajax({
    type: 'GET',
    url: '/song',
  }).then((response) => {
    for (let song of response) {
      $('#songTableBody').append(`
      <tr>
        <td>${song.title}</td>
        <td>${song.artist}</td>
      </tr>
        `);
    }
  });

  $.ajax({
    type: 'GET',
    url: '/albums',
  }).then((response) => {
    for (let album of response) {
      $('#albumTableBody').append(`
      <tr>
        <td>${album.title}</td>
        <td>${album.year}</td>
      </tr>
        `);
    }
  });
}
