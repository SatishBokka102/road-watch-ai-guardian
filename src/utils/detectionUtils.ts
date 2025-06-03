
export const calculateImageBrightness = (imageData: ImageData) => {
  let sum = 0;
  for (let i = 0; i < imageData.data.length; i += 4) {
    sum += (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
  }
  return sum / (imageData.data.length / 4);
};

export const calculateImageContrast = (imageData: ImageData) => {
  const brightness = calculateImageBrightness(imageData);
  let sum = 0;
  for (let i = 0; i < imageData.data.length; i += 4) {
    const pixelBrightness = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
    sum += Math.pow(pixelBrightness - brightness, 2);
  }
  return Math.sqrt(sum / (imageData.data.length / 4));
};

export const detectFaceRegions = (grayMat: any) => {
  const width = grayMat.cols;
  const height = grayMat.rows;
  
  const centerX = width * 0.4 + Math.random() * width * 0.2;
  const centerY = height * 0.3 + Math.random() * height * 0.2;
  const faceWidth = width * 0.25;
  const faceHeight = height * 0.3;
  
  return [{
    x: centerX - faceWidth / 2,
    y: centerY - faceHeight / 2,
    width: faceWidth,
    height: faceHeight
  }];
};

export const calculateVariance = (mat: any) => {
  try {
    const mean = new window.cv.Mat();
    const stddev = new window.cv.Mat();
    window.cv.meanStdDev(mat, mean, stddev);
    const variance = Math.pow(stddev.data64F[0], 2);
    mean.delete();
    stddev.delete();
    return variance;
  } catch (error) {
    return 0;
  }
};

export const analyzeEyeArea = (src: any, faceRect: any) => {
  try {
    const eyeY = faceRect.y + faceRect.height * 0.3;
    const eyeHeight = faceRect.height * 0.2;
    const leftEyeX = faceRect.x + faceRect.width * 0.2;
    const rightEyeX = faceRect.x + faceRect.width * 0.6;
    const eyeWidth = faceRect.width * 0.15;

    const leftEyeRegion = src.roi(new window.cv.Rect(leftEyeX, eyeY, eyeWidth, eyeHeight));
    const rightEyeRegion = src.roi(new window.cv.Rect(rightEyeX, eyeY, eyeWidth, eyeHeight));

    const leftGray = new window.cv.Mat();
    const rightGray = new window.cv.Mat();
    window.cv.cvtColor(leftEyeRegion, leftGray, window.cv.COLOR_RGBA2GRAY);
    window.cv.cvtColor(rightEyeRegion, rightGray, window.cv.COLOR_RGBA2GRAY);

    const leftVariance = calculateVariance(leftGray);
    const rightVariance = calculateVariance(rightGray);
    
    const avgVariance = (leftVariance + rightVariance) / 2;
    const eyesOpen = avgVariance > 100;
    
    leftEyeRegion.delete();
    rightEyeRegion.delete();
    leftGray.delete();
    rightGray.delete();

    return { eyesOpen, confidence: Math.min(avgVariance / 200, 1) };
  } catch (error) {
    console.error('Eye analysis error:', error);
    return { eyesOpen: true, confidence: 0 };
  }
};
