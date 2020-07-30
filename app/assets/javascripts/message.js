$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html = 
     `<div class="Message-info">
        <div class="Message-info__user">
          ${message.user_name}
        </div>
        <div class="Message-info__date">
          ${message.created_at}
        </div>
        </div>
      <div class="Message-body">
        <p class="Message-content">
          ${message.body}
        </p>
        <img class="Message-image" src="${message.image}">
      </div>`
      return html;
  } else {
      let html =
     `<div class="Message-info">
        <div class="Message-info__user">
          ${message.user_name}
        </div>
        <div class="Message-info__date">
          ${message.created_at}
        </div>
      </div>
      <div class="Message-body">
        <p class="Message-content">
          ${message.body}
        </p>
      </div>`
      return html;
  };
}

  $('.Form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Chat-main__message-list').append(html);
      $('.Chat-main__message-list').animate({ scrollTop: $('.Chat-main__message-list')[0].scrollHeight});
      $('form')[0].reset();
      $('.Form__sendBtn').removeAttr("disabled");
    })
  });
});