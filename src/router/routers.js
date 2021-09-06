/*
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-23 10:33:37
 * @LastEditors: bx.m
 * @LastEditTime: 2021-08-30 17:51:44
 */

import Home from "@/views/Home";
import About from "@/views/About";
import Blog from "@/views/Blog";
import Project from "@/views/Project";
import Message from "@/views/Message";
import Detail from "@/views/Blog/Detail";


export default [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { name: "Blog", path: "/blog", component: Blog },
    { name: "CategoryBlog", path: "/blog/cate/:categoryId", component: Blog },
    { name: "DetailBlog", path: "/blog/:id", component: Detail },
    { path: "/project", component: Project },
    { path: "/message", component: Message },
]