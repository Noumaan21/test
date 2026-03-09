export default function decorate(block) {

  const textElement = block.querySelector('p');

  if (textElement) {

    textElement.addEventListener('click', () => {

      alert('Button clicked!');

      // Example functionality
      // You can replace with navigation
      // window.location.href = "https://example.com";

    });

  }

}