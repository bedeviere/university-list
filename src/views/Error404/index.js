import React from "react";
import {Link} from "react-router-dom";

export default function Error404() {
  return (
    <main>
      <section class="hero is-medium is-danger is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              404
            </h1>
            <h2 class="subtitle">
              This is not the page you are looking for. <Link to="/">Move along</Link>.
            </h2>
          </div>
        </div>
      </section>
    </main>
  )
}