$(document).ready(function(){
  unselectAll();

  //add onclick function for each card
  $('#cards .card').each(function(){
    $(this).on('click', function(){
      unselectAll();

      // change card to active state
      let currentIconSrc = $(this).children('.card-icon').attr('src'); //get current image source
      $(this).children('.card-icon').attr('src', currentIconSrc.replace('normal', 'active')); //change image from normal to active color
      $(this).addClass('active'); //add active class to the card

      // show detail card
      let id = this.getAttribute('data-card-detail-id'); //get id from custom data attribute
      $(`#${id}`).removeClass('hidden'); //show the specific card-detail by id
      window.location.href = `#details`; //scroll to details div
    })
  })
});

function unselectAll() {
  // hide/remove every card-detail
  $('#more-details .card-detail').each(function(){
    $(this).addClass('hidden');
  });

  // change all card and icons to default state
  $('#cards .card').each(function(){
    let imageSrc = $(this).children('.card-icon').attr('src'); //get current image source
    $(this).children('.card-icon').attr('src', imageSrc.replace('active', 'normal')); //change image from active to its nomral color
    $(this).removeClass('active'); //remove active class from the card
  });
}