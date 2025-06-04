
import { checkForSmartQuotes } from './checkSmartQuotes';
import FEATURES from '../components/AIFeaturesData';

const runSmartQuoteCheck = () => {
  const issues = checkForSmartQuotes(FEATURES, 'FEATURES');

  if (issues.length > 0) {
    console.warn('⚠️ Smart quotes or unsafe characters found:');
    issues.forEach(i => console.log(i));
  } else {
    console.log('✅ No smart quotes or bad characters detected.');
  }
  
  return issues;
};

export default runSmartQuoteCheck;
