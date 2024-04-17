# HOMEPAGE

<link rel="stylesheet" href="./bnf2svg/railroad-diagram.css">

Click on a tile to change the primary color:

<!-- 下面的代码用于改变主题颜色 -->

<div class="mdx-switch">
  <button data-md-color-primary="red"><code>red</code></button>
  <button data-md-color-primary="pink"><code>pink</code></button>
  <button data-md-color-primary="purple"><code>purple</code></button>
  <button data-md-color-primary="deep-purple"><code>deep purple</code></button>
  <button data-md-color-primary="indigo"><code>indigo</code></button>
  <button data-md-color-primary="blue"><code>blue</code></button>
  <button data-md-color-primary="light-blue"><code>light blue</code></button>
  <button data-md-color-primary="cyan"><code>cyan</code></button>
  <button data-md-color-primary="teal"><code>teal</code></button>
  <button data-md-color-primary="green"><code>green</code></button>
  <button data-md-color-primary="light-green"><code>light green</code></button>
  <button data-md-color-primary="lime"><code>lime</code></button>
  <button data-md-color-primary="yellow"><code>yellow</code></button>
  <button data-md-color-primary="amber"><code>amber</code></button>
  <button data-md-color-primary="orange"><code>orange</code></button>
  <button data-md-color-primary="deep-orange"><code>deep orange</code></button>
  <button data-md-color-primary="brown"><code>brown</code></button>
  <button data-md-color-primary="grey"><code>grey</code></button>
  <button data-md-color-primary="blue-grey"><code>blue grey</code></button>
  <button data-md-color-primary="black"><code>black</code></button>
  <button data-md-color-primary="white"><code>white</code></button>
</div>

<script>
  var colorMap = {
    "red": {background: "#F44336", text: "#FFFFFF"},
    "pink": {background: "#FFC0CB", text: "#FFFFFF"},
    "purple": {background: "#9C27B0", text: "#FFFFFF"},
    "deep-purple": {background: "#673AB7", text: "#FFFFFF"},
    "indigo": {background: "#3F51B5", text: "#FFFFFF"},
    "blue": {background: "#2196F3", text: "#FFFFFF"},
    "light-blue": {background: "#03A9F4", text: "#FFFFFF"},
    "cyan": {background: "#00BCD4", text: "#FFFFFF"},
    "teal": {background: "#009688", text: "#FFFFFF"},
    "green": {background: "#4CAF50", text: "#FFFFFF"},
    "light-green": {background: "#8BC34A", text: "#FFFFFF"},
    "lime": {background: "#CDDC39", text: "#000000"},
    "yellow": {background: "#FFEB3B", text: "#000000"},
    "amber": {background: "#FFC107", text: "#000000"},
    "orange": {background: "#FF9800", text: "#000000"},
    "deep-orange": {background: "#FF5722", text: "#FFFFFF"},
    "brown": {background: "#795548", text: "#FFFFFF"},
    "grey": {background: "#9E9E9F", text: "#FFFFFF"},
    "blue-grey": {background: "#607D8B", text: "#FFFFFF"},
    "black": {background: "#000000", text: "#FFFFFF"},
    "white": {background: "#FFFFE", text: "#000000"},
    // 你可以在这里添加更多颜色
  };

  var buttons = document.querySelectorAll("button[data-md-color-primary]")
  buttons.forEach(function(button) {
    var color = button.getAttribute("data-md-color-primary");
    // 如果颜色在 colorMap 中，使用 colorMap 中的值
    var backgroundColor = colorMap[color] ? colorMap[color].background : color;
    var textColor = colorMap[color] ? colorMap[color].text : "#000000";
    var codeElement = button.querySelector("code");
    codeElement.style.backgroundColor = backgroundColor;
    codeElement.style.color = textColor;
    
    button.addEventListener("click", function() {
      document.body.setAttribute("data-md-color-primary", color)
      var name = document.querySelector("#__code_1 code span.l")
      name.textContent = color.replace("-", " ")
      
      buttons.forEach(function(btn) {
        var codeElement = btn.querySelector("code");
        codeElement.style.backgroundColor = "initial";
        codeElement.style.color = "initial";
      });
      
      codeElement.style.backgroundColor = backgroundColor;
      codeElement.style.color = textColor;
    })
  })
</script>


## Links

[I'm a link](Page.md#im_a_link)

## I’m a code block

```sql
SELECT * FROM table WHERE id = 1;
```

## I'm a diagram

```bnf
AdminStmt ::=
    'ADMIN' ( 'SHOW' ( 'DDL' ( 'JOBS' Int64Num? WhereClauseOptional | 'JOB' 'QUERIES' NumList )? | TableName 'NEXT_ROW_ID' | 'SLOW' AdminShowSlow ) | 'CHECK' ( 'TABLE' TableNameList | 'INDEX' TableName Identifier ( HandleRange ( ',' HandleRange )* )? ) | 'RECOVER' 'INDEX' TableName Identifier | 'CLEANUP' ( 'INDEX' TableName Identifier | 'TABLE' 'LOCK' TableNameList ) | 'CHECKSUM' 'TABLE' TableNameList | 'CANCEL' 'DDL' 'JOBS' NumList | 'RELOAD' ( 'EXPR_PUSHDOWN_BLACKLIST' | 'OPT_RULE_BLACKLIST' | 'BINDINGS' ) | 'PLUGINS' ( 'ENABLE' | 'DISABLE' ) PluginNameList | 'REPAIR' 'TABLE' TableName CreateTableStmt | ( 'FLUSH' | 'CAPTURE' | 'EVOLVE' ) 'BINDINGS' )

TableNameList ::=
    TableName ( ',' TableName )*
```

<div id="railroad-diagram-output"></div>
