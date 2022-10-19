import React from 'react';
import Main from './components/Main.jsx';

export default function Login(props) {
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
      {props.messages.errors && props.messages.errors.map((el, i )=>
            <div key={i} className="alert alert-danger">{el.msg}</div>
      )}
      {props.messages.info 
        ? props.messages.info.map((el, i )=>
            <div key={i} className="alert alert-danger">{el.msg}</div>
            )
        : null
    }
      <form action="/signup" method="POST">
                    <div class="mb-3">
                        <label for="userName" class="form-label">User Name</label>
                        <input type="text" class="form-control" id="userName" name="userName" />
                      </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Email address</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" />
                      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                      <label for="password" class="form-label">Password</label>
                      <input type="password" class="form-control" id="password" name="password"/>
                    </div>
                    <div class="mb-3">
                        <label for="confirmPassword" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="confirmPassword" name="confirmPassword" />
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