let h1 = document.querySelector('h1');

h1.addEventListener('click', (event) =>
{
  event.preventDefault(); // If not event is needed; same is leaving "event" field as blank parenthesis
  // Do other things
  h1.style.color = 'red';
});
