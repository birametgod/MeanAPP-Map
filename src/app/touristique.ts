export class Touristique {
  type: string;
  properties: {
    id: string;
    type: string;
    type_detail: string;
    nom: string;
    adresse: string;
    codepostal: string;
    commune: string;
    telephone: string;
    producteur: string;
    date_creation: string;
    last_update: string;
    last_update_fme: string;
  };
  geometry: {
    type: string;
    coordinates: [number];
  };
}
