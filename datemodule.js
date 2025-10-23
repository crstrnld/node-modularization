function getToday() {
  const today = new Date();
  return today.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function getTime() {
  const now = new Date();
  return now.toLocaleTimeString('id-ID');
}

module.exports = { getToday, getTime };
