export const trimText = (text: string, limit = 60) => (text.length > limit ? `${text.substring(0, limit)}...` : text);

/**
 * Returns a unique id
 * @returns {String} Unique id format id123..
 */

export const getId = () => `id${Math.random().toString(16).slice(2)}`;
