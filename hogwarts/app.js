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
  const $h = $("<h4>");
  $container.append($h.text("Holly Wand with Unicorn Hair Core"));

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
  $tr4.append($td7, $td8);
  //append roes to table
  $table.append($tr1, $tr2, $tr3, $tr4);
  //append table to container
  $container.append($table);

  // Year 5
  //Break your wand!
  $h.remove();

  //Class was hard! Drink all your butter beer! (remove just the butter beer from your list)
  $li1.remove();
  //Get a new wand (add the same element back with new text describing your new wand. Be sure to insert it after your pet in the DOM)

  const $new_h = $("<h4>");
  $new_h.text("new Holly Wand with Unicorn Hair Core");
  $container.append($new_h);
  $h4.after($new_h);
  //Make your new wand stand out by adding a color of indigo (or whatever color you like). But do it with magic (jQuery): Don't add this css in your main.css file
  $new_h.css("color", "indigo");
  //Send your pet on a spy mission
  $h4.detach();
  //Have your pet come back (remove your pet from the DOM, put it back in its original location)
  $h4.remove();
  $h3.append($h4);
  //Year 6
  $(".secret").hide("slow");

  //Nosey roommate falls asleep 2 seconds later
  $(".secret").hide("2000");
  // Use jQuery method show to reveal all of your belongings

  $(".secret").show("slow");
  //add the class cabbage to your pet's leash
  $li5.addClass("cabbage");
  //add an attribute of color:CHARTREUSE
  //Fix your pet's leash by removing the class of cabbage
  $li5.removeClass("cabbage");

  //Day 7
  //Update your class schedule to read 'Fall 2018'
  $h5.text("Fall 2018");
  //Append a list item with the text 'Butter beer' as the first list item inside your unordered list with the value of trunk

const $li0 = $("<li>");
$ul.prepend($li0.text("butter beer"));

// Get a new storage container for your stuff; replace the unodered list's property of trunk with a new property of chest
const $newdiv = $ ("<div>")
$ul.attr("storage","chest")

// Add some CSS to your page. Feel free to experiment and make this page your own

// Take a screenshot of your page and add it to your homework folder

});
