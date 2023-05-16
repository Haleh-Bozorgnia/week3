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

  const $h3 = $ ("<h3>")
  $container.append(($h3.text("Hufflepuff")))

  const $h4 = $ ("<h4>")
  $h4.addClass("cat")
  $container.append($h4.text("pishi"))
console.log($container)
});
