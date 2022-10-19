import React from 'react';
import Main from './components/Main.jsx';

export default function Index() {
  return (
    <Main>
        <main class="container">
            <div class="row justify-content-around mt-5">
                <a href="/login" class="col-3 btn btn-primary"> Login</a>
                <a href="/signup" class="col-3 btn btn-primary"> Signup</a>
            </div>
        </main>
    </Main>

  )
}