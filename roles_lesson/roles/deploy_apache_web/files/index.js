let normal_button = document.getElementById('btn');

let ticketBlock = document.getElementById('reviews');


if(normal_button)
{
  normal_button.addEventListener('click', () => {
    Swal.fire(
      'С чего же мы начнём?',
      'Наша база знаний содержит некие полезные реквизиты. Изучите её внимательно.',
      'question'
    )
    if(ticketBlock)
    {
      ticketBlock.classList.add("show");
      ticketBlock.style.visibility = "visible";
    }
  })
}

let superSecretButtonHtml = "\
<div class='content'>\
  <div class='content__flex'>\
    <a class='content__flex a_js' target='blank' href='ticket.pdf'><button class='superSecretButton'>Что это?</button></a>\
  </div>\
</div> \
";


// Кнопка завершения
let end_button = document.getElementById('end_button');

  if(end_button)
{
  end_button.addEventListener('click', () => {
    swal({
  title: "Хотите закончить прохождение?",
  text: "В таком случае нажимайте - \"да\"",
  icon: "warning",
  buttons: true,
  dangerMode: true,
  confirmButtonText: 'Yes, delete it!'
  
}).then((willDelete) => {
  if (willDelete) {
    // swal("Тогда заполняй форму", {
    //   icon: "success",
    //   html: '<a href="adssda.html">ДА ВСТАВЬСЯ БЛвыфыфввыф</a>'
    // });
    window.open("https://forms.gle/sZRB4D6oCXVv3xJD8")
  } else {
    swal("Почему нельзя двигаться назад? В кое-то веки. Двигаться обратно очень быстро на сколько возможно, выжать педаль в пол назад. © Первому игроку приготовиться");
    document.body.insertAdjacentHTML("afterend", superSecretButtonHtml);
  }
});
});
}


function showSqlAnswer(){
 
    Swal.fire(
      'Подсказка',
      'Используя инструменты разработчика под картинкой, вы можете посмотреть полные реквизиты в комментариях, ' +
      'которые оставил для себя автор.',
      'warning'
    )
}