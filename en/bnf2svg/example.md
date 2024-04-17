# BNF2SVG

<!-- 重点1·这行引用了外部样式，一定要记得加，否则无法达到需要的显示效果 -->
<link rel="stylesheet" href="../docs/stylesheets/railroad-diagram.css">

**Input:**

```bnf
S ::= sub_s symbol
sub_s ::= words ',' sub_s
words::=word words
words::=word
symbol ::= '.' | '?'
```

**Output:**

<!-- 重点2·一定要用 <div id="railroad-diagram-output"> 包装 SVG 元素，你也可以在 css 中修改成其他 id -->
<div id="railroad-diagram-output">

  <!-- 重点3·这里是通过 render.js 生成的 BNF 到 SVG 的输出代码 -->
  <dt>S</dt><dd><svg class="railroad-diagram" width="195" height="26" viewBox="0 0 195 26">
  <g transform="translate(.5 .5)">
  <g>
  <path d="M2 9v8l8-4Zm8 0v8l8-4Zm8 4h4" class="start-end"></path>
  </g>
  <path d="M22 13h10"></path>
  <g>
  <path d="M32 13h0"></path>
  <path d="M163 13h0"></path>
  <g class="non-terminal">
  <path d="M32 13h0"></path>
  <path d="M84 13h0"></path>
  <rect x="32" y="2" width="52" height="22"></rect>
  <text x="58" y="17">sub&#95;s</text>
  </g>
  <path d="M84 13h10"></path>
  <path d="M94 13h10"></path>
  <g class="non-terminal">
  <path d="M104 13h0"></path>
  <path d="M163 13h0"></path>
  <rect x="104" y="2" width="59" height="22"></rect>
  <text x="133.5" y="17">symbol</text>
  </g>
  </g>
  <path d="M163 13h10"></path>
  <path d="M173 13h4m0-4v8l16-8v8Z" class="start-end"></path>
  </g>
  </svg>
  </dd><dt>sub_s</dt><dd><svg class="railroad-diagram" width="233" height="26" viewBox="0 0 233 26">
  <g transform="translate(.5 .5)">
  <g>
  <path d="M2 9v8l8-4Zm8 0v8l8-4Zm8 4h4" class="start-end"></path>
  </g>
  <path d="M22 13h10"></path>
  <g>
  <path d="M32 13h0"></path>
  <path d="M201 13h0"></path>
  <g class="non-terminal">
  <path d="M32 13h0"></path>
  <path d="M85 13h0"></path>
  <rect x="32" y="2" width="53" height="22"></rect>
  <text x="58.5" y="17">words</text>
  </g>
  <path d="M85 13h10"></path>
  <path d="M95 13h10"></path>
  <g class="terminal">
  <path d="M105 13h0"></path>
  <path d="M129 13h0"></path>
  <rect x="105" y="2" width="24" height="22" rx="10" ry="10"></rect>
  <text x="117" y="17">,</text>
  </g>
  <path d="M129 13h10"></path>
  <path d="M139 13h10"></path>
  <g class="non-terminal">
  <path d="M149 13h0"></path>
  <path d="M201 13h0"></path>
  <rect x="149" y="2" width="52" height="22"></rect>
  <text x="175" y="17">sub&#95;s</text>
  </g>
  </g>
  <path d="M201 13h10"></path>
  <path d="M211 13h4m0-4v8l16-8v8Z" class="start-end"></path>
  </g>
  </svg>
  </dd><dt>words</dt><dd><svg class="railroad-diagram" width="184" height="26" viewBox="0 0 184 26">
  <g transform="translate(.5 .5)">
  <g>
  <path d="M2 9v8l8-4Zm8 0v8l8-4Zm8 4h4" class="start-end"></path>
  </g>
  <path d="M22 13h10"></path>
  <g>
  <path d="M32 13h0"></path>
  <path d="M152 13h0"></path>
  <g class="non-terminal">
  <path d="M32 13h0"></path>
  <path d="M79 13h0"></path>
  <rect x="32" y="2" width="47" height="22"></rect>
  <text x="55.5" y="17">word</text>
  </g>
  <path d="M79 13h10"></path>
  <path d="M89 13h10"></path>
  <g class="non-terminal">
  <path d="M99 13h0"></path>
  <path d="M152 13h0"></path>
  <rect x="99" y="2" width="53" height="22"></rect>
  <text x="125.5" y="17">words</text>
  </g>
  </g>
  <path d="M152 13h10"></path>
  <path d="M162 13h4m0-4v8l16-8v8Z" class="start-end"></path>
  </g>
  </svg>
  </dd><dt>words</dt><dd><svg class="railroad-diagram" width="111" height="26" viewBox="0 0 111 26">
  <g transform="translate(.5 .5)">
  <g>
  <path d="M2 9v8l8-4Zm8 0v8l8-4Zm8 4h4" class="start-end"></path>
  </g>
  <path d="M22 13h10"></path>
  <g class="non-terminal">
  <path d="M32 13h0"></path>
  <path d="M79 13h0"></path>
  <rect x="32" y="2" width="47" height="22"></rect>
  <text x="55.5" y="17">word</text>
  </g>
  <path d="M79 13h10"></path>
  <path d="M89 13h4m0-4v8l16-8v8Z" class="start-end"></path>
  </g>
  </svg>
  </dd><dt>symbol</dt><dd><svg class="railroad-diagram" width="110" height="56" viewBox="0 0 110 56">
  <g transform="translate(.5 .5)">
  <g>
  <path d="M2 9v8l8-4Zm8 0v8l8-4Zm8 4h4" class="start-end"></path>
  </g>
  <g>
  <path d="M22 13h0"></path>
  <path d="M88 13h0"></path>
  <path d="M22 13h20"></path>
  <g class="terminal">
  <path d="M42 13h0"></path>
  <path d="M66 13h2"></path>
  <rect x="42" y="2" width="24" height="22" rx="10" ry="10"></rect>
  <text x="54" y="17">.</text>
  </g>
  <path d="M68 13h20"></path>
  <path d="M22 13a10 10 0 0 1 10 10v10a10 10 0 0 0 10 10"></path>
  <g class="terminal">
  <path d="M42 43h0"></path>
  <path d="M68 43h0"></path>
  <rect x="42" y="32" width="26" height="22" rx="10" ry="10"></rect>
  <text x="55" y="47">?</text>
  </g>
  <path d="M68 43a10 10 0 0 0 10 -10v-10a10 10 0 0 1 10 -10"></path>
  </g>
  <path d="M88 13h4m0-4v8l16-8v8Z" class="start-end"></path>
  </g>
  </svg>
  </dd>

</div>
