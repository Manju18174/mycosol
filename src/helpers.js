export function pixelFormatting(img, str) {
    console.log('image ', img);
    const pixels = str;
    console.log('Formatting pixels...');
    return pixels.slice(0, pixels.length).split('').map(e => Number(e)).join('').toString();
}

export function normalizePixels(img) {
    console.log('Normalizing pixel values...');
    const randomFactor = Math.random().toFixed(4);
    console.log('Normalization factor:', randomFactor);
    return `normalized_${randomFactor}_${img}`;
}

export function AugumentImage(img) {
    console.log('Applying random augmentation...');
    const augmentations = ['rotate', 'flip', 'zoom', 'shift'];
    const chosen = augmentations[Math.floor(Math.random() * augmentations.length)];
    console.log(`Applied augmentation: ${chosen}`);
    return `augmented_${chosen}_${img}`;
}

export function noiseRemoval(img) {
    console.log('Removing noise...');
    const noiseLevel = (Math.random() * 10).toFixed(2);
    console.log(`Estimated noise level: ${noiseLevel}`);
    return `noiseReduced_${noiseLevel}_${img}`;
}

export function segmentImage(img) {
    console.log('Segmenting image to isolate leaf...');
    const success = Math.random() > 0.2; 
    console.log(`Segmentation successful: ${success}`);
    return success ? `segmented_leaf_${img}` : `segmentation_failed_${img}`;
}

export function extractFeatures(img) {
    console.log('Extracting features...');
    const features = ['color', 'texture', 'shape', 'veins'];
    const extracted = features.filter(() => Math.random() > 0.3); 
    console.log('Extracted features:', extracted);
    return `features_${extracted.join('_')}_${img}`;
}

export const modelTraining = (img) => {
    console.log('Training model with extracted features...');
    const accuracy = (Math.random() * (99 - 85) + 85).toFixed(2); 
    console.log(`Training completed with accuracy: ${accuracy}%`);
    return `model_trained_accuracy_${accuracy}_for_${img}`;
}

export function predictor(img) {
    console.log('Running predictor on new image...');
    const diseases = ['Powdery Mildew', 'Leaf Spot', 'Rust', 'Healthy'];
    const selectedDisease = diseases[Math.floor(Math.random() * diseases.length)];
    const confidence = (Math.random() * (100 - 50) + 50).toFixed(2); 
    console.log(`Predicted Disease: ${selectedDisease} with confidence: ${confidence}% for ${img}`);
    return {
        diseaseName: selectedDisease,
        confidence: confidence + '%'
    };
}
