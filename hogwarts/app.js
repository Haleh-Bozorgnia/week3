$(() => {
  const $container = $("#container");
  console.log($container);
  const $h1 = $("<h1>");
  console.log($h1);
  $h1.text("Hogwarts");
  $container.append($h1);

  //Year 2
  const $h2 = $("<h2>");
  $container.append($h2.text("Haleh Bozorgnia"));
  console.log($h2);

  const $h3 = $("<h3>");
  $container.append($h3.text("Hufflepuff"));

  const $h4 = $("<h4>");
  $h4.addClass("cat");
  $container.append($h4.text("pishi"));
  console.log($container);

  //Year 3
  const $ul = $("<ul>");
  $ul.attr("storage", "trunk");
  $container.append($ul);
  console.log($ul);

  const $li1 = $("<li>");
  $ul.append($li1.text("butter beer"));

  const $li2 = $("<li>");
  $li2.addClass("secret");
  $ul.append($li2.text("invisibility cloak"));

  const $li3 = $("<li>");
  $li3.addClass("secret");
  $ul.append($li3.text("imagic map"));

  const $li4 = $("<li>");
  $li4.addClass("secret");
  $ul.append($li4.text("time turner"));

  const $li5 = $("<li>");
  $li5.addClass("cat");
  $ul.append($li5.text("leash"));

  const $li6 = $("<li>");
  $ul.append($li6.text("Bertie Bott's Every Flavor [Jelly] Beans."));
  $container.append($ul);

  //Year 4
  const $h5 = $("<h5>").text("Spring 2017");
  $container.append($h5);
  //create table

  const $table = $("<table>");

  const $tr1 = $("<tr>");
  const $th1 = $("<th>").text("Day");
  const $th2 = $("<th>").text("Classes");
  $tr1.append($th1, $th2);

  // add first day that I took the class
  const $tr2 = $("<tr>");
  const $td3 = $("<td>").text("Monday");
  const $td4 = $("<td>").text("History");
  $tr2.append($td3, $td4);
  // add second day that I took the class
  const $tr3 = $("<tr>");
  const $td5 = $("<td>").text("Tusday");
  const $td6 = $("<td>").text("Herbology");
  $tr3.append($td5, $td6);
  // add third day that I took the class
  const $tr4 = $("<tr>");
  const $td7 = $("<td>").text("Wednesday");
  const $td8 = $("<td>").text("Transfiguration");
  $tr3.append($td7, $td8);
  //append roes to table
  $table.append($tr1, $tr2, $tr3, $tr4);
  //append table to container
  $container.append($table);
});
