<div align="center">
  <a href="https://asos-next-store.netlify.app" target="_blank">
    <img src="https://user-images.githubusercontent.com/86098273/198705692-a6b402c8-c48f-4871-bc55-a153e467ba03.png" alt="Logo" width="300">
  </a>
  <br />
  <h3>ASOS</h3>
  <br />
  [<a href="https://asos-next-store.netlify.app" target="_blank">See Apps</a>]
</div>

<div style="margin-top: 40px;">
  <h3>ASOS Store</h3>
  <span style="font-size: 18px">Discover Fashion Online</span>
  <p style="margin-top: 18px;">Discover the latest fashion trends with ASOS. Shop the new collection of clothing, footwear, accessories, beauty products and more. Order today from ASOS.</p>
  <b>This project is used for case studies not for commercialization.</b>
  <p>Where do I get the ASOS API? I got the API from the following link: <a href="https://rapidapi.com/apidojo/api/asos2">Asos API</a></p>
</div>
<br />
<br />


#### FOLDER STRUCTURE IN THIS PROJECT

Contains information how this project conventions, pattern, and flows.

Generally this project is divided to 2 layers: `pages`, `src`

```
+ pages
+ src
  + assets (Contains assets like icons, styles global & images)
  + components (Contains low-level reusable component)
    + atoms (Smallest component)
    + molecules (A combination of several atomic components)
  + constants (Defining data static)
  + data
    + entities
    + mappers (Converting received data from external to be our class data type)
  + screens (Contains UI of the page)
  + services (Contains interceptors & Action API)
  + stores (Store Redux)
  + types (Contains type or interface for ui requirement)
    + components
    + pages
    + store
  + utils (Small function reusable)
```



## Build with

- [TypeScript](https://www.typescriptlang.org/)
- [NextJs v13](https://nextjs.org/)
- [Redux](https://react-redux.js.org/)
- [Redux-Thunk](https://github.com/reduxjs/redux-thunk)
- [Axios](https://axios-http.com/docs/intro)
- [SASS](https://sass-lang.com/)


## Project setup

1. Clone this repository with SSH
```
  $ git clone git@github.com:GannaHup/asos-store.git
```

2. Before your run this project: install all packages needed
```
  $ yarn ci
```
3. Run this project with command:
```
  $ yarn dev
```


### Compiles and minifies for production

```
yarn run build

or

yarn build
```
