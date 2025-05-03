/**
 *  自定义网站配置 
 */
const config = {
  title: "唐山师范学院吧",                 //write your website title
  subtitle: "吧务组官网", //write your website subtitle
  logo_icon: "comments outline",               //select your logo by semantic-ui icon (you can get more msg in:https://semantic-ui.com/elements/icon.html)
  hitokoto: true,                     //use hitokoto or not
  search:true,                        //enable search function
  search_engine:[                     //choose search engine which you use
    {
      name:"百 度",
      template:"https://www.baidu.com/s?wd=$s"
    },
  ],
  selling_ads: true,                  //Selling your domain or not.(turning on may be helpful for selling this domain by showing some ads.)
  sell_info:{
    domain:"",
    price:"意见反馈",                        //domain price
    mon_unit:"",              //monetary unit 
    contact:[                         //how to contact you
      {
        type:"envelope",               //contact type ("weixin","qq","telegram plane","envelope" or "phone")
        content:"bazhu@tstc.pp.ua"
      }
    ]                        
  },
  lists: [                            //Url list
    {
      name:"快速链接",
      icon:"graduation cap",
      list:[
        {
          url:"https://www.tstc.edu.cn",
          name:"唐山师范学院",
          desc:"唐山师范学院官方网站"
        },
        {
          url:"https://tieba.baidu.com/f?kw=%E5%94%90%E5%B1%B1%E5%B8%88%E8%8C%83%E5%AD%A6%E9%99%A2",
          name:"唐山师范学院吧",
          desc:"唐山师范学院百度贴吧"
        },
        {
          url:"https://www.wjx.top/vm/wFv03EP.aspx#",
          name:"邮箱申请",
          desc:"吧务组免费向吧友提供自定义用户名的邮箱"
        },
        {
          url:"https://qy.163.com/static/login/",
          name:"邮箱登录",
          desc:"自定义邮箱登录"
        },
      ]
    },
    {
      name:"吧务组人员公示",
      icon:"clipboard list",
      list:[
        {
          url:"https://tieba.baidu.com/home/main?id=tb.1.f732ecff.LjVmXUAOI9XIE0v0G6bM3Q&fr=userbar",
          name:"雨雪👀",
          desc:"吧主"
        },
        {
          url:"https://runoob.com/",
          name:"菜鸟教程",
          desc:"程序员集散地"
        },
        {
          url:"https://segmentfault.com/",
          name:"思否社区",
          desc:"程序员集散地"
        },
        {
          url:"https://jianshu.com/",
          name:"简书",
          desc:"程序员集散地"
        },
      ]
    }
  ]
}
const el = (tag, attrs, content) => `<${tag} ${attrs.join(" ")}>${content}</${tag}>`;

async function handleRequest(request) {
  const init = {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  }
  return new Response(renderHTML(renderIndex(),config.selling_ads? renderSeller() :null), init);
}
addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request))
})

