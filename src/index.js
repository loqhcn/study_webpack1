
import axios from 'axios'

function component() {
    var element = document.createElement('button');

    element.onclick = function () {
        console.log('onclick')
        axios.post('http://user.lqh.cn/api/test/users').then(res => {
            console.log(res);
        })
    }
    element.innerHTML = '按钮'

    return element;
}

document.body.appendChild(component());