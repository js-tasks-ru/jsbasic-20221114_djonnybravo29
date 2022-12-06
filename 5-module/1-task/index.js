function hideSelf() {
  const hideSelfButton = document.querySelector('.hide-self-button');
  console.log(hideSelfButton);
  hideSelfButton.addEventListener('click', () => {
    hideSelfButton.hidden = true;
  }
  )
}