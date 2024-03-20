import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/english/Home.vue";
import Skills from "../views/english/Skills.vue";
import Projects from "../views/english/Projects.vue";
import Education from "../views/english/Education.vue";
import Contact from "../views/english/Contact.vue";
import Blog from "../views/english/Blog.vue";
/* UP: English Pages ------------ DOWN: Chinese Pages */
import HomeZh from "../views/chinese/HomeZh.vue";
import SkillsZh from "../views/chinese/SkillsZh.vue";
import ProjectsZh from "../views/chinese/ProjectsZh.vue";
import EducationZh from "../views/chinese/EducationZh.vue";
import ContactZh from "../views/chinese/ContactZh.vue";
import BlogZh from "../views/chinese/BlogZh.vue";

/* Start Blog Pages */
import JavaScriptBlog from "@/views/english/blog-views/JavaScriptBlog.vue";
import VueJsBlog from "@/views/english/blog-views/VueJsBlog.vue";
import NodeJsBlog from "@/views/english/blog-views/NodeJsBlog.vue";
import CsharpBlog from "@/views/english/blog-views/CsharpBlog.vue";
import SQLBlog from "@/views/english/blog-views/SQLBlog.vue";
import MathBlog from "@/views/english/blog-views/MathBlog.vue";

import PreguntatePage from "../views/preguntate-page.vue";
import Game from "../views/Preguntate.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/education",
    name: "Education",
    component: Education,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  /* Start Chinese Language Pages Route */
  {
    path: "/zh",
    name: "HomeZh",
    component: HomeZh,
  },
  {
    path: "/skills-zh",
    name: "SkillsZh",
    component: SkillsZh,
  },
  {
    path: "/projects-zh",
    name: "ProjectsZh",
    component: ProjectsZh,
  },
  {
    path: "/education-zh",
    name: "EducationZh",
    component: EducationZh,
  },
  {
    path: "/contact-zh",
    name: "ContactZh",
    component: ContactZh,
  },
  {
    path: "/blog-zh",
    name: "BlogZh",
    component: BlogZh,
  },
  /* Finish Chinese Language Pages Route */
  /* Start Blog Pages */
  {
    path: "/blog/javascript",
    name: "JavaScriptBlog",
    component: JavaScriptBlog,
  },
  {
    path: "/blog/vue",
    name: "VueJsBlog",
    component: VueJsBlog,
  },
  {
    path: "/blog/node",
    name: "NodeJsBlog",
    component: NodeJsBlog,
  },
  {
    path: "/blog/csharp",
    name: "CsharpBlog",
    component: CsharpBlog,
  },
  {
    path: "/blog/sql",
    name: "SQLBlog",
    component: SQLBlog,
  },
  {
    path: "/blog/math",
    name: "MathBlog",
    component: MathBlog,
  },
  /* Finish Blog Pages */
  {
    path: "/preguntate-page",
    name: "Preguntate Page",
    component: PreguntatePage,
  },
  {
    path: "/preguntate",
    name: "Preguntate Game",
    component: Game,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
