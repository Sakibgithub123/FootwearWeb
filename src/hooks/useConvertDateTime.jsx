

const useConvertDateTime = (dateString) => {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        // hour: 'numeric',
        // minute: 'numeric',
        // hour12: true
      };
    
      const date = new Date(dateString);
      return date.toLocaleString('en-BN', options);
};

export default useConvertDateTime;