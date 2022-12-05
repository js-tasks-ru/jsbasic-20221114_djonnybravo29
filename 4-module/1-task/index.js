function makeFriendsList(friends) {
  const ul = document.createElement('ul');
  for (let element of friends) {
      const li = document.createElement('li');
      li.textContent = `${element.firstName} ${element.lastName}`;
      ul.append(li);
  }
  return ul
}
