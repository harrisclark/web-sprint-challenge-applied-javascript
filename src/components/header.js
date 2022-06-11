const Header = (title, date, temp) => {
  const header = document.createElement('div');
  const dateEl = document.createElement('span');
  const heading = document.createElement('h1');
  const tempEl = document.createElement('span');

  header.classList.add('header');
  dateEl.classList.add('date');
  tempEl.classList.add('temp');

  dateEl.textContent = date;
  heading.textContent = title;
  tempEl.textContent = temp;

  header.appendChild(dateEl);
  header.appendChild(heading);
  header.appendChild(tempEl);

  return header;
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  document.querySelector(selector).appendChild(Header('The Newsy Times', 'June 10, 2022', '72\xB0F'));
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
