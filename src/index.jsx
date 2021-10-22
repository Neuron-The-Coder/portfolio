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

function Navbar(){
  const element = (
    <div className="navbar">
      <div className="top">
        <div className="upper">
          <div className="logo">
            Doctor Neuron
          </div>
          <div className="switch">
            <i className="fa fa-bars"></i>
          </div>
        </div>
        
        <ul className="lower" id="navbar-toggle">
          <li>
            <a href="">
              <i className="fas fa-door-open"></i>
              <p>Header</p>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fas fa-user"></i>
              <p>Biography</p>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fas fa-globe"></i>
              <p>Webs</p>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fas fa-image"></i>
              <p>Arts</p>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fas fa-phone"></i>
              <p>Contacts</p>
            </a>
          </li>

        </ul>

      </div>

      <div className="bottom">
        <div className="bottom-container">
          <p>Made by Doctor Neuron</p>
          <p>First project using ReactJS</p>
          <p>Supported by SCSS</p>
        </div>
      </div>
    </div>
  );

  return element;
}

function Content(){
  const element = (
    <div className="content">
      <Header></Header>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, sed error! Mollitia quibusdam possimus dolor saepe praesentium quos, nemo dolores incidunt dolorum consequuntur obcaecati officia rem quod architecto totam earum exercitationem dolore sapiente quidem nobis fugiat necessitatibus maiores autem magnam? Rem debitis esse mollitia similique perspiciatis voluptatibus nemo architecto delectus, impedit maiores perferendis dolore officiis iure! Enim qui praesentium temporibus sapiente esse fugiat illum nam quam ut aperiam accusantium dignissimos provident laudantium laboriosam dolores quae id dicta vero, ea expedita asperiores, sed deleniti. Nesciunt maxime harum, voluptas enim, fugiat atque voluptates perspiciatis provident fugit hic doloremque. Quam accusamus, animi asperiores ipsa odio tenetur ullam itaque architecto consectetur maxime nemo, eius voluptate facere, facilis dolores. Soluta suscipit cum dolore necessitatibus omnis excepturi sapiente vitae vero maxime! Eveniet modi dolorem amet, minima rerum ducimus cupiditate ullam delectus dolor hic laboriosam illo exercitationem nobis quis dolorum suscipit, sit in. Illum eius repellat quia fuga, praesentium quo dolorum nulla delectus minima nobis voluptas. Repellat nostrum non reprehenderit possimus cum facere dolorum corrupti sed quis ipsa similique nulla unde delectus beatae eveniet nihil, incidunt voluptatibus numquam excepturi asperiores mollitia eos a doloremque! Iste, commodi sed qui veritatis excepturi rem eligendi! Ullam deleniti officiis perferendis dolor provident sed dolores voluptate dicta nam, exercitationem, voluptatibus quibusdam quod consequatur consectetur at? Cumque explicabo eius magnam culpa, quaerat quasi quas tempora possimus cupiditate consequuntur eaque exercitationem ducimus vero labore veniam debitis non sunt quae. Consectetur sint quam laboriosam quas et quos earum hic accusamus cum ut, error sapiente non reiciendis deleniti commodi similique consequatur perferendis maxime esse ullam repellendus quisquam nobis? Repellendus magnam est laudantium. Facere quis commodi nulla provident quo eos reprehenderit odio nihil, quos, at sint rerum fugit suscipit vel tempore laudantium assumenda molestiae soluta! Possimus voluptate quod ex blanditiis consectetur corrupti aut fuga iste explicabo? Minus.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, sed error! Mollitia quibusdam possimus dolor saepe praesentium quos, nemo dolores incidunt dolorum consequuntur obcaecati officia rem quod architecto totam earum exercitationem dolore sapiente quidem nobis fugiat necessitatibus maiores autem magnam? Rem debitis esse mollitia similique perspiciatis voluptatibus nemo architecto delectus, impedit maiores perferendis dolore officiis iure! Enim qui praesentium temporibus sapiente esse fugiat illum nam quam ut aperiam accusantium dignissimos provident laudantium laboriosam dolores quae id dicta vero, ea expedita asperiores, sed deleniti. Nesciunt maxime harum, voluptas enim, fugiat atque voluptates perspiciatis provident fugit hic doloremque. Quam accusamus, animi asperiores ipsa odio tenetur ullam itaque architecto consectetur maxime nemo, eius voluptate facere, facilis dolores. Soluta suscipit cum dolore necessitatibus omnis excepturi sapiente vitae vero maxime! Eveniet modi dolorem amet, minima rerum ducimus cupiditate ullam delectus dolor hic laboriosam illo exercitationem nobis quis dolorum suscipit, sit in. Illum eius repellat quia fuga, praesentium quo dolorum nulla delectus minima nobis voluptas. Repellat nostrum non reprehenderit possimus cum facere dolorum corrupti sed quis ipsa similique nulla unde delectus beatae eveniet nihil, incidunt voluptatibus numquam excepturi asperiores mollitia eos a doloremque! Iste, commodi sed qui veritatis excepturi rem eligendi! Ullam deleniti officiis perferendis dolor provident sed dolores voluptate dicta nam, exercitationem, voluptatibus quibusdam quod consequatur consectetur at? Cumque explicabo eius magnam culpa, quaerat quasi quas tempora possimus cupiditate consequuntur eaque exercitationem ducimus vero labore veniam debitis non sunt quae. Consectetur sint quam laboriosam quas et quos earum hic accusamus cum ut, error sapiente non reiciendis deleniti commodi similique consequatur perferendis maxime esse ullam repellendus quisquam nobis? Repellendus magnam est laudantium. Facere quis commodi nulla provident quo eos reprehenderit odio nihil, quos, at sint rerum fugit suscipit vel tempore laudantium assumenda molestiae soluta! Possimus voluptate quod ex blanditiis consectetur corrupti aut fuga iste explicabo? Minus.</p>
    </div>
  );

  return element;
}

function Header(){
 const element = (
    <div className="header">
      <div className="left">
        <div className="upper">
          <div className="title">Hello There</div>
          <div className="subtitle">Welcome to my simplest portfolio</div>
        </div>
        <div className="lower">
          <div className="quote">It aint much, bit its a honest work</div>
          <button className="learn-more">Learn more</button>
        </div>
      </div>
    </div>
  );
  return element;
}

function main(){
  const element = (
    <div className="main-container">
      <Navbar></Navbar>
      <Content></Content>
    </div>
  )

  ReactDOM.render(element, document.querySelector("body"));
}

main();
