const fs = require('fs');
function replaceMap(file) {
  let content = fs.readFileSync(file, 'utf8');
  const regex = /<svg viewBox="0 0 800 400" className="map-svg"[\s\S]*?<\/svg>/;
  content = content.replace(regex, '<img src="/images/connecting-world.jpg" alt="Global Trade Map" style={{ width: "100%", height: "auto", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }} />');
  fs.writeFileSync(file, content);
}
replaceMap('src/pages/GlobalPage.jsx');
replaceMap('src/components/GlobalPresence.jsx');
