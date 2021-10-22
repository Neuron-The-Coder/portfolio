// const things = "World, I am Josh"

// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, {formatName(user)}!</h1>;
//   }
//   return <h1>Hello, Stranger.</h1>;
// }

// var second = 0;
// const elren = <Welcome name="Hello World.inc"></Welcome>
// ReactDOM.render(elren, document.getElementById("test"));

// function showTime(){
//   let hou = Math.floor(second / 3600);
//   let min = Math.floor(second % 3600 / 60);
//   let sec = second % 60;
//   const element = (
//     <div className="time">
//       <h1>Time Now</h1>
//       <p>{hou.toString().padStart(2, '0')}:{min.toString().padStart(2, '0')}:{sec.toString().padStart(2, '0')}</p>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById("root"));
//   second += 1;
// }

// // Buat atribut baru
// function Welcome(props){
//   return (
//     <h1>Welcome to React.js, {props.name}</h1>
//   )
// }

// setInterval(showTime, 0.01);

// REAL REACT THINGS

function Navbar() {
  var element = React.createElement(
    "div",
    { className: "navbar" },
    React.createElement(
      "div",
      { className: "top" },
      React.createElement(
        "div",
        { className: "upper" },
        React.createElement(
          "div",
          { className: "logo" },
          "Doctor Neuron"
        ),
        React.createElement(
          "div",
          { className: "switch" },
          React.createElement("i", { className: "fa fa-bars" })
        )
      ),
      React.createElement(
        "ul",
        { className: "lower", id: "navbar-toggle" },
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "" },
            React.createElement("i", { className: "fas fa-door-open" }),
            React.createElement(
              "p",
              null,
              "Header"
            )
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "" },
            React.createElement("i", { className: "fas fa-user" }),
            React.createElement(
              "p",
              null,
              "Biography"
            )
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "" },
            React.createElement("i", { className: "fas fa-globe" }),
            React.createElement(
              "p",
              null,
              "Webs"
            )
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "" },
            React.createElement("i", { className: "fas fa-image" }),
            React.createElement(
              "p",
              null,
              "Arts"
            )
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "" },
            React.createElement("i", { className: "fas fa-phone" }),
            React.createElement(
              "p",
              null,
              "Contacts"
            )
          )
        )
      )
    ),
    React.createElement(
      "div",
      { className: "bottom" },
      React.createElement(
        "div",
        { className: "bottom-container" },
        React.createElement(
          "p",
          null,
          "Made by Doctor Neuron"
        ),
        React.createElement(
          "p",
          null,
          "First project using ReactJS"
        ),
        React.createElement(
          "p",
          null,
          "Supported by SCSS"
        )
      )
    )
  );

  return element;
}

