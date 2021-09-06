/*
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-23 18:12:20
 * @LastEditors: bx.m
 * @LastEditTime: 2021-08-23 20:27:03
 */

import styles from "@/utils/message.module.less";
import Icon from "@/components/Icon";
import getComponentRootDom from "@/utils/getComponentRootDom";
// console.log(styles);

/**
 * 
 * @param {*} content 
 * @param {*} type 
 * @param {*} duration 
 * @param {*} container 
 */
export default function showMessage(options) {

    // 参数 message, type = "success", duration, container
    let message = options.message || "";
    let type = options.type || "info";
    let duration = options.duration || 2000;
    let container = options.container || document.body;
    let callback = options.callback || function () { console.log("Done !!!"); };

    // 获取Icon组件的Dom元素
    const iconDom = getComponentRootDom(Icon, { type: `${type}` });

    const div = document.createElement("div");
    // 将Icon组件的Dom元素 添加到div中
    // div.appendChild(iconDom);
    div.innerHTML = `<span class="${styles.icon}"> ${iconDom.outerHTML}</span><p>${message}</p>`;
    // 添加className
    div.className = styles.message + " " + styles[`message-${type}`];


    if (getComputedStyle(container).position === "static") {
        container.style.position = "relative";
    }
    container.appendChild(div);

    div.offsetHeight;
    div.style.transform = `translate(-50%, -50%)`;
    div.style.opacity = 1;


    setTimeout(() => {
        div.style.transform = `translate(-50%, -50%) translateY(-25px)`;
        div.style.opacity = 0;
        callback && callback();
    }, duration)
}





// 使用

// import showMessage from './utils/showMessage';
// window.s = showMessage;
// s({
//   message: "评价成功",
//   type: "success",
// });