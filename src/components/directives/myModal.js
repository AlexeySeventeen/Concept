export default {
  mounted(el, binding, vNode) {
    document.addEventListener('click', (element) => {
      if (!element.target.classList.value.split(' ').includes(binding.value)) {
        vNode.props.onName();
      }
    });
  },
};
