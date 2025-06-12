import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// YAMLファイルのパス
const yamlFiles = [
  '../src/data/items.yaml',
  '../src/data/equipment.yaml',
  '../src/data/monsters.yaml',
];

// YAMLをJSONに変換
yamlFiles.forEach(file => {
  const yamlPath = path.join(__dirname, file);
  const jsonPath = yamlPath.replace('.yaml', '.json');
  
  try {
    const yamlContent = fs.readFileSync(yamlPath, 'utf8');
    const jsonContent = yaml.load(yamlContent);
    
    fs.writeFileSync(jsonPath, JSON.stringify(jsonContent, null, 2));
    console.log(`✅ Converted: ${path.basename(yamlPath)} → ${path.basename(jsonPath)}`);
  } catch (error) {
    console.error(`❌ Error converting ${file}:`, error.message);
  }
});