function Content() {
  var element = React.createElement(
    "div",
    { className: "content" },
    React.createElement(Header, null),
    React.createElement(
      "p",
      null,
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, sed error! Mollitia quibusdam possimus dolor saepe praesentium quos, nemo dolores incidunt dolorum consequuntur obcaecati officia rem quod architecto totam earum exercitationem dolore sapiente quidem nobis fugiat necessitatibus maiores autem magnam? Rem debitis esse mollitia similique perspiciatis voluptatibus nemo architecto delectus, impedit maiores perferendis dolore officiis iure! Enim qui praesentium temporibus sapiente esse fugiat illum nam quam ut aperiam accusantium dignissimos provident laudantium laboriosam dolores quae id dicta vero, ea expedita asperiores, sed deleniti. Nesciunt maxime harum, voluptas enim, fugiat atque voluptates perspiciatis provident fugit hic doloremque. Quam accusamus, animi asperiores ipsa odio tenetur ullam itaque architecto consectetur maxime nemo, eius voluptate facere, facilis dolores. Soluta suscipit cum dolore necessitatibus omnis excepturi sapiente vitae vero maxime! Eveniet modi dolorem amet, minima rerum ducimus cupiditate ullam delectus dolor hic laboriosam illo exercitationem nobis quis dolorum suscipit, sit in. Illum eius repellat quia fuga, praesentium quo dolorum nulla delectus minima nobis voluptas. Repellat nostrum non reprehenderit possimus cum facere dolorum corrupti sed quis ipsa similique nulla unde delectus beatae eveniet nihil, incidunt voluptatibus numquam excepturi asperiores mollitia eos a doloremque! Iste, commodi sed qui veritatis excepturi rem eligendi! Ullam deleniti officiis perferendis dolor provident sed dolores voluptate dicta nam, exercitationem, voluptatibus quibusdam quod consequatur consectetur at? Cumque explicabo eius magnam culpa, quaerat quasi quas tempora possimus cupiditate consequuntur eaque exercitationem ducimus vero labore veniam debitis non sunt quae. Consectetur sint quam laboriosam quas et quos earum hic accusamus cum ut, error sapiente non reiciendis deleniti commodi similique consequatur perferendis maxime esse ullam repellendus quisquam nobis? Repellendus magnam est laudantium. Facere quis commodi nulla provident quo eos reprehenderit odio nihil, quos, at sint rerum fugit suscipit vel tempore laudantium assumenda molestiae soluta! Possimus voluptate quod ex blanditiis consectetur corrupti aut fuga iste explicabo? Minus."
    ),
    React.createElement(
      "p",
      null,
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, sed error! Mollitia quibusdam possimus dolor saepe praesentium quos, nemo dolores incidunt dolorum consequuntur obcaecati officia rem quod architecto totam earum exercitationem dolore sapiente quidem nobis fugiat necessitatibus maiores autem magnam? Rem debitis esse mollitia similique perspiciatis voluptatibus nemo architecto delectus, impedit maiores perferendis dolore officiis iure! Enim qui praesentium temporibus sapiente esse fugiat illum nam quam ut aperiam accusantium dignissimos provident laudantium laboriosam dolores quae id dicta vero, ea expedita asperiores, sed deleniti. Nesciunt maxime harum, voluptas enim, fugiat atque voluptates perspiciatis provident fugit hic doloremque. Quam accusamus, animi asperiores ipsa odio tenetur ullam itaque architecto consectetur maxime nemo, eius voluptate facere, facilis dolores. Soluta suscipit cum dolore necessitatibus omnis excepturi sapiente vitae vero maxime! Eveniet modi dolorem amet, minima rerum ducimus cupiditate ullam delectus dolor hic laboriosam illo exercitationem nobis quis dolorum suscipit, sit in. Illum eius repellat quia fuga, praesentium quo dolorum nulla delectus minima nobis voluptas. Repellat nostrum non reprehenderit possimus cum facere dolorum corrupti sed quis ipsa similique nulla unde delectus beatae eveniet nihil, incidunt voluptatibus numquam excepturi asperiores mollitia eos a doloremque! Iste, commodi sed qui veritatis excepturi rem eligendi! Ullam deleniti officiis perferendis dolor provident sed dolores voluptate dicta nam, exercitationem, voluptatibus quibusdam quod consequatur consectetur at? Cumque explicabo eius magnam culpa, quaerat quasi quas tempora possimus cupiditate consequuntur eaque exercitationem ducimus vero labore veniam debitis non sunt quae. Consectetur sint quam laboriosam quas et quos earum hic accusamus cum ut, error sapiente non reiciendis deleniti commodi similique consequatur perferendis maxime esse ullam repellendus quisquam nobis? Repellendus magnam est laudantium. Facere quis commodi nulla provident quo eos reprehenderit odio nihil, quos, at sint rerum fugit suscipit vel tempore laudantium assumenda molestiae soluta! Possimus voluptate quod ex blanditiis consectetur corrupti aut fuga iste explicabo? Minus."
    )
  );

  return element;
}

function Header() {
  var element = React.createElement(
    "div",
    { className: "header" },
    React.createElement(
      "div",
      { className: "left" },
      React.createElement(
        "div",
        { className: "upper" },
        React.createElement(
          "div",
          { className: "title" },
          "Hello There"
        ),
        React.createElement(
          "div",
          { className: "subtitle" },
          "Welcome to my simplest portfolio"
        )
      ),
      React.createElement(
        "div",
        { className: "lower" },
        React.createElement(
          "div",
          { className: "quote" },
          "It aint much, bit its a honest work"
        ),
        React.createElement(
          "button",
          { className: "learn-more" },
          "Learn more"
        )
      )
    )
  );
  return element;
}

function main() {
  var element = React.createElement(
    "div",
    { className: "main-container" },
    React.createElement(Navbar, null),
    React.createElement(Content, null)
  );

  ReactDOM.render(element, document.querySelector("body"));
}

main();