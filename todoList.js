
  let $nameIn = $("#nameInput");
  let $phoneIn = $("#phoneInput");
  let $emailIn = $("#emailInput");
  let $ageIn = $("#ageInput");
  let $contactForm = $("#contactForm");
  let $delBtn = $(".delBtn");
  $contactForm.submit(addContact);
 
  $("#peopleList").on("click", ".delBtn", delContact);
  $("#peopleList").on("click", ".editBtn", edit);
  $("#peopleList").on("click", ".finishBtn", finishEdit);

function addContact(event) {
  event.preventDefault();
  let name = $nameIn.val();
  let phone = $phoneIn.val();
  let email = $emailIn.val();
  let age = $ageIn.val();
  $nameIn.val('');
  $phoneIn.val('');
  $emailIn.val('');
  $ageIn.val('');
  let $row = createRow(name,phone,email,age);
  $("#peopleList").append($row);
}

function createRow(name, phone, email, age) {
  $(".finishBtn").hide();
  let $row = $("#templateRow").clone();
  $row.removeAttr("id");
  $row.children(".name").text(name);
  $row.children(".phone").text(phone);
  $row.children(".email").text(email);
  $row.children(".age").text(age);

  return $row;
}

function delContact(event) {
  let target = $(event.target);
  target.closest('tr').remove();
  $(".addBtn").css("opacity", "1");
}

function edit(event) {
  let name = $(".name",$(this).parent().parent()).text();
  let phone = $(".phone", $(this).parent().parent()).text();
  let email = $(".email", $(this).parent().parent()).text();
  let age = $(".age", $(this).parent().parent()).text();
  $nameIn.val(name);
  $phoneIn.val(phone);
  $emailIn.val(email);
  $ageIn.val(age);
  $(".finishBtn", $(this).parent().parent()).show();
  $(this).hide();
  $(".addBtn").css("opacity", "0");
}

function finishEdit() {
  let name = $nameIn.val();
  let phone = $phoneIn.val();
  let email = $emailIn.val();
  let age = $ageIn.val();
  $(".name",$(this).parent().parent()).text(name);
  $(".phone", $(this).parent().parent()).text(phone);
  $(".email", $(this).parent().parent()).text(email);
  $(".age", $(this).parent().parent()).text(age);
  $("input").val('');
  $(this).hide();
  $(".editBtn").show();
  $(".addBtn").css("opacity", "1");
}

