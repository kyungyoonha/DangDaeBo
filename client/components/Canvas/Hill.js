export const Hill = (color, speed, total) => {
  let stageWidth;
  let stageHeight;
  let points = [];
  let gap;

  const resize = (width, height) => {
    stageWidth = width;
    stageHeight = height;

    gap = Math.ceil(stageWidth / (total - 2));

    for (let i = 0; i < total; i++) {
      points[i] = {
        x: i * gap,
        y: getY(stageHeight), // random
      };
    }
  };

  const draw = (ctx) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    let cur = points[0];
    let prev = cur;

    let dots = [];
    cur.x += speed;

    if (cur.x > gap) {
      points.unshift({
        x: -(gap * 2),
        y: getY(stageHeight),
      });
    } else if (cur.x > stageWidth + gap) {
      points.splice(-1);
    }

    ctx.moveTo(cur.x, cur.y);

    let prevCx = cur.x;
    let prevCy = cur.y;

    for (let i = 1; i < points.length; i++) {
      cur = points[i];
      cur.x += speed;
      const cx = (prev.x + cur.x) / 2;
      const cy = (prev.y + cur.y) / 2;
      ctx.quadraticCurveTo(prev.x, prev.y, cx, cy);

      dots.push({
        x1: prevCx,
        y1: prevCy,
        x2: prev.x,
        y2: prev.y,
        x3: cx,
        y3: cy,
      });

      prev = cur;
      prevCx = cx;
      prevCy = cy;
    }

    ctx.lineTo(prev.x, prev.y);
    ctx.lineTo(stageWidth, stageHeight);
    ctx.lineTo(points[0].x, stageHeight);
    ctx.fill();

    return dots;
  };

  return {
    resize,
    draw,
  };
};

const getY = (stageHeight) => {
  const min = stageHeight / 8;
  const max = stageHeight - min;
  return min + Math.random() * max;
};
