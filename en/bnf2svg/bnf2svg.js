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

      // 将 SVG 插入到指定位置
      content = content.replace('<div class="railroad-diagram-output"></div>', `<div class="railroad-diagram-output">\n${svgContent}\n</div>`);
      console.log(`Inserted SVG into file: ${filePath}`);

      // 写回文件
      fs.writeFileSync(filePath, content, 'utf8');
    }
  });
}

// 开始处理
processDirectory(dirPath);