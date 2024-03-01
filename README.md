##Link: https://main--vermillion-paletas-573d48.netlify.app/

<!-- 
- create the app : npm i vite@latest

- intall the tailwind: 
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

create the postcss.config.js file and add this to it:
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

add this to your index.css file
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

add this to your tailwind.config.js file
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

- creating a store:
npm install @reduxjs/toolkit react-redux
create a store.jsx with createStore
create cartSlice with createSlice
Provide the cart to whole in app.jsx
go to restaurantmenucard and add a button to additems to cart use useDispatch hook to call additems reducer funtion
go to header use useSelector hook subscribe to the store and displaye the card added to the cart
create a cart to display the cart items

 -->
