export class Detector {
  #transporteur;
  #formats;
  #regex;

  constructor(transporteur, formats) {
    if (!Array.isArray(formats) || formats.length < 1) {
      throw new Error('Une liste de formats doit être fournie');
    }

    this.#transporteur = transporteur;
    this.#formats = formats;
    this.#initRegex();
  }

  detecte(numeroSuivi) {
    if (!this.#regex.test(numeroSuivi)) {
      return {
        transporteur: this.#transporteur,
        matched: false,
      };
    }

    return {
      transporteur: this.#transporteur,
      matched: true,
      pattern: this.#getMatchingFormat(numeroSuivi),
    };
  }

  #initRegex() {
    const formatsRegex = [];
    for (let i = 0; i < this.#formats.length; i++) {
      formatsRegex.push(`(?<format${i}>${this.#formats[i]})`);
    }

    const regexString = `^(${formatsRegex.join('|')})$`;
    this.#regex = new RegExp(regexString, 'i');
  }

  #getMatchingFormat(numeroSuivi) {
    const regexResult = this.#regex.exec(numeroSuivi);
    for (const [i, format] of Object.entries(this.#formats)) {
      if (regexResult.groups[`format${i}`] !== undefined) {
        return format;
      }
    }

    throw new Error(
      `Pattern introuvable... Numéro suivi: ${numeroSuivi}. Formats: ${JSON.stringify(
        this.#formats
      )}.`
    );
  }
}
