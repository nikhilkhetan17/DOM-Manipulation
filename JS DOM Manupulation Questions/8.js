let google = document.querySelectorAll("#SIvCob a");

for (let i = 0; i < google.length; i++) {
  if (i % 2 == 0) {
    google[i].remove();
  }
}
