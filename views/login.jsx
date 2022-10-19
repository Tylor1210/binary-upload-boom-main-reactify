import React from 'react';
import Main from './components/Main.jsx';

export default function Login({ messages }) {
  return (
    <Main>
        <main className="container">
            <div className="row justify-content-around mt-5">
            <main className="container">
  <div className="row justify-content-center">
    <section className="col-6 mt-5">
      {/* <% if (locals.messages.errors) { %> <% messages.errors.forEach( el => { %>
      <div class="alert alert-danger"><%= el.msg %></div>
      <% }) %> <% } %> <% if (locals.messages.info) { %> <%
      messages.info.forEach( el => { %>
      <div class="alert alert-info"><%= el.msg %></div>
      <% }) %> <% } %> */}
      {messages.errors && messages.errors.map((el, i )=>
            <div key={i} className="alert alert-danger">{el.msg}</div>
      )}
      {messages.info 
        ? messages.info.map((el, i )=>
            <div key={i} className="alert alert-danger">{el.msg}</div>
            )
        : null
    }
      <form action="/login" method="POST">
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            name="password"
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </section>
  </div>
</main>
            </div>
        </main>
    </Main>

  )
} 