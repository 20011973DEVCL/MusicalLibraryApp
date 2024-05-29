export interface Country {
  statusCode:    number;
  successful:    boolean;
  errorMessages: null;
  result:        Result[];
}

export interface Result {
  idCountry:   string;
  countryName: string;
}
