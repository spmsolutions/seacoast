"use strict";(self.webpackChunk_seacoast_website=self.webpackChunk_seacoast_website||[]).push([[726],{45313:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=s(74848),n=s(28453);const o={title:"Working with custom queries",description:"Explains the process of registering a new service class, adding a custom query and using it in a block.",slug:"working-with-custom-queries",authors:"obradovic",date:new Date("2023-08-01T00:00:00.000Z"),tags:["eightshift","boilerplate","service","class","query"],hide_table_of_contents:!1},r=void 0,i={permalink:"/seacoast/blog/working-with-custom-queries",source:"@site/blog/2023-08-03-adding-custom-query.md",title:"Working with custom queries",description:"Explains the process of registering a new service class, adding a custom query and using it in a block.",date:"2023-08-01T00:00:00.000Z",tags:[{inline:!0,label:"eightshift",permalink:"/seacoast/blog/tags/eightshift"},{inline:!0,label:"boilerplate",permalink:"/seacoast/blog/tags/boilerplate"},{inline:!0,label:"service",permalink:"/seacoast/blog/tags/service"},{inline:!0,label:"class",permalink:"/seacoast/blog/tags/class"},{inline:!0,label:"query",permalink:"/seacoast/blog/tags/query"}],readingTime:3.995,hasTruncateMarker:!0,authors:[{name:"Igor Obradovi\u0107",title:"WordPress Engineer",url:"https://github.com/iobrado",imageURL:"https://avatars.githubusercontent.com/u/23059501?v=4",key:"obradovic",page:null}],frontMatter:{title:"Working with custom queries",description:"Explains the process of registering a new service class, adding a custom query and using it in a block.",slug:"working-with-custom-queries",authors:"obradovic",date:"2023-08-01T00:00:00.000Z",tags:["eightshift","boilerplate","service","class","query"],hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"How to use the Wrapper as a standalone component",permalink:"/seacoast/blog/wrapper-as-a-standalone-component"},nextItem:{title:"Using multiple same components",permalink:"/seacoast/blog/multiple-same-components"}},l={authorsImageUrls:[void 0]},c=[{value:"Usage in built-in blocks",id:"usage-in-built-in-blocks",level:2},{value:"What are Service classes?",id:"what-are-service-classes",level:2},{value:"Creating a new service class",id:"creating-a-new-service-class",level:2},{value:"Using the new filter",id:"using-the-new-filter",level:2},{value:"Prepare only the data you need",id:"prepare-only-the-data-you-need",level:2},{value:"Best practices for queries",id:"best-practices-for-queries",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Eightshift DevKit offers some blocks with query logic out of the box, but what is the best approach when you need to add a custom query to a block you\u2019ve been working on?"}),"\n",(0,a.jsx)(t.h2,{id:"usage-in-built-in-blocks",children:"Usage in built-in blocks"}),"\n",(0,a.jsxs)(t.p,{children:["One of the Eightshift blocks that already uses ",(0,a.jsx)(t.code,{children:"WP_Query"})," is the ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:"Featured Content"})})," block. In that block, you can see the query logic is inside the block. However, there is a much better way to do it. The reason it was done like this was to simplify this block and to have an already functioning block available with one WP-CLI command."]}),"\n",(0,a.jsx)(t.p,{children:"A much better approach would be to separate the query logic from the block. Other than following the MVC architecture more closely, this will also make the query logic more reusable. To do this, we\u2019re gonna create a service class."}),"\n",(0,a.jsx)(t.h2,{id:"what-are-service-classes",children:"What are Service classes?"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:'Put simply, a Service is any PHP object that performs some sort of "global" task. - Symfony docs'})}),"\n",(0,a.jsxs)(t.p,{children:["If you take a look at the ",(0,a.jsx)(t.code,{children:"ServiceInterface"})," interface, you\u2019ll notice it only contains the ",(0,a.jsx)(t.code,{children:"register()"})," method. This method holds action and filter hooks for that class. Other than hooking into existing actions and filters, this method can be used to register our own filters which can be used in blocks or other classes."]}),"\n",(0,a.jsx)(t.p,{children:"Basically, whenever you need to hook into actions or filters, you should use a Service class for that."}),"\n",(0,a.jsx)(t.h2,{id:"creating-a-new-service-class",children:"Creating a new service class"}),"\n",(0,a.jsx)(t.p,{children:"Creating a new service class in your project is as simple as using the following WP-CLI command:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"wp boilerplate create service-example --folder=CustomQuery --file_name=CustomQuery\n"})}),"\n",(0,a.jsx)(t.p,{children:"Once this new class is generated, you can add a new public method that will contain the query logic. We want our method to accept three optional arguments:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"ID of the category"}),"\n",(0,a.jsx)(t.li,{children:"number of posts per page"}),"\n",(0,a.jsx)(t.li,{children:"number of the current page"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Having the category ID optional will allow for one more use case, and that is fetching the latest posts regardless of category. By default, WordPress sorts the posts by publish date, from newest to oldest."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-php",children:"/**\n * Get posts by category ID.\n *\n * @param int $categoryId Category ID.\n * @param int $postsPerPage Number of posts per page.\n * @param int $currentPage Current page number.\n *\n * @return WP_Query Query object.\n */\npublic function getPostsByCategory($categoryId = null, $postsPerPage = 3, $currentPage = 1): WP_Query\n{\n\t$postArgs = [\n\t\t'post_type' => 'post',\n\t\t'cat' => $categoryId,\n\t\t'posts_per_page' => $postsPerPage,\n\t\t'paged' => $currentPage,\n\t];\n\n\treturn new WP_Query($postArgs);\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["To use this method, we can add it as a filter. The filter name should be added as a constant for easier maintenance. Inside the ",(0,a.jsx)(t.code,{children:"register()"})," method, add the following:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-php",children:"\\add_filter(self::GET_POSTS_BY_CATEGORY, [$this, 'getPostsByCategory'], 10, 3);\n"})}),"\n",(0,a.jsx)(t.h2,{id:"using-the-new-filter",children:"Using the new filter"}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["Even if you register a filter for a method that doesn\u2019t accept any arguments, when calling ",(0,a.jsx)(t.code,{children:"apply_filters"}),", you must pass at least 1 parameter. In those cases, simply add ",(0,a.jsx)(t.code,{children:"null"})," as a parameter."]})}),"\n",(0,a.jsx)(t.p,{children:"Here are some examples how you can use the filter:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-php",children:"// Get 3 latest posts, regardless of category.\n$allLatestPosts = apply_filters(CustomQuery::GET_POSTS_BY_CATEGORY, null);\n\n// Get 10 latest posts from the News category. News category ID is 2.\n$latestNews = apply_filters(CustomQuery::GET_POSTS_BY_CATEGORY, 2, 10);\n\n// Get another page of News category.\n$pagedNews = apply_filters(CustomQuery::GET_POSTS_BY_CATEGORY, 2, 10, $currentPage);\n"})}),"\n",(0,a.jsx)(t.p,{children:"The above example shows multiple use cases. The first two examples could be used in a simple block that displays only the selected number of the latest posts. The last example may be used in a REST route for a load more functionality or in a block with classic pagination."}),"\n",(0,a.jsx)(t.p,{children:"Now you can do a regular query loop in your block to display the posts:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-php",children:"if ($latestNews->have_posts()) {\n\twhile ($latestNews->have_posts()) {\n\t\t$latestNews->the_post();\n\t\t// render the card here with the Components::render helper.\n\t}\n}\nwp_reset_postdata();\n"})}),"\n",(0,a.jsx)(t.admonition,{title:"Important",type:"caution",children:(0,a.jsxs)(t.p,{children:["Don't forget to add ",(0,a.jsx)(t.code,{children:"wp_reset_postdata()"})," after looping through the custom query!"]})}),"\n",(0,a.jsx)(t.h2,{id:"prepare-only-the-data-you-need",children:"Prepare only the data you need"}),"\n",(0,a.jsxs)(t.p,{children:["If you would like to improve this even further, you can run the ",(0,a.jsx)(t.code,{children:"have_posts()"})," loop inside the class and save only the data you need to render to an array. This makes the logic even more separated from the view and all you have to do in a block is loop through the array and populate the component attributes with the values from the array."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-php",children:"$postData = [];\n\nif ($queryData->have_posts()) {\n\twhile($queryData->have_posts()) {\n\t\t$queryData->the_post();\n\n\t\t$postData[] = [\n\t\t\t'id' => get_the_ID(),\n\t\t\t'title' => get_the_title(),\n\t\t\t'url' => get_permalink(),\n\t\t\t'image' => get_the_post_thumbnail_url(),\n\t\t\t'date' => get_the_time('d.m.Y.'),\n\t\t\t'excerpt' => get_the_excerpt(),\n\t\t];\n\t}\n}\n\nwp_reset_postdata();\n\nreturn $postData;\n"})}),"\n",(0,a.jsx)(t.h2,{id:"best-practices-for-queries",children:"Best practices for queries"}),"\n",(0,a.jsxs)(t.p,{children:["It\u2019s important to have query optimisation in mind. Some queries may be a lot slower and you have to see if there is any way to follow the ",(0,a.jsx)(t.a,{href:"https://infinum.com/handbook/wordpress/coding-standards/php-coding-standards/database-queries",children:"best practices for database queries"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>i});var a=s(96540);const n={},o=a.createContext(n);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);