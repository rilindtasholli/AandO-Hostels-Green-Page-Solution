$(document).ready(function(){
  unselectAll();

  $('#cards .card').each(function(){
    $(this).on('click', function(){
      unselectAll();

      // change card icon to active color
      let currentIconSrc = $(this).children('.card-icon').attr('src');
      $(this).children('.card-icon').attr('src', currentIconSrc.replace('normal', 'active'));
      $(this).addClass('active');

      // show detail card
      let id = this.getAttribute('data-card-detail-id');
      $(`#${id}`).removeClass('hidden');
      window.location.href = `#details`; //scroll to details div
    })
  })
});

function unselectAll() {
  // hdie/remove every card-detail
  $('#more-details .card-detail').each(function(){
    $(this).addClass('hidden');
  });

  // change each card icons to default (white)
  $('#cards .card').each(function(){
    let imageSrc = $(this).children('.card-icon').attr('src');
    $(this).children('.card-icon').attr('src', imageSrc.replace('active', 'normal'));
    $(this).removeClass('active');
  });
}