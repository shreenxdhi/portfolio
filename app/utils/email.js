'use client';

export const getObfuscatedEmail = () => {
  const user = 'shreenidhiv17';
  const domain = 'gmail.com';
  return `${user}@${domain}`;
};

export const handleMailTo = (e, subject = 'RTL Design Contact', body = '') => {
  if (e && typeof e.preventDefault === 'function') {
    e.preventDefault();
  }
  const email = getObfuscatedEmail();
  let mailUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  if (body) mailUrl += `&body=${encodeURIComponent(body)}`;
  window.location.href = mailUrl;
};
