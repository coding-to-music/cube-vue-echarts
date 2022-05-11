# cube-vue-echarts

# 🚀 Javascript full-stack 🚀

https://github.com/coding-to-music/cube-vue-echarts

https://cube-vue-echarts.vercel.app

By ASHUTOSH KUMAR SINGH https://github.com/lelouchB

https://vue-cube-echarts.vercel.app/

https://github.com/lelouchB/vue-cube-echarts

## MOMA Dataset is on GitHub

https://github.com/MuseumofModernArt/collection

and

https://github.com/coding-to-music/next-with-cube-charts

## Example setting up Cube

https://cube.dev/blog/building-nextjs-dashboard-with-dynamic-charts-and-ssr

Create a new .env.local file in the root directory of your project. Add the following environment variables.

```
# .env
NEXT_PUBLIC_CUBEJS_API_URL='<Your-Cube-API-Endpoint>'
NEXT_PUBLIC_CUBEJS_TOKEN='Your-Cube-Token'
```

You can find the Cube API endpoint from the Cube dashboard. Navigate to Settings from the Cube dashboard. There is a field called Cube.js API in the overview tab. Copy the url from there and add it to your .env

We will also need to generate a Cube token to connect to Cube Cloud from our Next.js application. Please Select the Env vars tab in your Settings and copy the CUBEJS_API_SECRET value.

With this secret, we can generate a JWT token. You can run the following node script to generate a JWT token.

```
// file get-jwt-token.js
// npm install jsonwebtoken

// run via
// node get-jwt-token.js

const jwt = require("jsonwebtoken");
// const CUBE_API_SECRET = "<Secret>";
const CUBE_API_SECRET =

const cubejsToken = jwt.sign({}, CUBE_API_SECRET, { expiresIn: "30d" });

console.log(cubejsToken);
```

## Environment Values

```java
VUE_APP_CUBE_API_KEY=""

VUE_APP_CUBE_API_URL=""

# To Add, use:
# vercel env add
```

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/cube-vue-echarts.git
git push -u origin main
vercel --prod --confirm

# vercel env add
```

# Vue Cube Echarts

### Dashboard built with Cube.js and Echarts using MoMA Dataset

![image](https://user-images.githubusercontent.com/45850882/150286488-860e45c8-0a7a-4079-8a7b-97735e2c80cf.png)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
