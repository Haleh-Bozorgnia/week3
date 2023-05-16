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
});