/*通过分析链接 实时获取favicon
* @url 需要分析的Url地址
*/
function getFavicon(url) {
  // 确保网址以 http:// 或 https:// 开头
  if (!url.match(/https?:\/\//)) {
    url = "http://" + url; // 如果没有协议头，自动加上 http://
  }

  // 使用 icon.bqb.cool 提供的 API 获取 favicon
  const faviconUrl = `https://icon.bqb.cool?url=${encodeURIComponent(url)}`;

  return faviconUrl;
}

/** Render Functions
 *  渲染模块函数
 */

function renderIndex(){
  const footer = el('footer',[],el('div',['class="footer"'],'吧主信箱 ' + el('a',['class="ui label"','"','target="_blank"'],el('i',['class="mail icon"'],"") + 'bazhu@tstc.pp.ua') + el('a',['class="ui label"'],el('i',['class="balance scale icon"'],"") + '唐山师范学院吧吧务组')+ ' &copy; 版权所有 ' ));
  return renderHeader() + renderMain() + footer;
}

function renderHeader(){
  const item = (template,name) => el('a',['class="item"',`data-url="${template}"`],name);

  var nav = el('div',['class="ui large secondary inverted menu"'],el('div',['class="item"'],el('p',['id="hitokoto"'],'条条大路通罗马')))
  var title = el('h1',['class="ui inverted header"'],el('i',[`class="${config.logo_icon} icon"`],"") + el('div',['class="content"'],config.title + el('div',['class="sub header"'],config.subtitle)));
  var menu = el('div',['id="sengine"','class="ui bottom attached tabular inverted secondary menu"'],el('div',['class="header item"'],'&nbsp;') + config.search_engine.map((link,key) =>{
    if(key == 0){
      return el('a',['class="active item"',`data-url="${link.template}"`],link.name);
    }else{
      return item(link.template,link.name);
    }
  }).join(""))
  var input = el('div',['class="ui left corner labeled right icon fluid large input"'],el('div',['class="ui left corner label"'],el('img',['id="search-fav"','class="left floated avatar ui image"','src="https://www.baidu.com/favicon.ico"'],"")) + el('input',['id="searchinput"','type="search"','placeholder="搜索你想要知道的……"','autocomplete="off"'],"") + el('i',['class="inverted circular search link icon"'],""));
  return el('header',[],el('div',['id="head"','class="ui inverted vertical masthead center aligned segment"'],(config.hitokoto ? el('div',['id="nav"','class="ui container"'],nav) : "") + el('div',['id="title"','class="ui text container"'],title + (config.search ? input + menu :"") + `${config.selling_ads ? '<div><a id="menubtn" class="red ui icon inverted button"><i class="heart icon"></i> 意见建议反馈 </a ></div>' : ''}`)))
}

function renderMain() {
  var main = config.lists.map((item) => {
    const card = (url,name,desc)=> el('a',['class="card"',`href=${url}`,'target="_blank"'],el('div',['class="content"'],el('img',['class="left floated avatar ui image"',`src=${getFavicon(url)}`],"") + el('div',['class="header"'],name) + el('div',['class="meta"'],desc)));
    const divider = el('h4',['class="ui horizontal divider header"'],el('i',[`class="${item.icon} icon"`],"")+item.name);

    var content = el('div',['class="ui four stackable cards"'],item.list.map((link) =>{
      return card(link.url,link.name,link.desc);
    }).join(""));

    return el('div',['class="ui basic segment"'],divider + content);
  }).join("");
  
  return el('main',[],el('div',['class="ui container"'],main));
}

function renderSeller() {
  const item = (type,content) => el('div',['class="item"'],el('i',[`class="${type} icon"`],"") + el('div',['class="content"'],content));
  var title = el('h1',['class="ui yellow dividing header"'],el('i',['class="gem outline icon"'],"") + el('div',['class="content"'],config.sell_info.domain + ' 吧主信箱'));
  var action = el('div',['class="actions"'],el('div',['class="ui basic cancel inverted button"'],el('i',['class="reply icon"'],"") + '返回'));

  var contact = config.sell_info.contact.map((list) => {
    return item(list.type,list.content);
  }).join("");
  var column = el('div',['class="column"'],el('h3',['class="ui center aligned icon inverted header"'],el('i',['class="circular envelope open outline grey inverted icon"'],"") + '请联系吧主信箱') + el('div',['class="ui relaxed celled large list"'],contact));
  var price = el('div',['class="column"'],el('div',['class="ui large yellow statistic"'],el('div',['class="value"'],el('i',[`class="${config.sell_info.mon_unit} icon"`],"") + config.sell_info.price)));
  var content = el('div',['class="content"'],el('div',['class="ui basic segment"'],el('div',['class="ui two column stackable center aligned grid"'],el('div',['class="ui inverted vertical divider"'],'') + el('div',['class="middle aligned row"'],price + column))));

  return el('div',['id="seller"','class="ui basic modal"'],title + content + action);
}

function renderHTML(index,seller) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>${config.title} - ${config.subtitle}</title>
      <link href="https://cdn.jsdelivr.net/npm/semantic-ui-css@2.4.1/semantic.min.css" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/gh/sleepwood/cf-worker-dir@0.1.1/style.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/semantic-ui-css@2.4.1/semantic.min.js"></script>
  </head>
  <body>
    ${index}
    ${config.selling_ads ? seller : ''}
    <script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script>
    <script>
      $('#sengine a').on('click', function (e) {
        $('#sengine a.active').toggleClass('active');
        $(e.target).toggleClass('active');
        $('#search-fav').attr('src',$(e.target).data('url').match(`+/https{0,1}:\/\/\S+\//+`)[0] + '/favicon.ico') ;
      });
      $('.search').on('click', function (e) {
          var url = $('#sengine a.active').data('url');
          url = url.replace(`+/\$s/+`,$('#searchinput').val());
          window.open(url);
      });
      /* 鼠标聚焦时，回车事件 */
      $("#searchinput").bind("keypress", function(){
          if (event.keyCode == 13){
          // 触发需要调用的方法
          $(".search").click();
          }
      });
      $('#menubtn').on('click', function (e) {
          $('#seller').modal('show');
      });
    </script>
  </body>

  </html>`
}
