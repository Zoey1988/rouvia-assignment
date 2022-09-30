export const formatDate = (ISOString: string) : string => {
  const date = new Date(ISOString);
  const fullYear = date.getFullYear();
  const day = date.getDay();
  const month = date.toLocaleString('default', { month: 'short' });
  
  return `${day} ${month} ${fullYear}`
}