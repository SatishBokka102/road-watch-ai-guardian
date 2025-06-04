
export const checkForSmartQuotes = (data: any, dataName: string): string[] => {
  const issues: string[] = [];
  const smartQuotePattern = /[""'']/g;
  
  const checkObject = (obj: any, path: string) => {
    if (typeof obj === 'string') {
      const matches = obj.match(smartQuotePattern);
      if (matches) {
        issues.push(`${path}: Found smart quotes in "${obj}"`);
      }
    } else if (Array.isArray(obj)) {
      obj.forEach((item, index) => {
        checkObject(item, `${path}[${index}]`);
      });
    } else if (obj && typeof obj === 'object') {
      Object.keys(obj).forEach(key => {
        if (key !== 'icon') { // Skip icon properties as they're functions
          checkObject(obj[key], `${path}.${key}`);
        }
      });
    }
  };
  
  checkObject(data, dataName);
  return issues;
};
