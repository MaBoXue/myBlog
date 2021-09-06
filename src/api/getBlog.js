/*
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-23 23:13:05
 * @LastEditors: bx.m
 * @LastEditTime: 2021-08-30 18:19:34
 */

import ins from "@/api/request.js";




// 获取所有博客分类 没有参数
async function getBlogType() {
    const req = await ins.get("/api/blogtype");
    return req;
}



// 获取 分页博客
// 三个参数
async function getBlog(page = 1, limit = 10, categoryid = -1) {
    const req = await ins.get("/api/blog", {
        params: {
            page,
            limit,
            categoryid,
        }
    });
    return req;
}


// 获取一篇博客
async function getOneBlog(id) {
    const req = await ins.get(`/api/blog/${id}`);
    return req;
}


// 提交评论
async function postComment(commentInfo) {
    const req = await ins.post('/api/comment', commentInfo);
    return req;
}


// 获取评论
async function getComment(blogid, page = 1, limit = 10,) {
    const req = await ins.get("/api/comment", {
        params: {
            blogid,
            page,
            limit
        }
    });
    return req;
}

export { getBlogType, getBlog, getOneBlog, postComment, getComment };





