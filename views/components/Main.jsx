import React from 'react';

export default function Main(props) {
     return (
    <>
    <html lang="en">
  <head>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Binary Upload Boom</title>
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/imgs/favicon-32x32.png"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
      crossOrigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
      crosOrigin="anonymous"
    />
    <link rel="stylesheet" href="/css/style.css" />
  </head>
  <body>
    <header class="container">
      <div class="text-center">
        <h1 class=""><a href="/profile">Binary Upload Boom</a></h1>
        <span>The #100Devs Social Network</span>
      </div>
      </header>
    {props.children}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script> 
    </body>
    </html>
    </>
)
}