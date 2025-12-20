
(function() {
  var lastModified = null;

  function check() {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', 'index.html?t=' + new Date().getTime(), true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        var newLastModified = xhr.getResponseHeader('Last-Modified');
        if (lastModified && newLastModified !== lastModified) {
          window.location.reload();
        }
        lastModified = newLastModified;
      }
      setTimeout(check, 3000); // هر ۳ ثانیه یکبار بررسی می‌کند
    };
    xhr.send();
  }

  window.onload = check;
})();
