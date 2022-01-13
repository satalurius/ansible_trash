let superSecretButtonHtml = "\
<div class='content'>\
  <div class='content__flex'>\
    <a class='content__flex a_js' target='blank' href='ticket.pdf'><button class='superSecretButton'>Что это?</button></a>\
  </div>\
</div> \
";

let endButton = document.getElementById('end_button');

const endButtonFunc = () => {
    let buttonsCounter = 0;
    if (endButton){
        endButton.addEventListener('click', () => {
            Swal.fire({
                title: 'Хотите закончить прохождение?',
                text: "Это все на что у нас хватило фантазии 😉",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Да',
                cancelButtonText: 'Отмена'
              }).then((result) => {
                if (result.isConfirmed) {
                //   Swal.fire(
                //     'Deleted!',
                //     'Your file has been deleted.',
                //     'success'
                //   )
                    window.open("https://forms.gle/sZRB4D6oCXVv3xJD8")
                } else {
                    Swal.fire(
                        "Почему нельзя двигаться назад? В кое-то веки. Двигаться обратно очень быстро на сколько возможно, выжать педаль в пол назад. © Первому игроку приготовиться"
                    )
                    if (buttonsCounter < 1)
                    {
                        document.body.insertAdjacentHTML("afterend", superSecretButtonHtml);
                        buttonsCounter++;
                    } 

                }
              })
        })
    }
}

endButtonFunc();