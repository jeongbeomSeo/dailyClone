$(".txtb").on("keyup",function(e) {
  //13 means enter button
  if(e.keyCode == 13 && $(".txtb").val() != "") {
    var task = $("<div class='task'></div>").text($(".txtb").val());
    //$("<div class='task'></div>") => $(".task")로 할경우 기존에 있던 task 의 내용이 변경됨.
    //또한 나중에 class=task 부분도 다 지우기 때문에 위에 처럼 써야됨.
    /*mean => txtb에 무언가를 입력후 enter를 누를시에 
    <div class='task'> </div> 안에 text를 추가 text는 txtb의 value*/
    var del = $("<i class='fas fa-trash-alt'></i>").click(function() {
      var p = $(this).parent();
      //밑에 보면 task.append(del, check)를 하므로 del과 check의 parent는 task가된다.
      p.fadeOut(function() {
        p.remove();
      })
    });

    var check = $("<i class='fas fa-check'></i>").click(function() {
      var p = $(this).parent();
      p.fadeOut(function() {
        $(".comp").append(p);
        p.fadeIn();
      });
      $(this).remove();
    });

    task.append(del,check);
    $(".notcomp").append(task) 
    //to clear the input
    $(".txtb").val("");
  }
})