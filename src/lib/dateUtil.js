function formatDate() { 
    const now = new Date()
    const hour = now.getHours(); 
    const minute = now.getMinutes(); 
    return hour + ":" + minute
} 

export default {
    formatDate
}
  
  