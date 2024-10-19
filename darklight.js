toggle_switch = document.querySelector('#dark-mode');

toggle_switch.addEventListener 'input', ->
  label = @labels[0];
  body = document.body;
  
  body.dataset.darkMode = label.dataset.darkMode = @checked;
