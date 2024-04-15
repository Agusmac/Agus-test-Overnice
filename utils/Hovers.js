
// I was not sure if I should use the function (at the bottom) or simply
// a useState which changed to the currently hovered color
// and add a conditional in the className to each (like 50) rect 
// of the svgs to change opacity (and handle the text too)
// you can make it with css too (I finally went with this option)


export const setupHoverListeners = () => {
  const style = document.createElement('style');
  style.textContent = `
    body:has(.blue:hover) .violet,
    body:has(.blue:hover) .orange,
    body:has(.blue:hover) .green {
      opacity: 0.3 !important;
    }
    body:has(.violet:hover) .blue,
    body:has(.violet:hover) .orange,
    body:has(.violet:hover) .green {
      opacity: 0.3 !important;
    }
    body:has(.orange:hover) .violet,
    body:has(.orange:hover) .blue,
    body:has(.orange:hover) .green {
      opacity: 0.3 !important;
    }
    body:has(.green:hover) .violet,
    body:has(.green:hover) .orange,
    body:has(.green:hover) .blue {
      opacity: 0.3 !important;
    }
    body:has(.green:hover) .hover-text-green{
      opacity: 1 !important;
    }
    body:has(.violet:hover) .hover-text-violet{
      opacity: 1 !important;
    }
    body:has(.orange:hover) .hover-text-orange{
      opacity: 1 !important;
    }
    body:has(.blue:hover) .hover-text-blue{
      opacity: 1 !important;
    }
    body:has(.blue:hover) .blue{
      opacity: 1 !important;
    }
    body:has(.blue:hover) .grid-b-text,
    body:has(.violet:hover) .grid-b-text,
    body:has(.orange:hover) .grid-b-text,
    body:has(.green:hover) .grid-b-text {
      opacity: 0 !important;
    }
  `;
  document.head.appendChild(style);
};


// Im leaving this here so you can see the different ways I explored,
// It works but changed to css solution before handling the text

// export const setupHoverListeners = () => {
//   const blue = document.querySelectorAll('.blue');
//   const orange = document.querySelectorAll('.orange');
//   const green = document.querySelectorAll('.green');
//   const violet = document.querySelectorAll('.violet');
//   const colors = [blue, orange, green, violet];

//   const handleHover = (hoveredClass, leaves) => {
//     colors.forEach((color) => {
//       color.forEach((element) => {
//         if (leaves) element.classList.remove('opacity-0');
//         else if (element.classList[0] !== hoveredClass) {
//           element.classList.add('opacity-0');
//         }
//       });
//     });
//   };

//   const addListeners = (element, hoveredClass) => {
//     element.addEventListener('mouseover', () => handleHover(hoveredClass));
//     element.addEventListener('mouseleave', () => handleHover(null, true));
//   };

//   colors.forEach((color) => {
//     color.forEach((element) => {
//       addListeners(element, element.classList[0]);
//     });
//   });
// };