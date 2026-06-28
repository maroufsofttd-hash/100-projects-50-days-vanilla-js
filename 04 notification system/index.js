Notification.requestPermission().then(function (permisssiom) {
  if (permission == "granted") {
    console.log("permission accordee!");
  }
  let notification = new Notification("notiification de Marouf", {
    body: "cliquer ici ,vous avez recu un message!",
    icon: "image/img.jpg",
  });

  notification.onclick = function () {
    window.open("notification.html", "_blank");
  };
});
