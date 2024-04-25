const fs = require('fs');
const path = require('path');
const render = require('./render');

// 要遍历的目录
const dirPath = '../docs';

// 遍历目录的函数
function processDirectory(directory) {
  fs.readdirSync(directory, { withFileTypes: true }).forEach(file => {
    const filePath = path.join(directory, file.name);

    if (file.isDirectory()) {
      // 如果是目录，递归处理
      processDirectory(filePath);
    } else if (path.extname(file.name) === '.md') {
      // 只处理 Markdown 文件
      let content = fs.readFileSync(filePath, 'utf8');
      
      // 找到所有的 BNF 代码块
      const regex = /```bnf\n([\s\S]*?)```/g;
      let match;
      let svgContent = '';
      while ((match = regex.exec(content)) !== null) {
        console.log(`Found BNF block: ${match[0]}`);
        // 使用 render 函数将 BNF 代码块转换为 SVG
        const svg = render(match[1]);
        const indentedSvg = '  ' + svg.replace(/\n/g, '\n  '); // 添加缩进
        console.log(`Converted BNF to SVG: ${indentedSvg}`);
        svgContent += '\n' + indentedSvg + '\n';
      }

      // // 创建样式字符串
      // const style = `
      // <style>
      //   .railroad-diagram-output dt:first-child { margin-top: 0 }
      //   .railroad-diagram-output dt:after { font-weight: 400; content: " ::=" }
      //   .railroad-diagram-output dd { margin: 0 0 16px; padding: 0 16px; overflow-x: auto; overflow-y: hidden}
      //   .railroad-diagram-output path { fill: none; stroke-width: 1; stroke: #0e2336 }
      //   .railroad-diagram-output text { font: 10px Verdana, sans-serif; text-anchor: middle }
      //   .railroad-diagram-output rect { fill: #b0cbed; stroke-width: 1; stroke: #0e2336 }
      //   .railroad-diagram-output .start-end { fill: #0e2336 }
      //   .railroad-diagram-output .terminal rect { fill: #d0e2f3 }
      //   .railroad-diagram-output .terminal text { font-weight: 700 }
      // </style>`;

      // 将 SVG 和样式插入到指定位置
      const replacement = `<div class="railroad-diagram-output">${svgContent}</div>`.replace(/\n/g, ''); // 压缩成一行
      content = content.replace('<!-- svg_placeholder -->', replacement);
      console.log(`Inserted SVG into file: ${filePath}`);

      // 写回文件
      fs.writeFileSync(filePath, content, 'utf8');
    }
  });
}

// 开始处理
processDirectory(dirPath);
