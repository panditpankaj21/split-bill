function formatDateString(dateString) {
    const date = new Date(dateString);
    
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    
    return date.toLocaleDateString('en-US', options);
}

export {
    formatDateString
}