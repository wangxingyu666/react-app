import { useState } from "react";
import "./App.css";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="profile-card">
      <img src="/avatar.svg" alt="个人头像" className="avatar" />
      <h1>张三</h1>
      <h2>全栈工程师</h2>

      <section className="bio">
        <p>3年全栈开发经验，精通React和Node.js</p>
        <p>专注于构建高效可靠的Web应用</p>
      </section>

      <div className="skills">
        <h3>技术栈</h3>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>React/Vue</li>
          <li>Node.js/Express</li>
          <li>Docker/K8s</li>
        </ul>
      </div>

      <SocialLinks />
    </div>
  );
}

export default App;
