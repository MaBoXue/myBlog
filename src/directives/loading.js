/*
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-25 22:24:32
 * @LastEditors: bx.m
 * @LastEditTime: 2021-08-25 22:58:06
 */
import styles from "@/directives/loading.module.less";
import Url from "@/assets/loading.svg";

function getLoadingImage(el) {
    return el.querySelector("img[data-role=loading]");
}
function createLoadingImage() {
    const img = document.createElement("img");
    img.dataset.role = "loading";
    img.className = styles.loading;
    img.src = Url;
    return img;
}
export default function (el, binding) {
    const curImg = getLoadingImage(el);
    if (binding.value) {
        // 为true
        if (!curImg) {
            const img = createLoadingImage();
            el.appendChild(img);
        }
    } else {
        // 为false
        if (curImg) {
            curImg.remove();
        }
    }
}