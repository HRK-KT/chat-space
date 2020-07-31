$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html = 
     `<div class="Message-box" data-message-id=${message.id}>
        <div class="Message-info">
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
        </div>
      </div>`
        return html;
  } else {
      let html =
     `<div class="Message-box" data-message-id=${message.id}>
        <div class="Message-info">
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
        </div>
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
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.Form__sendBtn').removeAttr("disabled");
    });
  });
});