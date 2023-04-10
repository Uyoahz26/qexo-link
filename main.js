
// 打乱数组
function shuffleAnArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function loadQexoFriends({ 
  id, 
  url, 
  screenSite = "https://s0.wp.com/mshots/v1/", 
  randomFalg = false, 
  column = 3, 
  rowHeight = 150,
  nameColor = "#FE9602",
  descColor = "white"
}) {
  const targetDom = document.getElementById(id);
  const styleDom = document.createElement("style");
  const friendDom = document.createElement("ul");
  targetDom.append(styleDom, friendDom);

  styleDom.innerHTML = `
  .qexo-links-bgimg {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    filter: blur(14px);
    transition: filter .3s cubic-bezier(0.47, 0, 0.75, 0.72);
  }

  .qexo_inner,
  .qexo_loader {
    border-radius: 50%;
    position: absolute;
  }

  .qexo_loading {
    min-height: 200px;
    padding-top: 35px;
  }

  .qexo_part {
    min-height: 100px;
  }

  .qexo_loader {
    background-color: #90939920;
    width: 64px;
    height: 64px;
    perspective: 800px;
  }

  .qexo_inner {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }

  .qexo_inner.one {
    left: 0;
    top: 0;
    animation: rotate-one 1s linear infinite;
    border-bottom: 3px solid #888;
    position: absolute;
  }

  .qexo_inner.two {
    right: 0;
    top: 0;
    animation: rotate-two 1s linear infinite;
    border-right: 3px solid #888;
    position: absolute;
  }

  .qexo_inner.three {
    right: 0;
    bottom: 0;
    animation: rotate-three 1s linear infinite;
    border-top: 3px solid #888;
    position: absolute;
  }

  @keyframes rotate-one {
    0% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(0);
    }

    100% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
    }
  }

  @keyframes rotate-two {
    0% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(0);
    }

    100% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
    }
  }

  @keyframes rotate-three {
    0% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(0);
    }

    100% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
    }
  }

.qexo-links ul {
    margin: 0;
    list-style: none;
    padding: 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(${column}, auto);
    grid-column-gap: 15px;
    grid-row-gap: 10px;
}

.qexo-links ul li {
    height: ${rowHeight}px;
    position: relative;
    overflow: hidden;
    -webkit-transition: all .2s;
    transition: all .2s;
    border-radius: 10px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0 0 12px 0 #00000054;
    transform: translate3d(0, 0, 0);
}

.qexo-links ul li a {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 100%;
    background-color: #16161652;
    box-shadow: inset -5px -1px 20px 0px #00000017;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    transition: opacity .3s cubic-bezier(0.47, 0, 0.75, 0.72);
}

.qexo-links ul li:hover .qexo-links-bgimg {
    filter: unset;
}

.qexo-links ul li:hover a {
    opacity: 0;
}

.qexo-links ul li img {
    width: 3.5em;
    height: 3.5em;
    padding: 2px;
    margin: 0px 0px;
    box-shadow: inset 0 0 10px #000;
    opacity: 1;
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transition: all ease .5s;
    -webkit-transition: all ease .5s;
    -moz-transition: all ease .5s;
    -o-transition: all ease .5s;
    margin: 6px 0px;
    width: 3.5rem;
    height: 3.5rem;
    padding: 3px;
    border-radius: 26%;
}

.qexo-links ul li:hover img {
    transform: rotate3d(1, 1, 1, 360deg);
    -webkit-transform: rotate3d(1, 1, 1, 360deg);
    -moz-transform: rotate3d(1, 1, 1, 360deg);
    -o-transform: rotate3d(1, 1, 1, 360deg);
    -ms-transform: rotate3d(1, 1, 1, 360deg);
}
.qexo-links-info{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  width: 15em;
  padding-left: 1.4em;
}

  .qexo-sitename {
    color: ${nameColor};
    font-weight: 400;
    letter-spacing: 1.2px;
    font-size: larger;
    text-shadow: 1px 1px 1px #01010187;
    margin-bottom: 5px;
  }

.qexo-linkdes {
  color: ${descColor};
  font-size: 13px;
  padding: 1px;
  max-height: 3.5rem;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-transition: all .3s;
  transition: all .3s;
  /* max-height: 24px; */
  line-height: inherit;
}

.link-title {
  font-weight: 400;
  color: #6d6d6d;
  padding-left: 0;
  border-left: 0;
  margin: 50px 0 20px
}

.link-title span.fake-title {
  padding-left: 10px;
  border-left: 3px solid orange
}


.qexo-links ul li:hover {
  transform: scale(1.02);
  box-shadow: 0px 0px 20px 0 #6a6a6a54;
}

span.linkss-title {
  font-size: 25px;
  text-align: center;
  display: block;
  margin: 50px 0 30px;
  letter-spacing: 5px
}
@media(max-width:630px) {
  .qexo-links ul li {
    width: 100% !important;
    height: 14vh;
    min-height: 6.5em;
    box-shadow: 0px 0px 12px 0 #00000054, 2px 1px 9px 1px #95959573
  }

  .qexo-links ul li a {
      padding: 0px 15px;
      height: 100%;
      box-shadow: none;
      transition: all .15s linear;
      background-color: #0000004d;
  }

  .qexo-links ul li a:hover {
      backdrop-filter: blur(0px);
      background-color: #dbdbdb2e;
  }

  .qexo-links ul li .qexo-linkdes {
      max-height: 18px;
      font-size: 12px;
  }

  .qexo-links ul {
    grid-template-columns: repeat(1, auto);
  }
}

`

  url += "/pub/friends/";
  let loadStyle = `<div class="qexo_loading">
                    <div class="qexo_part">
                      <div style="display: flex; justify-content: center">
                        <div class="qexo_loader">
                          <div class="qexo_inner one"></div>
                          <div class="qexo_inner two"></div>
                          <div class="qexo_inner three"></div>
                        </div>
                      </div>
                    </div>
                    <p style="text-align: center; display: block">友链加载中...</p>
                  </div>`;
  targetDom.className = "qexo-links";
  targetDom.innerHTML += loadStyle;
  let ajax;
  try {
    // Firefox, Opera 8.0+, Safari
    ajax = new XMLHttpRequest();
  } catch (e) {
    // Internet Explorer
    try {
      ajax = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {
        alert("糟糕,你的浏览器不能上传文件，所以友链加载不出来了~");
        return false;
      }
    }
  }
  ajax.open("get", url, true);
  ajax.setRequestHeader("Content-Type", "text/plain");
  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4) {
      if (ajax.status == 200) {
        let res = JSON.parse(ajax.response);
        if (res && res.status) {
          targetDom.innerHTML = "";
          targetDom.append(styleDom, friendDom);
          let friends = randomFalg ? shuffleAnArray(res["data"]) : res["data"];
          friendDom.innerHTML = "";
          for (let i = 0; i < friends.length; i++) {
            friendDom.innerHTML += `
                    <li>
                      <div class="qexo-links-bgimg" style="background-image: url('${screenSite}${friends[i]["url"]}?w=600&h=300');"></div>
                      <a class="link-item-inner" href="${friends[i]["url"]}" title="${friends[i]["description"]}" target="_blank" rel="friend">
                        <div style="width: 100px">
                          <img class="avatarImg" onerror="this.src = 'https://dn-qiniu-avatar.qbox.me/avatar/'" data-src="${friends[i]["image"]}" src="${friends[i]["image"]}">
                        </div>
                        <div class="qexo-links-info">
                          <span class="qexo-sitename">
                            ${friends[i]["name"]}
                          </span>
                          <div class="qexo-linkdes">
                            ${friends[i]["description"]}
                          </div>
                        </div>
                        </a>
                      </li>
                    `;
          }
        } else {
          console.log(res["data"]["msg"]);
        }
      } else {
        targetDom.innerHTML = "友链获取失败，网络错误！"
        console.log("友链获取失败! 网络错误");
      }
    }
  };
  ajax.send(null);
}
