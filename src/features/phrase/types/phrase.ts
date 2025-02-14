// src/domain/phrase.ts

/**
 * Entidad principal - Núcleo del negocio
 *
 * Principios aplicados:
 * - Single Responsibility: Solo representa los datos de la frase
 * - Open/Closed: Propiedades readonly permiten extensión sin modificación
 */
export interface Phrase {
  id: string;
  text: string;
  createdAt: Date;
}

/**
 * Factory function para crear frases
 *
 * Encapsula la lógica de creación:
 * - Generación de ID
 * - Validación básica
 * - Inmutabilidad
 */
/*   export const createPhrase = (text: string): Phrase => {
    if (!text.trim()) throw new Error("El texto no puede estar vacío");
    if (text.length > 280) throw new Error("Máximo 280 caracteres");
  
    return Object.freeze({
      id: crypto.randomUUID(),
      text: text.trim(),
      createdAt: new Date()
    });
  }; */

/**
 * Tipo para operaciones de filtrado
 *
 * Diseño escalable: Puede extenderse con nuevos criterios
 */
/*   export type PhraseFilter = {
    searchText?: string;
  }; */

/**
 * Servicio de dominio para lógica de negocio
 *
 * (Opcional pero recomendado para complejidad creciente)
 */
/*   export class PhraseService {
    static filterPhrases(phrases: Phrase[], filter: PhraseFilter): Phrase[] {
      return phrases.filter(phrase => 
        phrase.text.toLowerCase().includes(filter.searchText?.toLowerCase() || '')
      );
    }
  
    static validatePhraseText(text: string): void {
      if (!text.trim()) throw new Error("Texto requerido");
      if (text.length > 280) throw new Error("Máximo 280 caracteres");
    }
  } */
