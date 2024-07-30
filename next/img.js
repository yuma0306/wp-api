import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const apiUrl = 'http://localhost/wp-json/wp/v2/media/';
const images = await fetchImageUrls(apiUrl);

images.forEach(async (imageUrl) => {
  const imageName = path.basename(imageUrl, path.extname(imageUrl));
  const localPath = path.resolve(__dirname, 'public/img', `${imageName}${path.extname(imageUrl)}`);
  try {
    await downloadImage(imageUrl, localPath);
    console.log(`Image ${imageName} downloaded successfully`);
  } catch (err) {
    console.error(`Error downloading image ${imageName}:`, err);
  }
});

async function downloadImage(url, filepath) {
  const writer = fs.createWriteStream(filepath);
  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream'
  });
  response.data.pipe(writer);
  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
}

async function fetchImageUrls(apiUrl) {
  try {
    const response = await axios.get(apiUrl);
    return response.data.map(item => item.source_url);
  } catch (error) {
    console.error('Error fetching image URLs:', error);
    return [];
  }
}
