const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  export function formatString(str) {
  if (typeof str === 'string' && str.includes('_')) {
    return str.replace(/_/g, ' ');
  }
  return str;
}

export default capitalizeFirstLetter