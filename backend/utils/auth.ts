export const generateVerificationToken = () => {
  return Math.floor(Math.random() * 1000000).toString();
}
