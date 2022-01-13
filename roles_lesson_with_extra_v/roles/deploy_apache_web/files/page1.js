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



function showSqlAnswer(){
 
    Swal.fire(
      'Подсказка',
      'Используя инструменты разработчика под картинкой, вы можете посмотреть полные реквизиты в комментариях, ' +
      'которые оставил для себя автор.',
      'warning'
    )
}