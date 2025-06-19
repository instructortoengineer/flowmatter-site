
document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('search-input');
  const cards = document.querySelectorAll('.card');

  input.addEventListener('input', function () {
    const query = input.value.toLowerCase();

    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      if (text.includes(query)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
