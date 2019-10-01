document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.key').forEach(button => {
    button.onclick = () => {
      const text = button.value;
      document.querySelector('#result').value += text;
    };
  });

  document.querySelector('#clear').onclick = () => {
    document.querySelector('#result').value = "";
  };

  document.querySelector('#compute').onclick = () => {
    const result = eval(document.querySelector('#result').value);
    document.querySelector('#result').value = result;
  };
});
