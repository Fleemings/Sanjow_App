const regExp = /^[-!#$%&'*+/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
const numbers = /^\d+$/;
const validate = {
  email(email: string): string | boolean {
    if (email) {
      // Check existence and length
      if (email && email.length < 255) {
        // Validate with regular expression
        if (regExp.test(email)) {
          // Validate email different parts length
          const parts = email.split('@');
          if (parts[0].length < 65) {
            const domainParts = parts[1].split('.');
            // eslint-disable-next-line no-restricted-syntax
            for (const part of domainParts) {
              if (part.length > 64) {
                return false;
              }
            }
            return true;
          }
        }
      }
    }
    return false;
  },
  string(string: string): string | boolean {
    return string.trim().length > 0 ? string.trim() : false;
  },
  number(value: any): boolean {
    return numbers.test(value);
  },
};

export default validate;
