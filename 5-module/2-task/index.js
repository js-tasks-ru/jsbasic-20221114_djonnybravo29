function toggleText() {
  const toggleTextButton = document.querySelector('.toggle-text-button');
  const idText = document.getElementById('text');
  const showOrHide = () => {
    idText.hidden = !idText.hidden;
  }
  toggleTextButton.addEventListener('click', showOrHide)
}
