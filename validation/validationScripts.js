const validationScrits = {
    //validation 
    // Returns true/false
     validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const valid = re.test(String(email).toLowerCase().trim());
        return valid
    },

    // Returns { valid: boolean, normalized: string }
     validatePhone(phone, { minDigits = 7, maxDigits = 15 } = {}) {
        if (typeof phone !== 'string') return { valid: false, normalized: '' };
        const re = /^[^A-Za-z]*$/;
        const trimmed = phone.trim();
        const hasPlus = trimmed.startsWith('+');
        const digitsOnly = trimmed.replace(/[^\d]/g, '');
        const len = digitsOnly.length;
        const valid = len >= minDigits && len <= maxDigits && re.test(trimmed);
        return { valid, normalized: (hasPlus ? '+' : '') + digitsOnly };
    }
}

export { validationScrits }