const DIGIT_POINTS = [
  [[3,0],[4,0],[2,1],[3,1],[4,1],[5,1],[1,2],[2,2],[5,2],[6,2],[0,3],[1,3],[6,3],[7,3],[0,4],[1,4],[6,4],[7,4],[0,5],[1,5],[6,5],[7,5],[0,6],[1,6],[6,6],[7,6],[1,7],[2,7],[5,7],[6,7],[2,8],[3,8],[4,8],[5,8],[3,9],[4,9]], // 0
  [[2,0],[3,0],[1,1],[2,1],[3,1],[0,2],[1,2],[2,2],[3,2],[2,3],[3,3],[2,4],[3,4],[2,5],[3,5],[2,6],[3,6],[2,7],[3,7],[2,8],[3,8],[0,9],[1,9],[2,9],[3,9],[4,9],[5,9]], // 1
  [[2,0],[3,0],[4,0],[5,0],[1,1],[2,1],[5,1],[6,1],[0,2],[1,2],[6,2],[7,2],[6,3],[7,3],[5,4],[6,4],[7,4],[4,5],[5,5],[3,6],[4,6],[2,7],[3,7],[1,8],[2,8],[6,8],[0,9],[1,9],[2,9],[3,9],[4,9],[5,9],[6,9],[7,9]], // 2
  [[1,0],[2,0],[3,0],[4,0],[5,0],[0,1],[1,1],[5,1],[6,1],[6,2],[7,2],[3,3],[5,3],[6,3],[3,4],[4,4],[5,4],[5,5],[6,5],[6,6],[7,6],[6,7],[7,7],[0,8],[1,8],[5,8],[6,8],[1,9],[2,9],[3,9],[4,9],[5,9]], // 3
  [[5,0],[6,0],[4,1],[5,1],[6,1],[3,2],[4,2],[5,2],[6,2],[2,3],[3,3],[5,3],[6,3],[1,4],[2,4],[5,4],[6,4],[0,5],[1,5],[5,5],[6,5],[0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6],[7,6],[5,7],[6,7],[5,8],[6,8],[5,9],[6,9]], // 4
  [[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[0,1],[1,1],[0,2],[1,2],[0,3],[1,3],[3,3],[4,3],[5,3],[0,4],[1,4],[2,4],[5,4],[6,4],[6,5],[7,5],[6,6],[7,6],[0,7],[1,7],[6,7],[7,7],[1,8],[2,8],[5,8],[6,8],[2,9],[3,9],[4,9],[5,9]], // 5
  [[2,0],[3,0],[4,0],[5,0],[1,1],[2,1],[5,1],[6,1],[0,2],[1,2],[6,2],[0,3],[1,3],[0,4],[1,4],[3,4],[4,4],[5,4],[0,5],[1,5],[2,5],[5,5],[6,5],[0,6],[1,6],[6,6],[7,6],[0,7],[1,7],[6,7],[7,7],[1,8],[2,8],[5,8],[6,8],[2,9],[3,9],[4,9],[5,9]], // 6
  [[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[6,1],[7,1],[6,2],[7,2],[5,3],[6,3],[4,4],[5,4],[3,5],[4,5],[2,6],[3,6],[1,7],[2,7],[0,8],[1,8],[0,9],[1,9]], // 7
  [[2,0],[3,0],[4,0],[5,0],[1,1],[2,1],[5,1],[6,1],[0,2],[1,2],[6,2],[7,2],[1,3],[2,3],[5,3],[6,3],[2,4],[3,4],[4,4],[5,4],[1,5],[2,5],[5,5],[6,5],[0,6],[1,6],[6,6],[7,6],[0,7],[1,7],[6,7],[7,7],[1,8],[2,8],[5,8],[6,8],[2,9],[3,9],[4,9],[5,9]], // 8
  [[2,0],[3,0],[4,0],[5,0],[1,1],[2,1],[5,1],[6,1],[0,2],[1,2],[6,2],[7,2],[0,3],[1,3],[6,3],[7,3],[1,4],[2,4],[3,4],[5,4],[6,4],[7,4],[2,5],[3,5],[4,5],[6,5],[7,5],[6,6],[7,6],[1,7],[5,7],[6,7],[7,7],[1,8],[2,8],[5,8],[6,8],[2,9],[3,9],[4,9],[5,9]] // 9
];

const CHUNK_WIDTH = 8;
const DIGIT_COUNT = 4;
const BORDER = 2;
const INK_LIMIT = 540;
const MIN_SCORE = 0.75;

const TEMPLATES = DIGIT_POINTS.map(points => ({
  points,
  //unpack the arr to feed max
  width: Math.max(...points.map(p => p[0])) + 1,
  height: Math.max(...points.map(p => p[1])) + 1
}));

async function readDigits(image) {
  await image.decode();
  const bitmap = readPixels(image);
  const chunks = findChunks(bitmap);
  const digits = [];

  for (const chunk of chunks) {
    if (!chunk.dark) break;
    const match = matchChunk(bitmap, chunk, digits);
    if (match.score < MIN_SCORE) continue;
    digits.push(match);
    if (digits.length === DIGIT_COUNT) break;
  }

  if (digits.length !== DIGIT_COUNT) {
    throw new Error("Expected 4 digits; found " + digits.length + ".");
  }
  return digits.sort((a, b) => a.x - b.x).map(match => match.digit).join("");
}


/**
 * Reads the pixel data from an image and converts it to a simple bitmap of ink/no-ink.
 * @param {*} image 
 * @returns 
 */
function readPixels(image) {
  const width = image.naturalWidth, height = image.naturalHeight;

  // draw the img to invisible canvas to read pixel data
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, width, height);
  ctx.drawImage(image, 0, 0);
  
  // read the pixel data and convert to a simple bitmap of ink/no-ink
  const rgba = ctx.getImageData(0, 0, width, height).data;
  const ink = new Uint8Array(width * height);

  // Mark pixels as ink if the sum of RGB is below the threshold.
  for (let y = BORDER; y < height - BORDER; y++) {
    for (let x = BORDER; x < width - BORDER; x++) {
      const p = y * width + x;
      ink[p] = rgba[p * 4] + rgba[p * 4 + 1] + rgba[p * 4 + 2] < INK_LIMIT;
    }
  }
  return { width, height, ink };
}



/**
 * Finds the chunks of the image that are most likely to contain digits.
 * @param {*} bitmap: { width, height, ink }(from fuc readPixels)
 * @returns 
 */
function findChunks(bitmap) {
  const chunks = [];
  for (let x = BORDER; x < bitmap.width - BORDER; x += CHUNK_WIDTH) {
    let dark = 0;
    const end = Math.min(x + CHUNK_WIDTH, bitmap.width - BORDER);//make sure border is excluded
    
    // Count the number of dark pixels in the current chunk.
    for (let y = BORDER; y < bitmap.height - BORDER; y++) {
      for (let px = x; px < end; px++) dark += bitmap.ink[y * bitmap.width + px];
    }
    //push the chunk with its x position and dark pixel count to the chunks array
    chunks.push({ x, dark });
  }

  //sort by dark pixel count 
  chunks.sort((a, b) => b.dark - a.dark);
  return chunks
}



/**
 * Matches a chunk of the image against the digit templates to find the best match.
 * @param {*} bitmap: { width, height, ink }(from fuc readPixels)
 * @param {*} chunk: { x, dark }(from fuc findChunks)
 * @param {*} selected: previously matched digits
 * @returns 
 */
function matchChunk(bitmap, chunk, selected) {
  let best = { score: 0 };

  for (let digit = 0; digit < TEMPLATES.length; digit++) {
    //cal where template can be placed 
    const template = TEMPLATES[digit];
    const firstX = Math.max(BORDER, chunk.x - template.width + 1);
    const lastX = Math.min(bitmap.width - BORDER - template.width, chunk.x + CHUNK_WIDTH - 1);

    //move x
    for (let x = firstX; x <= lastX; x++) {
      // skip x overlapped
      if (selected.some(previous => x < previous.x + previous.width && x + template.width > previous.x)) continue;

      // move y
      for (let y = BORDER; y <= bitmap.height - BORDER - template.height; y++) {
        let dark = 0;
        
        // count img's dark pix at each pos where template is covering
        for (let dy = 0; dy < template.height; dy++) {
          for (let dx = 0; dx < template.width; dx++) {
            dark += bitmap.ink[(y + dy) * bitmap.width + x + dx];
          }
        }

        // not close to number of template's ink, skip
        if (dark < 20) continue;

        let overlap = 0;

        //check template's points, compare with imh's
        for (const [dx, dy] of template.points) {
          // dx dy = temp's ink pos, x y = img's pos
          // if pos is ink, count overlap
          overlap += bitmap.ink[(y + dy) * bitmap.width + x + dx];
        }

        
        //cal score and update best if higher
        const score = 2 * overlap / (dark + template.points.length);
        if (score > best.score) best = { digit, x, width: template.width, score };
      }
    }
  }
  return best;
}