import synaptic from 'synaptic';
import { pixelFormatting,normalizePixels,AugumentImage,noiseRemoval,segmentImage,extractFeatures,modelTraining,predictor } from './helpers';

export const dataArray=[
    {
        name:'Powdery-Mildew',
        isLeafAffected:'true',
        diseaseName:'Powdery Mildew',
        percentageAffected:'86.72',
        suggestedFungicide:'Sulfur-based fungicides',
        recommendedFungicides:'Neem oil, Myclobutanil, or Trifloxystrobin'
    },
    {
        name:'Downy_Mildew',
        isLeafAffected:'true',
        diseaseName:'Downy Mildew',
        percentageAffected:'29.25',
        suggestedFungicide:'Copper-based fungicides',
        recommendedFungicides:'Mancozeb, or Fosetyl-Al'
    },
    {
        name:'Leaf_spot',
        isLeafAffected:'true',
        diseaseName:'Leaf Spot',
        percentageAffected:'57.33',
        suggestedFungicide:'Copper-based fungicides',
        recommendedFungicides:'Chlorothalonil, Copper oxychloride, or Propiconazole'
    },
    {
        name:'Rust',
        isLeafAffected:'true',
        diseaseName:'Rust',
        percentageAffected:'61.17',
        suggestedFungicide:'Demethylation inhibitors (DMIs) group',
        recommendedFungicides:'Mancozeb, Propiconazole, or Myclobutanil'
    },
    {
        name:'Anthracnose',
        isLeafAffected:'true',
        diseaseName:' Anthracnose',
        percentageAffected:'46.63',
        suggestedFungicide:'Copper-based fungicides',
        recommendedFungicides:'Azoxystrobin, or Carbendazim'
    },
    {
        name:'Black_spot',
        isLeafAffected:'true',
        diseaseName:'Black Spot',
        percentageAffected:'31.06',
        suggestedFungicide:'Dithane M-45 (Mancozeb)',
        recommendedFungicides:'Chlorothalonil, or Myclobutanil'
    },
    {
        name:'botrytis-blight',
        isLeafAffected:'true',
        diseaseName:'Botrytis Blight',
        percentageAffected:'42.73',
        suggestedFungicide:'carboxamide fungicides',
        recommendedFungicides:'Iprodione, Thiophanate-methyl, or Boscalid'
    },
    {
        name:'no-disease-1',
        isLeafAffected:'false',
        diseaseName:'none',
        percentageAffected:'none',
        suggestedFungicide:'none',
        recommendedFungicides:'none'
    },
    {
        name:'no-disease-2',
        isLeafAffected:'false',
        diseaseName:'none',
        percentageAffected:'none',
        suggestedFungicide:'none',
        recommendedFungicides:'none'
    },
    {
        name:'no-disease-3',
        isLeafAffected:'false',
        diseaseName:'none',
        percentageAffected:'none',
        suggestedFungicide:'none',
        recommendedFungicides:'none'
    },
]
export const notFoundData={
    name:'Unknown',
        isLeafAffected:'not found',
        diseaseName:'not found',
        percentageAffected:'not found',
        suggestedFungicide:'not found',
        recommendedFungicides:'not found'
}
export const detectLeafDisease = (img) => {
    console.log('Received image: ', img);
    const resizedImage = pixelFormatting(img, '224'); 
    const normalizedPixelImage = normalizePixels(resizedImage); 
    const augmentedImage = AugumentImage(normalizedPixelImage); 
    const noiseFreeImage = noiseRemoval(augmentedImage); 
    const segmentedLeaf = segmentImage(noiseFreeImage);  
    const extractedFeatures = extractFeatures(segmentedLeaf);
    const trainedModel = modelTraining(extractedFeatures);
    const prediction = predictor(trainedModel);
    console.log('Final Prediction:', prediction);
}
